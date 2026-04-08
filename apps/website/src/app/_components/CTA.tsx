import Link from 'next/link'
import { AnimatedSection } from './AnimatedSection'

export function CTA() {
    return (
        <section className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-slate-900 dark:from-surface-dark dark:to-black" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent" />

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <AnimatedSection>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Ready to automate your growth?
                    </h2>
                    <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
                        Join 10,000+ marketers generating higher quality leads with
                        conversational AI.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            className="px-8 py-4 bg-primary hover:bg-primary-hover text-white font-semibold rounded-full shadow-neon transition-all transform hover:scale-105 active:scale-95"
                            href="#"
                        >
                            Start Free Trial
                        </Link>
                        <Link
                            className="px-8 py-4 bg-transparent border border-white/30 hover:bg-white/10 text-white font-semibold rounded-full transition-all hover:scale-105 active:scale-95"
                            href="#"
                        >
                            Talk to Sales
                        </Link>
                    </div>
                    <p className="mt-6 text-sm text-blue-200/60">
                        No credit card required. 14-day free trial.
                    </p>
                </AnimatedSection>
            </div>
        </section>
    )
}
