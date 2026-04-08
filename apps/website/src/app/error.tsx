'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 text-center bg-background-light dark:bg-background-dark">
      <h1 className="text-6xl font-black text-slate-900 dark:text-white mb-4">
        Something went wrong
      </h1>
      <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-md">
        An unexpected error occurred. Please try again or return home.
      </p>
      <div className="flex gap-4">
        <button
          onClick={reset}
          className="px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary-hover transition-colors"
        >
          Try Again
        </button>
        <Link
          href="/"
          className="px-6 py-3 border border-slate-300 dark:border-white/20 text-slate-700 dark:text-white font-semibold rounded-full hover:bg-slate-50 dark:hover:bg-white/5 transition-colors"
        >
          Go Home
        </Link>
      </div>
    </main>
  )
}
