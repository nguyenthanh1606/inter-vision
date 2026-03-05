/**
 * Client-side encryption helper using AES-GCM via Web Crypto API.
 * Uses a shared key derived from a public token embedded in the widget config.
 */

const ALGO = 'AES-GCM'
const KEY_LENGTH = 256

async function deriveKey(secret: string): Promise<CryptoKey> {
  const enc = new TextEncoder()
  const keyMaterial = await crypto.subtle.importKey(
    'raw',
    enc.encode(secret.padEnd(32, '0').slice(0, 32)),
    { name: 'AES-GCM' },
    false,
    ['encrypt', 'decrypt']
  )
  return keyMaterial
}

export async function encrypt(data: string, secret: string): Promise<string> {
  const key = await deriveKey(secret)
  const iv = crypto.getRandomValues(new Uint8Array(12))
  const enc = new TextEncoder()

  const encrypted = await crypto.subtle.encrypt(
    { name: ALGO, iv },
    key,
    enc.encode(data)
  )

  // Combine IV + ciphertext and base64 encode
  const combined = new Uint8Array(iv.length + new Uint8Array(encrypted).length)
  combined.set(iv)
  combined.set(new Uint8Array(encrypted), iv.length)

  return btoa(String.fromCharCode(...combined))
}

export async function decrypt(
  encoded: string,
  secret: string
): Promise<string> {
  const key = await deriveKey(secret)
  const combined = Uint8Array.from(atob(encoded), c => c.charCodeAt(0))

  const iv = combined.slice(0, 12)
  const ciphertext = combined.slice(12)

  const decrypted = await crypto.subtle.decrypt(
    { name: ALGO, iv },
    key,
    ciphertext
  )

  return new TextDecoder().decode(decrypted)
}
