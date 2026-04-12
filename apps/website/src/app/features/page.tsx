import {
  ArrowLeftRight,
  ArrowRight,
  Award,
  Bot,
  Bug,
  ClipboardList,
  GitBranch,
  LineChart,
  Mail,
  MessageSquare,
  Network,
  TrendingUp,
  UserPlus,
  Webhook
} from 'lucide-react'
import Image from 'next/image'

export const metadata = {
  title: 'Features | Intervision',
  description:
    'Accelerate your business growth with a comprehensive toolkit from data collection to process automation.'
}

export default function FeaturesPage() {
  return (
    <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 py-12 pt-24">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row justify-between gap-8 mb-20 items-center py-10">
        <div className="flex flex-col gap-5 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 w-fit">
            <span className="size-2 rounded-full bg-primary animate-pulse"></span>
            <span className="text-primary text-xs font-semibold tracking-wide uppercase">
              New Update 2.0
            </span>
          </div>
          <h1 className="text-slate-900 dark:text-white text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight">
            Powerful features <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
              driving growth
            </span>
          </h1>
          <p className="text-slate-600 dark:text-slate-400 text-lg md:text-xl font-normal leading-relaxed max-w-lg">
            Accelerate your business development with a comprehensive toolkit
            from data collection to process automation.
          </p>
          <div className="flex flex-wrap gap-4 mt-2">
            <button
              type="button"
              className="h-11 px-6 rounded-lg bg-primary text-white text-base font-bold hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/25 flex items-center gap-2"
            >
              <span>Start for Free</span>
              <ArrowRight size={18} />
            </button>
            <button
              type="button"
              className="h-11 px-6 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-surface-dark text-slate-900 dark:text-slate-200 text-base font-medium hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              View Demo
            </button>
          </div>
        </div>
        {/* Hero Decorative Image/Graphic */}
        <div className="relative w-full md:w-5/12 aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 border border-slate-200 dark:border-border-dark group">
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 to-blue-950/50 z-10"></div>
          <div
            className="w-full h-full bg-cover bg-center opacity-60 group-hover:scale-105 transition-transform duration-700"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDcGlm9ssvo8UbpSoZ4vyGXIjSdioel0gCSvBABbWCawV0gRtLCBqdRy0sSIaynjB1HcQaiUMcW3keOB7w5f442QmG3bwd3j3RM57EAp5rtIL8Sg9Tquo1Jrp2J7QfLHaw1OOec9mJCiiRELCCExjC_E1j5mXFq83ulQrmiQqDH47xlJb4WMQNX9_CxOh8yGN-VMDTQ2ansyUKf7OTVk-bcB6Pdr-0ZQc6K1YaOz9qoslntvKYnxdH4NURQMi1kY7MxFFkNCk9tvyxC')"
            }}
          ></div>
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl shadow-2xl max-w-[80%]">
              <div className="flex items-center gap-3 mb-4">
                <div className="size-3 rounded-full bg-red-500"></div>
                <div className="size-3 rounded-full bg-yellow-500"></div>
                <div className="size-3 rounded-full bg-green-500"></div>
              </div>
              <div className="space-y-3">
                <div className="h-2 bg-white/20 rounded w-3/4"></div>
                <div className="h-2 bg-white/10 rounded w-full"></div>
                <div className="h-2 bg-white/10 rounded w-5/6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 1: Lead Capture */}
      <section className="mb-20">
        <div className="flex items-center gap-4 mb-8">
          <div className="flex items-center justify-center size-10 rounded-lg bg-blue-500/20 text-primary">
            <UserPlus size={22} />
          </div>
          <h2 className="text-slate-900 dark:text-white text-2xl font-bold tracking-tight">
            1. Lead Capture
          </h2>
          <div className="h-px flex-1 bg-slate-200 dark:bg-border-dark"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Feature Card 1 */}
          <div className="group relative overflow-hidden rounded-xl border border-slate-200 dark:border-border-dark bg-white dark:bg-surface-dark hover:border-primary/50 transition-all duration-300 hover:shadow-neon">
            <div className="p-6 flex flex-col h-full">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 rounded-lg bg-blue-500/10 text-primary">
                  <ClipboardList size={24} />
                </div>
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
                  AI Powered
                </span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                AI Survey Builder
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                Create smart survey forms in seconds. Enter a topic and AI will
                suggest the most optimized questions.
              </p>
              <div className="mt-auto rounded-lg overflow-hidden border border-slate-100 dark:border-border-dark/50">
                <div
                  className="w-full h-40 bg-cover bg-center transform group-hover:scale-105 transition-transform duration-500"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD8pxu5MGbbtcCmwaR58wQ9gEVrwVm7Lxt_HKlEomfgl8VbQWvTE1vbwi11gYUJpXsCkV7_iDEF6BOzTPysirhNRGi0gsvxAyHxt85ADkZLU-fE7bKBG22wjqnUJW_k6V_X8xNIMfoD_9zxfxUnXSoDFaQThLIxN_MELJnxCBLwJ31qZBk8yrndceYKblVjFdtI3lJXEbn_8HQgQdaLeG-jlTCw5rcFwCIoz5aXojDgMqAeGDMGQohSA_xMkLIqZvWkTo04G-DTpXYv')"
                  }}
                ></div>
              </div>
            </div>
          </div>
          {/* Feature Card 2 */}
          <div className="group relative overflow-hidden rounded-xl border border-slate-200 dark:border-border-dark bg-white dark:bg-surface-dark hover:border-primary/50 transition-all duration-300 hover:shadow-neon">
            <div className="p-6 flex flex-col h-full">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                  <GitBranch size={24} />
                </div>
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                Conditional Logic
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6">
                Show relevant questions based on previous answers. Increase
                completion rates by personalizing the question flow.
              </p>
              <div className="mt-auto rounded-lg overflow-hidden border border-slate-100 dark:border-border-dark/50 relative">
                {/* Abstract Logic Flow Graphic */}
                <div className="w-full h-40 bg-slate-50 dark:bg-[#151921] flex items-center justify-center p-4">
                  <div className="flex flex-col items-center w-full max-w-[200px] gap-2">
                    <div className="w-full h-8 bg-slate-200 dark:bg-border-dark rounded border-l-4 border-indigo-500 shadow-sm"></div>
                    <div className="flex w-full gap-2">
                      <div className="w-1/2 h-8 bg-slate-200 dark:bg-border-dark/60 rounded border-l-4 border-slate-500"></div>
                      <div className="w-1/2 h-8 bg-slate-200 dark:bg-border-dark/60 rounded border-l-4 border-slate-500"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Optimization */}
      <section className="mb-20">
        <div className="flex items-center gap-4 mb-8">
          <div className="flex items-center justify-center size-10 rounded-lg bg-purple-500/20 text-purple-400">
            <TrendingUp size={22} />
          </div>
          <h2 className="text-slate-900 dark:text-white text-2xl font-bold tracking-tight">
            2. Optimization
          </h2>
          <div className="h-px flex-1 bg-slate-200 dark:bg-border-dark"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Optimization Card 1 */}
          <div className="group relative overflow-hidden rounded-xl border border-slate-200 dark:border-border-dark bg-white dark:bg-surface-dark hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.15)]">
            <div className="p-6">
              <div className="mb-4 text-purple-400">
                <Award size={30} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                AI Scoring
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                Automatically evaluate lead quality based on behavior and
                demographic data to prioritize conversions.
              </p>
              <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-purple-500 to-blue-500 w-[78%]"></div>
              </div>
              <div className="flex justify-between mt-2 text-xs font-mono text-slate-500">
                <span>Score</span>
                <span className="text-purple-400 font-bold">78/100</span>
              </div>
            </div>
          </div>
          {/* Optimization Card 2 */}
          <div className="group relative overflow-hidden rounded-xl border border-slate-200 dark:border-border-dark bg-white dark:bg-surface-dark hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.15)]">
            <div className="p-6">
              <div className="mb-4 text-purple-400">
                <LineChart size={30} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                Conversion Tracking
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                Track the origin of each registration. Understand which channel
                brings the highest efficiency to the business.
              </p>
              <div className="flex items-end gap-1 h-10 mt-auto opacity-70">
                <div className="w-1/5 bg-slate-700 h-[40%] rounded-t-sm"></div>
                <div className="w-1/5 bg-slate-700 h-[60%] rounded-t-sm"></div>
                <div className="w-1/5 bg-purple-500 h-[90%] rounded-t-sm shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
                <div className="w-1/5 bg-slate-700 h-[50%] rounded-t-sm"></div>
                <div className="w-1/5 bg-slate-700 h-[70%] rounded-t-sm"></div>
              </div>
            </div>
          </div>
          {/* Optimization Card 3 */}
          <div className="group relative overflow-hidden rounded-xl border border-slate-200 dark:border-border-dark bg-white dark:bg-surface-dark hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.15)]">
            <div className="p-6">
              <div className="mb-4 text-purple-400">
                <ArrowLeftRight size={30} />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                A/B Testing
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                Test different variations of landing pages to find the version
                with the best conversion rate.
              </p>
              <div className="flex gap-2 mt-4">
                <span className="px-2 py-1 rounded bg-purple-500/10 text-purple-400 text-xs font-mono border border-purple-500/20">
                  Ver A: 12%
                </span>
                <span className="px-2 py-1 rounded bg-green-500/10 text-green-400 text-xs font-mono border border-green-500/20">
                  Ver B: 24%
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Automation */}
      <section className="mb-20">
        <div className="flex items-center gap-4 mb-8">
          <div className="flex items-center justify-center size-10 rounded-lg bg-green-500/20 text-green-400">
            <Bot size={22} />
          </div>
          <h2 className="text-slate-900 dark:text-white text-2xl font-bold tracking-tight">
            3. Automation
          </h2>
          <div className="h-px flex-1 bg-slate-200 dark:bg-border-dark"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Automation Feature - Email */}
          <div className="lg:col-span-1 group relative overflow-hidden rounded-xl border border-slate-200 dark:border-border-dark bg-white dark:bg-surface-dark p-6 hover:border-green-500/50 transition-all duration-300 hover:shadow-[0_0_15px_rgba(34,197,94,0.15)]">
            <div className="flex items-start justify-between">
              <div className="p-3 rounded-full bg-slate-100 dark:bg-slate-800 text-green-500 mb-4">
                <Mail size={24} />
              </div>
              <div className="size-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              Email Marketing
            </h3>
            <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
              Send automatic email sequences as soon as new leads arrive.
              Nurture potential customers without manual effort.
            </p>
            <a
              className="text-green-500 text-sm font-semibold hover:text-green-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
              href="/"
            >
              Set up now <ArrowRight size={16} />
            </a>
          </div>
          {/* Automation Feature - Webhook & CRM */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Webhook Card */}
            <div className="rounded-xl border border-slate-200 dark:border-border-dark bg-slate-50 dark:bg-slate-800/50 p-6 flex flex-col justify-center items-center text-center hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer group">
              <div className="mb-3 p-3 bg-white dark:bg-surface-dark rounded-full shadow-lg group-hover:scale-110 transition-transform">
                <Webhook size={30} className="text-blue-400" />
              </div>
              <h4 className="text-slate-900 dark:text-white font-bold mb-1">
                Webhook API
              </h4>
              <p className="text-slate-500 dark:text-slate-400 text-xs">
                Connect real-time data with any application.
              </p>
            </div>
            {/* CRM Card */}
            <div className="rounded-xl border border-slate-200 dark:border-border-dark bg-slate-50 dark:bg-slate-800/50 p-6 flex flex-col justify-center items-center text-center hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer group">
              <div className="mb-3 p-3 bg-white dark:bg-surface-dark rounded-full shadow-lg group-hover:scale-110 transition-transform">
                <Network size={30} className="text-orange-400" />
              </div>
              <h4 className="text-slate-900 dark:text-white font-bold mb-1">
                CRM Integration
              </h4>
              <p className="text-slate-500 dark:text-slate-400 text-xs">
                Sync leads directly into Salesforce, HubSpot, Zoho.
              </p>
            </div>
          </div>
        </div>
        {/* Large integration visual */}
        <div className="mt-6 rounded-xl border border-slate-200 dark:border-border-dark bg-gradient-to-r from-slate-900 to-slate-800 p-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-md">
              <h3 className="text-white text-xl font-bold mb-2">
                Over 500+ available integrations
              </h3>
              <p className="text-slate-300 text-sm">
                Connect Intervision with your favorite tools in just a few
                clicks. No programming knowledge required.
              </p>
            </div>
            <div className="flex items-center -space-x-3">
              <div
                className="size-10 rounded-full bg-white flex items-center justify-center shadow-lg z-30"
                title="Google Sheets"
              >
                <Image
                  alt="Google"
                  className="w-6 h-6"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCujotimDqm69Pd-4zTZAyzpCOb4Hsox187ogoPk8n9Hqo03-ry9DgJor4JbVP8vZAxzZrp6kuayelenVhtgpsN8XNy1K5dBdewJ6bUvREk6aaIye9RmascjFDzRET_yyzZBf7GppCVn2T2ZhIbIKItXpYDvnk8-FKLG0xpuzjXUm4ojC6gsQPI-P7OBulELg1KClNagZTxQw8OdOdYOz-l3sbBK2MzM0Du1WJgXjPpLkvyDk66AvHZoDZCb-lLu1vUpL2Ylwqkk1qO"
                />
              </div>
              <div
                className="size-10 rounded-full bg-[#0061f2] flex items-center justify-center shadow-lg z-20"
                title="Jira"
              >
                <Bug size={20} className="text-white" />
              </div>
              <div
                className="size-10 rounded-full bg-[#ff3366] flex items-center justify-center shadow-lg z-10"
                title="Slack"
              >
                <MessageSquare size={20} className="text-white" />
              </div>
              <div className="size-10 rounded-full bg-slate-700 flex items-center justify-center shadow-lg border border-slate-600 text-white text-xs font-bold pl-2">
                +497
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="rounded-2xl bg-primary text-white p-8 md:p-12 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/20 to-transparent"></div>
        <div className="relative z-10 flex flex-col items-center max-w-2xl mx-auto gap-6">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight">
            Ready to grow?
          </h2>
          <p className="text-blue-100 text-lg">
            Join over 10,000 businesses using Intervision to optimize their
            processes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button
              type="button"
              className="h-12 px-8 rounded-lg bg-white text-primary text-base font-bold hover:bg-blue-50 transition-colors shadow-xl"
            >
              Start Free Trial
            </button>
            <button
              type="button"
              className="h-12 px-8 rounded-lg border border-white/30 bg-primary/20 text-white text-base font-medium hover:bg-primary/40 transition-colors"
            >
              Contact Sales
            </button>
          </div>
          <p className="text-xs text-blue-200 mt-2">
            No credit card required • Cancel anytime
          </p>
        </div>
      </section>
    </main>
  )
}
