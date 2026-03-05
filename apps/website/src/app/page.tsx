import { ThemeToggle } from './components/ThemeToggle';
import { NavbarEffect } from './components/NavbarEffect';
import { AnimatedSection } from './components/AnimatedSection';

export default function HomePage() {
  return (
    <>
      {/* Navbar */}
      <nav
        id="main-nav"
        className="fixed w-full z-50 top-0 left-0 border-b border-gray-200 dark:border-white/10 glass-panel"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center animate-neon-pulse">
                <span className="material-icons-outlined text-white text-xl">smart_toy</span>
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                Intervision
              </span>
            </div>

            {/* Nav links */}
            <div className="hidden md:flex items-center space-x-8">
              {['Product', 'Features', 'Use Cases', 'Pricing'].map((label) => (
                <a
                  key={label}
                  className="text-sm font-medium text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-white transition-colors"
                  href="#"
                >
                  {label}
                </a>
              ))}
            </div>

            {/* CTA + Theme toggle */}
            <div className="flex items-center space-x-3">
              <a
                className="hidden md:block text-sm font-medium text-slate-700 hover:text-primary dark:text-slate-300 dark:hover:text-white transition-colors"
                href="#"
              >
                Log in
              </a>
              <ThemeToggle />
              <a
                className="px-5 py-2.5 bg-primary hover:bg-primary-hover text-white text-sm font-semibold rounded-full shadow-neon transition-all transform hover:scale-105"
                href="#"
              >
                Start Free
              </a>
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

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-background-light dark:bg-background-dark">
        {/* Floating background blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen animate-float" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px] mix-blend-screen animate-float-alt" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Badge */}
          <div
            className="animate-fade-in-up inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-100/50 dark:bg-white/5 border border-blue-200 dark:border-white/10 backdrop-blur-sm mb-8"
            style={{ animationDelay: '50ms' }}
          >
            <span className="flex h-2 w-2 rounded-full bg-green-400" />
            <span className="text-xs font-medium text-blue-700 dark:text-blue-200">
              New: GPT-4 Integration Live
            </span>
          </div>

          {/* Headline */}
          <h1
            className="animate-fade-in-up text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight"
            style={{ animationDelay: '200ms' }}
          >
            Turn Conversations Into <br className="hidden md:block" />
            <span className="text-gradient-animated">Qualified Leads</span> — Automatically
          </h1>

          <p
            className="animate-fade-in-up mt-6 max-w-2xl mx-auto text-lg md:text-xl text-slate-600 dark:text-slate-300"
            style={{ animationDelay: '350ms' }}
          >
            Create AI-powered quiz funnels that capture real customer intent, qualify prospects
            instantly, and skyrocket your conversion rates.
          </p>

          {/* CTA buttons */}
          <div
            className="animate-fade-in-up mt-10 flex flex-col sm:flex-row justify-center gap-4"
            style={{ animationDelay: '500ms' }}
          >
            <a
              className="px-8 py-4 bg-primary hover:bg-primary-hover text-white font-semibold rounded-full shadow-neon-strong transition-all transform hover:scale-105 flex items-center justify-center group"
              href="#"
            >
              Start Free
              <span className="material-icons-outlined ml-2 group-hover:translate-x-1 transition-transform text-lg">
                arrow_forward
              </span>
            </a>
            <a
              className="px-8 py-4 bg-white dark:bg-transparent border border-gray-300 dark:border-white/20 text-slate-700 dark:text-white font-semibold rounded-full hover:bg-gray-50 dark:hover:bg-white/5 transition-all flex items-center justify-center"
              href="#"
            >
              <span className="material-icons-outlined mr-2 text-lg">play_circle_filled</span>
              See Demo
            </a>
          </div>

          {/* Dashboard mockup */}
          <div
            className="animate-scale-in mt-20 relative mx-auto max-w-5xl"
            style={{ animationDelay: '700ms' }}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-2xl blur opacity-30 animate-pulse" />
            <div className="relative rounded-2xl bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/10 shadow-2xl overflow-hidden">
              {/* Browser chrome */}
              <div className="h-8 bg-gray-100 dark:bg-[#0f1420] border-b border-gray-200 dark:border-white/5 flex items-center px-4 space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>

              <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Stats column */}
                <div className="space-y-4">
                  {[
                    {
                      label: 'Total Visitors',
                      value: '12,450',
                      change: '+14% vs last week',
                      delay: '900ms',
                    },
                    {
                      label: 'Qualified Leads',
                      value: '3,892',
                      change: '+28% vs last week',
                      delay: '1000ms',
                    },
                  ].map(({ label, value, change, delay }) => (
                    <div
                      key={label}
                      className="animate-fade-in-up p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5"
                      style={{ animationDelay: delay }}
                    >
                      <div className="text-sm text-slate-500 dark:text-slate-400">{label}</div>
                      <div className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
                        {value}
                      </div>
                      <div className="text-xs text-green-400 mt-2 flex items-center">
                        <span className="material-icons-outlined text-sm mr-1">trending_up</span>
                        {change}
                      </div>
                    </div>
                  ))}
                  <div
                    className="animate-fade-in-up p-4 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/20"
                    style={{ animationDelay: '1100ms' }}
                  >
                    <div className="text-sm text-primary dark:text-blue-300">Revenue Estimate</div>
                    <div className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
                      $45,200
                    </div>
                  </div>
                </div>

                {/* Chat funnel column */}
                <div className="md:col-span-2 rounded-xl bg-gray-50 dark:bg-[#0B0F19] border border-gray-100 dark:border-white/5 p-6 relative overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage:
                        'linear-gradient(#3B82F6 1px, transparent 1px), linear-gradient(90deg, #3B82F6 1px, transparent 1px)',
                      backgroundSize: '20px 20px',
                    }}
                  />
                  <div className="flex justify-between items-center mb-6 relative z-10">
                    <h3 className="font-semibold text-slate-800 dark:text-white">
                      Live Conversion Funnel
                    </h3>
                    <select className="bg-white dark:bg-white/10 border-none text-xs rounded px-2 py-1 text-slate-600 dark:text-slate-300 outline-none">
                      <option>Last 7 Days</option>
                    </select>
                  </div>

                  <div className="flex flex-col space-y-3 relative z-10 max-w-[80%] mx-auto mt-4">
                    {/* AI message 1 */}
                    <div
                      className="animate-chat-in flex items-start space-x-3"
                      style={{ animationDelay: '950ms' }}
                    >
                      <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center shrink-0">
                        <span className="material-icons-outlined text-white text-xs">
                          smart_toy
                        </span>
                      </div>
                      <div className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/10 p-3 rounded-2xl rounded-tl-none text-sm text-slate-700 dark:text-slate-200 shadow-sm">
                        Hi! I see you&apos;re looking to scale your sales. What is your primary
                        bottleneck right now?
                      </div>
                    </div>

                    {/* User message */}
                    <div
                      className="animate-chat-in flex items-start justify-end space-x-3"
                      style={{ animationDelay: '1200ms' }}
                    >
                      <div className="bg-primary p-3 rounded-2xl rounded-tr-none text-sm text-white shadow-neon">
                        Lead qualification takes too much time.
                      </div>
                      <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-white/20 flex items-center justify-center shrink-0">
                        <span className="material-icons-outlined text-gray-500 dark:text-white text-xs">
                          person
                        </span>
                      </div>
                    </div>

                    {/* AI reply */}
                    <div
                      className="animate-chat-in flex items-start space-x-3"
                      style={{ animationDelay: '1500ms' }}
                    >
                      <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center shrink-0">
                        <span className="material-icons-outlined text-white text-xs">
                          smart_toy
                        </span>
                      </div>
                      <div className="bg-white dark:bg-surface-dark border border-gray-200 dark:border-white/10 p-3 rounded-2xl rounded-tl-none text-sm text-slate-700 dark:text-slate-200 shadow-sm">
                        Understood. Based on our data, automating initial outreach can save
                        15h/week. Would you like a custom demo?
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted logos */}
      <section className="py-10 border-y border-gray-200 dark:border-white/5 bg-white dark:bg-[#0d121f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-8">
              Trusted by growth teams at
            </p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              {[
                { icon: 'token', name: 'Stripe' },
                { icon: 'cloud', name: 'Google' },
                { icon: 'workspaces', name: 'Slack' },
                { icon: 'hub', name: 'HubSpot' },
                { icon: 'bolt', name: 'Zapier' },
              ].map(({ icon, name }) => (
                <div
                  key={name}
                  className="flex items-center space-x-2 text-xl font-bold text-slate-700 dark:text-white"
                >
                  <span className="material-icons-outlined">{icon}</span>
                  <span>{name}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Interactive demo section */}
      <section className="py-24 bg-background-light dark:bg-background-dark relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none animate-float-alt" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] mix-blend-screen pointer-events-none animate-float" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
              Experience the Flow
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300">
              Interact with a live demo of what your customers will see.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={150}>
            <div className="glass-panel rounded-3xl p-1 md:p-2 shadow-2xl bg-gradient-to-b from-white/10 to-transparent dark:from-white/5 dark:to-transparent">
              <div className="bg-white dark:bg-[#111827] rounded-2xl p-8 md:p-12 min-h-[400px] flex flex-col items-center justify-center border border-gray-100 dark:border-white/5 relative">
                {/* Progress bar */}
                <div className="w-full max-w-md h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full mb-8">
                  <div className="w-1/3 h-full bg-primary rounded-full shadow-neon transition-all duration-700" />
                </div>

                <h3 className="text-2xl font-bold text-slate-900 dark:text-white text-center mb-8">
                  What is your primary business goal for this quarter?
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-2xl">
                  {[
                    'Increase Lead Volume',
                    'Improve Lead Quality',
                    'Automate Support',
                    'Reduce Churn',
                  ].map((option) => (
                    <button
                      key={option}
                      className="group p-4 rounded-xl border border-gray-200 dark:border-white/10 hover:border-primary dark:hover:border-primary hover:bg-blue-50 dark:hover:bg-primary/10 transition-all duration-200 text-left flex items-center space-x-3 hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <span className="w-6 h-6 rounded-full border border-gray-300 dark:border-gray-600 group-hover:border-primary group-hover:bg-primary flex items-center justify-center transition-all duration-200">
                        <span className="material-icons-outlined text-white text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">
                          check
                        </span>
                      </span>
                      <span className="text-slate-700 dark:text-slate-200 font-medium">
                        {option}
                      </span>
                    </button>
                  ))}
                </div>

                <div className="mt-8 text-sm text-slate-400 dark:text-slate-500 flex items-center">
                  <span className="material-icons-outlined text-sm mr-1">lock</span>
                  Powered by Intervision AI
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* 3 Steps section */}
      <section className="py-24 bg-white dark:bg-[#0d121f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
              Three Steps to Automation
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              Get up and running in minutes, not months. No coding required.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                icon: 'auto_fix_high',
                color: 'bg-blue-100 dark:bg-primary/20 text-primary',
                title: 'Generate with AI',
                desc: 'Simply describe your business. Our AI engine builds the perfect conversation flow, questions, and logic instantly.',
              },
              {
                step: '2',
                icon: 'code',
                color: 'bg-purple-100 dark:bg-secondary/20 text-secondary',
                title: 'Embed with 1 Line',
                desc: 'Copy a single line of JavaScript and paste it onto your website, landing page, or within your app.',
              },
              {
                step: '3',
                icon: 'rocket_launch',
                color: 'bg-green-100 dark:bg-green-500/20 text-green-600 dark:text-green-400',
                title: 'Get Qualified Leads',
                desc: 'Watch as visitors engage, self-qualify, and book meetings directly into your calendar automatically.',
              },
            ].map(({ step, icon, color, title, desc }, index) => (
              <AnimatedSection key={step} delay={index * 150}>
                <div className="relative group p-8 rounded-2xl bg-background-light dark:bg-surface-dark border border-gray-200 dark:border-white/5 hover:border-primary/50 hover:shadow-neon transition-all duration-300 hover:-translate-y-1">
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 flex items-center justify-center font-bold text-xl shadow-lg">
                    {step}
                  </div>
                  <div
                    className={`w-16 h-16 rounded-full ${color} flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}
                  >
                    <span className="material-icons-outlined text-3xl">{icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-background-light dark:bg-background-dark relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <AnimatedSection>
            <span className="material-icons-outlined text-6xl text-primary/20 mb-6">
              format_quote
            </span>
            <blockquote className="text-2xl md:text-3xl font-medium text-slate-800 dark:text-slate-100 leading-relaxed mb-8">
              &quot;We replaced our static contact forms with Intervision&apos;s AI chat. Our lead
              volume doubled in the first week, and the sales team stopped wasting time on
              unqualified prospects.&quot;
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 rounded-full border-2 border-primary bg-gradient-to-tr from-primary to-secondary flex items-center justify-center">
                <span className="material-icons-outlined text-white text-sm">person</span>
              </div>
              <div className="text-left">
                <div className="font-bold text-slate-900 dark:text-white">Sarah Jensen</div>
                <div className="text-sm text-slate-500 dark:text-slate-400">
                  VP of Marketing at TechFlow
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 to-slate-900 dark:from-surface-dark dark:to-black" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Ready to automate your growth?
            </h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
              Join 10,000+ marketers generating higher quality leads with conversational AI.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                className="px-8 py-4 bg-primary hover:bg-primary-hover text-white font-semibold rounded-full shadow-neon transition-all transform hover:scale-105 active:scale-95"
                href="#"
              >
                Start Free Trial
              </a>
              <a
                className="px-8 py-4 bg-transparent border border-white/30 hover:bg-white/10 text-white font-semibold rounded-full transition-all hover:scale-105 active:scale-95"
                href="#"
              >
                Talk to Sales
              </a>
            </div>
            <p className="mt-6 text-sm text-blue-200/60">
              No credit card required. 14-day free trial.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-[#05080f] border-t border-gray-200 dark:border-white/5 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
              {/* Brand */}
              <div className="col-span-2 lg:col-span-2">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-primary to-secondary flex items-center justify-center">
                    <span className="material-icons-outlined text-white text-sm">smart_toy</span>
                  </div>
                  <span className="text-lg font-bold text-slate-900 dark:text-white">
                    Intervision
                  </span>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-sm max-w-xs mb-6">
                  Empowering businesses to scale personal conversations with AI technology. Turn
                  traffic into revenue.
                </p>
                <div className="flex space-x-4">
                  {['facebook', 'public', 'post_add'].map((icon) => (
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
                  items: ['Features', 'Integrations', 'Pricing', 'Changelog'],
                },
                {
                  heading: 'Resources',
                  items: ['Documentation', 'API Reference', 'Community', 'Blog'],
                },
                {
                  heading: 'Company',
                  items: ['About', 'Careers', 'Legal', 'Contact'],
                },
              ].map(({ heading, items }) => (
                <div key={heading}>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-4">{heading}</h4>
                  <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                    {items.map((item) => (
                      <li key={item}>
                        <a className="hover:text-primary transition-colors" href="#">
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
                <a className="hover:text-slate-600 dark:hover:text-slate-200 transition-colors" href="#">
                  Privacy Policy
                </a>
                <a className="hover:text-slate-600 dark:hover:text-slate-200 transition-colors" href="#">
                  Terms of Service
                </a>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </footer>
    </>
  );
}
