'use client';

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'
import { NavbarEffect } from './NavbarEffect'

export function Header() {
    const pathname = usePathname();

    const navLinks = [
        { name: 'Product', href: '/products' },
        { name: 'Features', href: '/features' },
        { name: 'Blog', href: '/blogs' },
        { name: 'Pricing', href: '/pricing' },
    ];

    return (
        <nav
            id="main-nav"
            className="fixed w-full z-50 top-0 left-0 border-b border-gray-200 dark:border-white/10 glass-panel bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-3">
                        <Image src="/assets/logo.png" alt="Intervision Logo" width={40} height={40} className="h-10 w-auto object-contain" />
                        <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                            Metatus
                        </span>
                    </Link>

                    {/* Nav links */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={`text-sm font-medium transition-colors ${
                                        isActive
                                            ? 'text-primary dark:text-white'
                                            : 'text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-white'
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
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
                            <Menu size={24} />
                        </button>
                    </div>
                </div>
            </div>
            <NavbarEffect />
        </nav>
    )
}
