import type { Metadata } from 'next'
import { CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Pricing - Intervision',
  description: 'Choose the perfect plan to scale your business. Start for free, upgrade as you grow.',
}

export default function PricingPage() {
  return (
    <main className="flex-1 flex flex-col items-center w-full pt-24 px-4 py-12 md:px-10 bg-background-light dark:bg-background-dark transition-colors duration-300">
      <div className="max-w-[1200px] w-full flex flex-col py-10 gap-10">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <h1 className="text-slate-900 dark:text-white text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em]">
            Optimize Your <br />
            <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-neon-accent">
              Lead Generation
            </span>
          </h1>
          <p className="text-slate-500 dark:text-text-secondary text-lg max-w-2xl mx-auto">
            Choose the perfect plan to scale your business. Start for free,
            upgrade as you grow.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center">
          <div className="flex items-center gap-4 bg-white dark:bg-surface-dark p-1.5 rounded-full border border-slate-200 dark:border-border-dark shadow-sm">
            <span className="text-sm font-medium text-slate-500 dark:text-text-secondary pl-3">
              Monthly
            </span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input readOnly checked className="sr-only peer" type="checkbox" />
              <div className="w-11 h-6 bg-slate-200 dark:bg-border-dark peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
            </label>
            <span className="text-sm font-bold text-slate-900 dark:text-white pr-3 flex items-center gap-2">
              Annually
              <span className="text-[10px] text-primary bg-primary/10 px-2 py-0.5 rounded-full border border-primary/20 uppercase tracking-wider">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-4">
          {/* Free Plan */}
          <div className="flex flex-col rounded-2xl border border-slate-200 dark:border-border-dark bg-white dark:bg-surface-dark p-8 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-md relative group">
            <div className="mb-6">
              <h3 className="text-slate-900 dark:text-white text-sm font-bold mb-2 uppercase tracking-widest">Free</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                  $0
                </span>
                <span className="text-slate-500 dark:text-text-secondary font-medium">/month</span>
              </div>
              <p className="text-slate-500 dark:text-text-secondary text-sm mt-3">
                For individuals just starting out.
              </p>
            </div>
            <button className="w-full py-3 px-4 rounded-xl bg-slate-100 dark:bg-border-dark hover:bg-slate-200 dark:hover:bg-border-dark/80 text-slate-900 dark:text-white font-bold text-sm mb-8 transition-colors border border-transparent">
              Start for Free
            </button>
            <div className="space-y-4 flex-1">
              <div className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                <CheckCircle size={20} className="text-primary shrink-0" />
                <span>100 visitors</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                <CheckCircle size={20} className="text-primary shrink-0" />
                <span>5 unlocked leads</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                <CheckCircle size={20} className="text-primary shrink-0" />
                <span>Intervision branding</span>
              </div>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="flex flex-col rounded-2xl border-2 border-primary bg-white/80 dark:bg-surface-dark/50 p-8 relative shadow-xl shadow-primary/5 dark:shadow-primary/10 transform md:-translate-y-4 z-10">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
              Most Popular
            </div>
            <div className="mb-6">
              <h3 className="text-primary text-sm font-bold mb-2 uppercase tracking-widest">
                Professional
              </h3>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                  $39
                </span>
                <span className="text-slate-500 dark:text-text-secondary font-medium">/month</span>
              </div>
              <p className="text-slate-500 dark:text-text-secondary text-sm mt-3">
                For growing teams and startups.
              </p>
            </div>
            <button className="w-full py-3 px-4 rounded-xl bg-primary hover:bg-primary-hover text-white font-bold text-sm mb-8 transition-all shadow-[0_0_20px_rgba(37,106,244,0.2)] dark:shadow-[0_0_20px_rgba(37,106,244,0.3)] hover:shadow-[0_0_30px_rgba(37,106,244,0.4)]">
              Get Started Now
            </button>
            <div className="space-y-4 flex-1">
              <div className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-200">
                <CheckCircle size={20} className="text-neon-accent shrink-0" />
                <span className="font-medium">3,000 visitors</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-200">
                <CheckCircle size={20} className="text-neon-accent shrink-0" />
                <span className="font-medium">Unlimited leads unlocked</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-200">
                <CheckCircle size={20} className="text-neon-accent shrink-0" />
                <span>Remove branding</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-200">
                <CheckCircle size={20} className="text-neon-accent shrink-0" />
                <span>Advanced automation</span>
              </div>
            </div>
          </div>

          {/* Max Plan */}
          <div className="flex flex-col rounded-2xl border border-slate-200 dark:border-border-dark bg-white dark:bg-surface-dark p-8 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-md relative group">
            <div className="mb-6">
              <h3 className="text-slate-900 dark:text-white text-sm font-bold mb-2 uppercase tracking-widest">Max</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">
                  $99
                </span>
                <span className="text-slate-500 dark:text-text-secondary font-medium">/month</span>
              </div>
              <p className="text-slate-500 dark:text-text-secondary text-sm mt-3">
                For large scale enterprises.
              </p>
            </div>
            <button className="w-full py-3 px-4 rounded-xl bg-slate-100 dark:bg-border-dark hover:bg-slate-200 dark:hover:bg-border-dark/80 text-slate-900 dark:text-white font-bold text-sm mb-8 transition-colors border border-transparent">
              Contact Sales
            </button>
            <div className="space-y-4 flex-1">
              <div className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                <CheckCircle size={20} className="text-primary shrink-0" />
                <span>10,000+ visitors</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                <CheckCircle size={20} className="text-primary shrink-0" />
                <span>Webhook &amp; API access</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                <CheckCircle size={20} className="text-primary shrink-0" />
                <span>CRM Integrations</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                <CheckCircle size={20} className="text-primary shrink-0" />
                <span>AI Lead Scoring</span>
              </div>
              <div className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-300">
                <CheckCircle size={20} className="text-primary shrink-0" />
                <span>White label support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Enterprise CTA */}
        <div className="mt-8 p-8 rounded-2xl bg-gradient-to-r from-slate-50 to-slate-100 dark:from-surface-dark dark:to-border-dark border border-slate-200 dark:border-border-dark flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col gap-2">
            <h3 className="text-slate-900 dark:text-white text-xl font-bold">
              Need a custom solution?
            </h3>
            <p className="text-slate-500 dark:text-text-secondary">
              We offer Enterprise plans with custom SLAs and 24/7 dedicated support.
            </p>
          </div>
          <button className="whitespace-nowrap px-6 py-3 rounded-xl bg-primary text-white font-bold text-sm hover:bg-primary-hover transition-colors shadow-lg shadow-primary/10">
            Contact Us
          </button>
        </div>
      </div>
    </main>
  )
}
