import Link from 'next/link'
import { ThemeToggle } from './ThemeToggle'
import { NavbarEffect } from './NavbarEffect'

export function Header() {
    return (
        <nav
            id="main-nav"
            className="fixed w-full z-50 top-0 left-0 border-b border-gray-200 dark:border-white/10 glass-panel bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-3">
                        <img src="/assets/logo.png" alt="Intervision Logo" className="h-10 w-auto object-contain" />
                        <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                            Metatus
                        </span>
                    </Link>

                    {/* Nav links */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link className="text-sm font-medium text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-white transition-colors" href="/#">
                            Product
                        </Link>
                        <Link className="text-sm font-medium text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-white transition-colors" href="/#">
                            Features
                        </Link>
                        <Link className="text-sm font-medium text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-white transition-colors" href="/blogs">
                            Blog
                        </Link>
                        <Link className="text-sm font-medium text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-white transition-colors" href="/#">
                            Pricing
                        </Link>
                    </div>

                    {/* CTA + Theme toggle */}
                    <div className="flex items-center space-x-3">
                        <Link
                            className="hidden md:block text-sm font-medium text-slate-700 hover:text-primary dark:text-slate-300 dark:hover:text-white transition-colors"
                            href="#"
                        >
                            Log in
                        </Link>
                        <ThemeToggle />
                        <Link
                            className="px-5 py-2.5 bg-primary hover:bg-primary-hover text-white text-sm font-semibold rounded-full shadow-neon transition-all transform hover:scale-105"
                            href="#"
                        >
                            Start Free
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button className="text-slate-500 dark:text-slate-300 hover:text-white focus:outline-none">
                            <span className="material-icons-outlined text-2xl">menu</span>
                        </button>
                    </div>
                </div>
            </div>
            <NavbarEffect />
        </nav>
    )
}
