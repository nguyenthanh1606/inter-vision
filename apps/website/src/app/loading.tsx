export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background-light dark:bg-background-dark">
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 rounded-full border-4 border-primary/20 border-t-primary animate-spin" />
        <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
          Loading...
        </p>
      </div>
    </div>
  )
}
