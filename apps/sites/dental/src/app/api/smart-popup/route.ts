import { NextRequest, NextResponse } from 'next/server';

const GROQ_API_KEY = process.env.GROQ_API_KEY || '';
const GROQ_URL = 'https://api.groq.com/openai/v1/chat/completions';
const DOMAIN = process.env.SMART_POPUP_DOMAIN || 'nhakhoaident.com';

// Must match client-side key derivation
function getEncKey(domain: string): string {
  return `sp_${domain}_secure_2024`;
}

// --- AES-GCM server-side crypto using Web Crypto API ---
async function deriveKey(secret: string): Promise<CryptoKey> {
  const enc = new TextEncoder();
  return crypto.subtle.importKey(
    'raw',
    enc.encode(secret.padEnd(32, '0').slice(0, 32)),
    { name: 'AES-GCM' },
    false,
    ['encrypt', 'decrypt']
  );
}

async function decryptPayload(encoded: string, secret: string): Promise<string> {
  const key = await deriveKey(secret);
  const combined = Uint8Array.from(atob(encoded), (c) => c.charCodeAt(0));
  const iv = combined.slice(0, 12);
  const ciphertext = combined.slice(12);

  const decrypted = await crypto.subtle.decrypt(
    { name: 'AES-GCM', iv },
    key,
    ciphertext
  );
  return new TextDecoder().decode(decrypted);
}

async function encryptPayload(data: string, secret: string): Promise<string> {
  const key = await deriveKey(secret);
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const enc = new TextEncoder();

  const encrypted = await crypto.subtle.encrypt(
    { name: 'AES-GCM', iv },
    key,
    enc.encode(data)
  );

  const combined = new Uint8Array(iv.length + new Uint8Array(encrypted).length);
  combined.set(iv);
  combined.set(new Uint8Array(encrypted), iv.length);
  return btoa(String.fromCharCode(...combined));
}

export async function POST(request: NextRequest) {
  if (!GROQ_API_KEY) {
    return NextResponse.json({ error: 'Not configured' }, { status: 500 });
  }

  try {
    const body = await request.json();
    const encKey = getEncKey(DOMAIN);

    let messages, temperature, max_tokens;

    if (body.d) {
      // Encrypted request — decrypt it
      const decrypted = await decryptPayload(body.d, encKey);
      const parsed = JSON.parse(decrypted);
      messages = parsed.messages;
      temperature = parsed.temperature;
      max_tokens = parsed.max_tokens;
    } else {
      // Fallback: plain request (shouldn't happen in production)
      messages = body.messages;
      temperature = body.temperature;
      max_tokens = body.max_tokens;
    }

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
    }

    const response = await fetch(GROQ_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GROQ_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: messages.slice(0, 3),
        temperature: Math.min(temperature || 0.7, 1.0),
        max_tokens: Math.min(max_tokens || 500, 800),
      }),
    });

    if (!response.ok) {
      console.error('Groq API error:', await response.text());
      return NextResponse.json({ error: 'AI service error' }, { status: 502 });
    }

    const data = await response.json();

    // Encrypt the response before sending back
    const encryptedResponse = await encryptPayload(JSON.stringify(data), encKey);
    return NextResponse.json({ d: encryptedResponse });
  } catch (error) {
    console.error('Proxy error:', error);
    return NextResponse.json({ error: 'Internal error' }, { status: 500 });
  }
}
