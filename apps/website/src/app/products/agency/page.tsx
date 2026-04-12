import {
  ArrowRight,
  BarChart2,
  BookOpen,
  CheckCircle,
  LineChart,
  Network,
  Sparkles,
  Wallet
} from 'lucide-react'
import Image from 'next/image'

export const metadata = {
  title: 'AI for Agencies | Intervision',
  description:
    'Specialized AI solutions for Marketing Agencies to automate campaigns and optimize ROI.'
}

const AgencyProductPage = () => {
  return (
    <main className="flex-grow bg-zinc-950 text-slate-100 antialiased overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative px-6 md:px-12 pt-40 pb-24 max-w-full mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div className="z-10">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold mb-8 animate-fade-in-up">
            <Sparkles size={14} />
            <span>AI-POWERED SOLUTIONS FOR AGENCIES</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.95] mb-10">
            Optimize Conversion with{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              Specialized AI
            </span>
            .
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-xl mb-12 leading-relaxed font-medium">
            Elevate Marketing Agency execution with next-generation AI. Automate
            workflows, optimize profits, and create breakthrough campaigns with
            data-driven insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <button
              type="button"
              className="bg-blue-600 hover:bg-blue-500 text-white font-black px-10 py-5 rounded-2xl text-xl shadow-blue-600/30 shadow-neon flex items-center justify-center gap-3 transition-all transform active:scale-95"
            >
              Start Trial for Agency
              <ArrowRight size={20} />
            </button>
            <button
              type="button"
              className="bg-white/5 backdrop-blur-xl text-white font-bold px-10 py-5 rounded-2xl text-xl border border-white/10 hover:bg-white/10 transition-all flex items-center justify-center gap-3"
            >
              Watch Demo
            </button>
          </div>
        </div>
        <div
          className="relative animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          <div className="absolute -inset-10 bg-blue-500/10 blur-[120px] rounded-full"></div>
          <div className="bg-white/5 backdrop-blur-3xl rounded-[3rem] p-4 relative overflow-hidden border border-white/10 shadow-3xl transform hover:rotate-1 transition-transform duration-700">
            <Image
              className="rounded-[2.5rem] w-full h-auto object-cover border border-white/5 opacity-80"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDdtKqd18Y8cozlsc6zbqNILYwBlRt7n69NI0IcglQcOKGE1RxVzealTHJQVlnnKIKBU920aETCYLSg9M6DEqpMZBmyXhUg74w4-jFW5bKXIiueBD6OkeLC2l3fq26qJEH_NZGtG8EcurIJpunFnb8KC-uw1vQat4pTsBLFnel1sIBOFiXJPVsyKX-KJKbOb_uuSHqJCUS-bFwI_BUGlYYFl7Tg0LZ8Sn8ZrvE0vIr57hWRksgXMZFPCCPYupiBo9uYWGiwsnAEXKMI"
              alt="Futuristic AI Dashboard"
              width={800}
              height={600}
            />
            {/* Floating Insight Card */}
            <div className="absolute bottom-12 right-12 bg-zinc-900/90 backdrop-blur-2xl p-8 rounded-3xl border border-blue-500/30 max-w-xs shadow-3xl animate-pulse">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center">
                  <LineChart size={20} className="text-blue-500" />
                </div>
                <span className="text-xs font-black uppercase tracking-[0.2em] text-blue-400">
                  Live Insight
                </span>
              </div>
              <p className="text-base font-bold text-white">
                Estimated <span className="text-blue-500">ROAS</span> increase
                of{' '}
                <span className="text-blue-400 underline decoration-2">
                  24.5%
                </span>{' '}
                next 7 days.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 border-y border-white/5 bg-zinc-900/30">
        <div className="max-w-full mx-auto px-6 md:px-12">
          <p className="text-center text-slate-500 font-bold mb-12 tracking-[0.3em] uppercase text-xs">
            Trusted by Leading Global Agencies
          </p>
          <div className="flex flex-wrap justify-center items-center gap-16 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-1000">
            <span className="text-3xl font-black tracking-tighter">OGILVY</span>
            <span className="text-3xl font-black tracking-tighter">DENTSU</span>
            <span className="text-3xl font-black tracking-tighter">
              WPP GROUP
            </span>
            <span className="text-3xl font-black tracking-tighter">
              OMNICOM
            </span>
            <span className="text-3xl font-black tracking-tighter">HAVAS</span>
          </div>
        </div>
      </section>

      {/* Features Bento */}
      <section className="px-6 md:px-12 py-40 max-w-full mx-auto">
        <div className="mb-24 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            Digital Oracle <span className="text-blue-500">Ecosystem</span>
          </h2>
          <p className="text-xl text-slate-400 font-medium leading-relaxed">
            Every tool you need to manage agency performance on a single
            platform, amplified by artificial intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="md:col-span-2 bg-white/5 backdrop-blur-3xl rounded-[3rem] p-12 border border-white/10 flex flex-col md:flex-row gap-12 items-center group shadow-3xl">
            <div className="flex-1">
              <div className="size-16 rounded-2xl bg-blue-600/10 flex items-center justify-center mb-8 group-hover:bg-blue-600/20 transition-all">
                <Network size={40} className="text-blue-500" />
              </div>
              <h3 className="text-3xl font-black mb-6">
                Smart Campaign Management
              </h3>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Automated resource allocation and campaign variable adjustment
                based on advanced user behavior prediction models.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-base font-bold text-slate-300">
                  <CheckCircle size={20} className="text-blue-500" />
                  Automated Creative A/B Testing
                </li>
                <li className="flex items-center gap-3 text-base font-bold text-slate-300">
                  <CheckCircle size={20} className="text-blue-500" />
                  Centralized Multi-platform Management
                </li>
              </ul>
            </div>
            <div className="flex-1 w-full h-full min-h-[300px] rounded-[2.5rem] overflow-hidden relative border border-white/10 group-hover:border-blue-500/30 transition-colors">
              <Image
                fill
                className="object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbDbERxJL1fi8iBuzSxhuDmZzDjY2qxQvmUNIol9TXtUIBp10nc0M8dK1N4GVnENR9EfEdW7Opr-v8X1qICuE1tjueDG7CLemXIFORK9asddUUp4gN9SIl5G67M-Pa1t75o6tpzkQgRwXfEuGcEaELfmCraACsfwFsFOcjUwDqczzlTrtwYNy5ZabB1t2Pyb1o0rVPAkN0nuy-jBWld9RaWceukwyqflczgW4bXEbq7-JPSISIP8HVhqG0zZzWtr8KxwhmR9QKZfS7"
                alt="AI Neural Network cables"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 to-transparent"></div>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="bg-white/5 backdrop-blur-3xl rounded-[3rem] p-12 border border-white/10 group shadow-3xl flex flex-col justify-between">
            <div>
              <div className="size-16 rounded-2xl bg-blue-600/10 flex items-center justify-center mb-8 group-hover:bg-blue-600/20 transition-all">
                <BarChart2 size={40} className="text-blue-500" />
              </div>
              <h3 className="text-3xl font-black mb-6">Real-time Analysis</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                Track customer personas and conversion flows in real-time with
                sub-10ms monitoring latency.
              </p>
            </div>
            <div className="mt-12 pt-12 border-t border-white/5">
              <div className="flex items-end gap-2 h-24">
                <div className="flex-1 bg-blue-600/20 h-1/2 rounded-lg"></div>
                <div className="flex-1 bg-blue-600/40 h-3/4 rounded-lg"></div>
                <div className="flex-1 bg-blue-500/60 h-2/3 rounded-lg"></div>
                <div className="flex-1 bg-blue-600 h-full rounded-lg shadow-neon"></div>
                <div className="flex-1 bg-blue-600/30 h-1/2 rounded-lg"></div>
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="bg-white/5 backdrop-blur-3xl rounded-[3rem] p-12 border border-white/10 group shadow-3xl flex flex-col justify-between">
            <div>
              <div className="size-16 rounded-2xl bg-blue-600/10 flex items-center justify-center mb-8 group-hover:bg-blue-600/20 transition-all">
                <Wallet size={40} className="text-blue-500" />
              </div>
              <h3 className="text-3xl font-black mb-6">Budget Optimization</h3>
              <p className="text-slate-400 text-lg leading-relaxed">
                Cut 30% of wasted spend by automatically pausing underperforming
                ads and reinvesting in hotspots.
              </p>
            </div>
            <div className="mt-12 flex items-center justify-between p-6 rounded-2xl bg-white/5 border border-white/5 shadow-inner">
              <span className="text-xs font-black uppercase tracking-widest text-slate-500">
                Efficiency Score
              </span>
              <span className="text-2xl font-black text-blue-500">98.2%</span>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="md:col-span-2 bg-white/5 backdrop-blur-3xl rounded-[3rem] p-12 border border-white/10 flex flex-col md:flex-row-reverse gap-12 items-center group shadow-3xl">
            <div className="flex-1">
              <div className="size-16 rounded-2xl bg-blue-600/10 flex items-center justify-center mb-8 group-hover:bg-blue-600/20 transition-all">
                <BookOpen size={40} className="text-blue-500" />
              </div>
              <h3 className="text-3xl font-black mb-6">Automated Reporting</h3>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                Generate in-depth client reports with one click. AI
                automatically summarizes insights and suggests data-driven
                action plans.
              </p>
              <button
                type="button"
                className="text-blue-500 font-black text-lg flex items-center gap-3 group-hover:gap-6 transition-all"
              >
                Learn about Report AI
                <ArrowRight size={20} />
              </button>
            </div>
            <div className="flex-1 w-full bg-zinc-900 rounded-[2.5rem] p-10 relative border border-white/5 shadow-inner">
              <div className="space-y-6">
                <div className="h-3 w-3/4 bg-white/10 rounded-full animate-pulse"></div>
                <div
                  className="h-3 w-1/2 bg-white/10 rounded-full animate-pulse"
                  style={{ animationDelay: '0.2s' }}
                ></div>
                <div className="h-32 w-full border-2 border-dashed border-blue-500/20 rounded-3xl flex items-center justify-center group-hover:border-blue-500/40 transition-colors">
                  <span className="text-[10px] text-blue-500/60 tracking-[0.4em] font-black uppercase text-center">
                    Neural Network <br className="md:hidden" /> Generating
                    Insights...
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative px-6 md:px-12 py-40 overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent -z-10"></div>
        <div className="max-w-4xl mx-auto z-10 transition-all">
          <h2 className="text-5xl md:text-8xl font-black mb-12 leading-[0.95] tracking-tighter">
            Ready for Your Agency to <br className="hidden md:block" /> Lead the
            AI Era?
          </h2>
          <p className="text-xl md:text-2xl text-slate-400 mb-16 max-w-2xl mx-auto leading-relaxed font-medium">
            Join the community of 500+ agencies changing the way the world of
            marketing operates through intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <button
              type="button"
              className="bg-blue-600 hover:bg-blue-500 text-white font-black px-12 py-6 rounded-2xl text-2xl shadow-3xl shadow-blue-600/40 shadow-neon transform active:scale-95 transition-all"
            >
              Start Trial for Agency
            </button>
            <button
              type="button"
              className="bg-white/5 backdrop-blur-xl text-white font-bold px-12 py-6 rounded-2xl text-2xl border border-white/10 hover:bg-white/10 transition-all"
            >
              Contact 1-1
            </button>
          </div>
          <p className="mt-12 text-sm text-slate-500 font-bold italic tracking-widest uppercase">
            No credit card required. 14-day free trial.
          </p>
        </div>
      </section>
    </main>
  )
}

export default AgencyProductPage
