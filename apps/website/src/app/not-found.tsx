import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 text-center bg-background-light dark:bg-background-dark">
      <h1 className="text-8xl font-black text-primary mb-4">404</h1>
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
        Page Not Found
      </h2>
      <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary-hover transition-colors"
      >
        Back to Home
      </Link>
    </main>
  )
}
