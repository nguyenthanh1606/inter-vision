import { AnimatedSection } from './AnimatedSection'

export function Footer() {
    return (
        <footer className="bg-white dark:bg-[#05080f] border-t border-gray-200 dark:border-white/5 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
                        {/* Brand */}
                        <div className="col-span-2 lg:col-span-2">
                            <div className="flex items-center space-x-2 mb-4">
                                <img src="/assets/logo.png" alt="Intervision Logo" className="h-8 w-auto object-contain" />
                                <span className="text-lg font-bold text-slate-900 dark:text-white">
                                    Metatus
                                </span>
                            </div>
                            <p className="text-slate-500 dark:text-slate-400 text-sm max-w-xs mb-6">
                                Empowering businesses to scale personal conversations with AI
                                technology. Turn traffic into revenue.
                            </p>
                            <div className="flex space-x-4">
                                {['facebook', 'public', 'post_add'].map(icon => (
                                    <a
                                        key={icon}
                                        className="text-slate-400 hover:text-primary transition-colors hover:scale-110 transform"
                                        href="#"
                                    >
                                        <span className="material-icons-outlined">{icon}</span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Links */}
                        {[
                            {
                                heading: 'Product',
                                items: ['Features', 'Integrations', 'Pricing', 'Changelog']
                            },
                            {
                                heading: 'Resources',
                                items: ['Documentation', 'API Reference', 'Community', 'Blog']
                            },
                            {
                                heading: 'Company',
                                items: ['About', 'Careers', 'Legal', 'Contact']
                            }
                        ].map(({ heading, items }) => (
                            <div key={heading}>
                                <h4 className="font-bold text-slate-900 dark:text-white mb-4">
                                    {heading}
                                </h4>
                                <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                                    {items.map(item => (
                                        <li key={item}>
                                            <a
                                                className="hover:text-primary transition-colors"
                                                href={item === 'Blog' ? '/blogs' : item === 'Pricing' ? '/pricing' : '#'}
                                            >
                                                {item}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    {/* Footer bottom */}
                    <div className="pt-8 border-t border-gray-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-sm text-slate-400">
                            © 2024 Intervision AI Inc. All rights reserved.
                        </p>
                        <div className="flex space-x-6 mt-4 md:mt-0 text-sm text-slate-400">
                            <a
                                className="hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                                href="#"
                            >
                                Privacy Policy
                            </a>
                            <a
                                className="hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                                href="#"
                            >
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </footer>
    )
}
