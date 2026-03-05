// Root layout: required by Next.js, renders children without extra wrappers.
// Actual layout logic is in [locale]/layout.tsx
export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return children
}
