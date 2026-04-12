import {
  ArrowRight,
  Bot,
  CheckCircle,
  MessageCircle,
  MessageSquare,
  Search,
  ShoppingCart,
  TrendingUp
} from 'lucide-react'
import Image from 'next/image'

export const metadata = {
  title: 'AI for E-commerce | Intervision',
  description:
    'Breakthrough E-commerce revenue with artificial intelligence and automated sales optimization.'
}

const EcommerceProductPage = () => {
  return (
    <main className="flex-grow bg-zinc-950 text-slate-100 antialiased overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative px-6 md:px-12 pt-40 pb-24 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-12 xl:col-span-5 space-y-10 group">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-black tracking-[0.2em] uppercase animate-fade-in-up">
            AI-POWERED ECOMMERCE
          </div>
          <h1 className="text-5xl md:text-8xl font-black leading-[0.95] tracking-tighter">
            Breakthrough <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
              E-commerce with AI.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-lg leading-relaxed font-medium">
            Elevate customer experience and optimize sales processes with smart
            operation systems from Intervision Prism.
          </p>
          <div className="flex flex-wrap gap-6 pt-4 font-bold">
            <button
              type="button"
              className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-2xl text-xl shadow-blue-600/30 shadow-neon active:scale-95 transition-all"
            >
              Boost Conversion Rates
            </button>
            <button
              type="button"
              className="bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 text-white px-10 py-5 rounded-2xl text-xl transition-all"
            >
              Watch Demo
            </button>
          </div>
        </div>

        {/* Dashboard Preview Card */}
        <div
          className="lg:col-span-12 xl:col-span-7 relative animate-fade-in-up"
          style={{ animationDelay: '0.2s' }}
        >
          <div className="absolute -inset-10 bg-blue-600/10 blur-[120px] rounded-full"></div>
          <div className="bg-white/5 backdrop-blur-3xl rounded-[3rem] border border-white/10 p-10 shadow-3xl relative z-10 overflow-hidden transform hover:scale-[1.02] transition-transform duration-700">
            <div className="flex items-center justify-between mb-10">
              <div className="flex space-x-3">
                <div className="w-4 h-4 rounded-full bg-red-500/50"></div>
                <div className="w-4 h-4 rounded-full bg-yellow-500/50"></div>
                <div className="w-4 h-4 rounded-full bg-blue-500/50"></div>
              </div>
              <div className="text-xs font-black tracking-[0.3em] text-slate-500 uppercase">
                Prism Dashboard v2.4
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-zinc-900/50 p-6 rounded-3xl border border-white/5 shadow-inner group hover:border-blue-500/30 transition-colors">
                <div className="text-slate-500 text-xs font-black uppercase tracking-widest mb-2">
                  Total Leads
                </div>
                <div className="text-3xl font-black text-white">12,842</div>
                <div className="text-blue-500 text-[10px] font-bold mt-3 tracking-widest">
                  +14.2% AI BOOST
                </div>
              </div>
              <div className="bg-zinc-900/50 p-6 rounded-3xl border border-white/5 shadow-inner group hover:border-blue-500/30 transition-colors">
                <div className="text-slate-500 text-xs font-black uppercase tracking-widest mb-2">
                  Conversion
                </div>
                <div className="text-3xl font-black text-white">4.82%</div>
                <div className="text-blue-400 text-[10px] font-bold mt-3 tracking-widest">
                  +0.9% RECOVERY
                </div>
              </div>
              <div className="bg-zinc-900/50 p-6 rounded-3xl border border-white/5 shadow-inner group hover:border-blue-500/30 transition-colors">
                <div className="text-slate-500 text-xs font-black uppercase tracking-widest mb-2">
                  Orders
                </div>
                <div className="text-3xl font-black text-white">1,409</div>
                <div className="text-blue-300 text-[10px] font-bold mt-3 tracking-widest">
                  +22% CHATBOT
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-5 bg-white/5 rounded-2xl border border-white/5 shadow-xl transform transition-all hover:translate-x-2">
                <div className="flex items-center gap-5">
                  <div className="size-12 rounded-2xl bg-zinc-800 flex items-center justify-center shadow-lg">
                    <ShoppingCart size={24} className="text-blue-500" />
                  </div>
                  <div>
                    <div className="text-base font-black text-white">
                      New Order #8291
                    </div>
                    <div className="text-xs text-slate-500 font-bold mt-0.5 uppercase tracking-widest">
                      Processed by AI Agent
                    </div>
                  </div>
                </div>
                <div className="text-xl font-black text-blue-500">$124.00</div>
              </div>

              <div className="flex items-center justify-between p-5 bg-white/5 rounded-2xl border border-white/5 opacity-60 shadow-xl transform transition-all hover:translate-x-2">
                <div className="flex items-center gap-5">
                  <div className="size-12 rounded-2xl bg-zinc-800 flex items-center justify-center shadow-lg">
                    <MessageCircle size={24} className="text-blue-400" />
                  </div>
                  <div>
                    <div className="text-base font-black text-white">
                      Sales Inquiry
                    </div>
                    <div className="text-xs text-slate-500 font-bold mt-0.5 uppercase tracking-widest">
                      Chatbot responding...
                    </div>
                  </div>
                </div>
                <div className="text-[10px] bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full font-black tracking-widest">
                  ACTIVE
                </div>
              </div>
            </div>

            <div className="mt-10 relative h-32 rounded-2xl overflow-hidden border border-white/5">
              <Image
                className="w-full h-full object-cover opacity-40 mix-blend-screen scale-110"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfXkyMmdq3Oh1RQL9P7fIJjvd6IM8YLEVgxb7Ob-IO_GJZiIUS1q0QeE5vF1C0ihIGHwMJYvjrqCNbBZaEDlnjviWEWTTBLX1Tb-YFpOOIMW6-Pndx48Fuk1h03ByzknJnhUJJi-Ylndgq7pyf_8rOP8fD8aKRD7g46iLuGitEc4hPJzRLgUGaPUWGYB6QdVnIvGcoUdlpTjd1sIlrhEPSXNzL-MIvO647D0nD7Ar_M_QDrbGch300vK7o9sROqPjNgCKBfzMNK0QL"
                alt="AI Data Visualization"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="px-6 md:px-12 py-40 max-w-7xl mx-auto">
        <div className="mb-24 text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tighter">
            Comprehensive Solutions <br /> for{' '}
            <span className="text-blue-500">Growth</span>
          </h2>
          <p className="text-xl text-slate-400 font-medium leading-relaxed">
            Leverage the power of AI to automate every touchpoint in your
            customer's shopping journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="md:col-span-2 bg-white/5 backdrop-blur-3xl rounded-[3rem] p-12 border border-white/10 group hover:border-blue-500/30 transition-all duration-700 overflow-hidden relative shadow-3xl">
            <div className="flex flex-col h-full justify-between relative z-10">
              <div>
                <Bot
                  size={48}
                  className="text-blue-500 mb-8 block transition-transform group-hover:scale-110"
                />
                <h3 className="text-3xl font-black mb-6">
                  24/7 Automated Order Closing Chatbot
                </h3>
                <p className="text-slate-400 text-lg leading-relaxed max-w-md font-medium">
                  Never miss a customer again. Our AI understands context,
                  provides product advice, and creates orders directly within
                  the chat interface.
                </p>
              </div>
              <div className="mt-12 flex gap-4">
                <span className="px-5 py-2 bg-blue-500/10 text-blue-500 text-xs font-black rounded-full border border-blue-500/20 tracking-widest uppercase">
                  Native NLP
                </span>
                <span className="px-5 py-2 bg-blue-500/10 text-blue-500 text-xs font-black rounded-full border border-blue-500/20 tracking-widest uppercase">
                  Visual Search
                </span>
              </div>
            </div>
            <div className="absolute -right-20 -bottom-20 opacity-5 group-hover:opacity-10 transition-opacity">
              <MessageSquare size={320} className="select-none" />
            </div>
          </div>

          {/* Feature 2 */}
          <div className="bg-white/5 backdrop-blur-3xl rounded-[3rem] p-12 border border-white/10 hover:border-blue-500/30 transition-all duration-700 flex flex-col justify-between shadow-3xl group">
            <div>
              <Search
                size={48}
                className="text-blue-400 mb-8 block group-hover:rotate-12 transition-transform"
              />
              <h3 className="text-3xl font-black mb-6">
                Personalized Recommendations
              </h3>
              <p className="text-slate-400 text-lg leading-relaxed font-medium">
                Predict accurately what users want based on real-time browsing
                patterns and purchase history.
              </p>
            </div>
            <div className="bg-zinc-950 p-6 rounded-3xl mt-12 border border-white/5 shadow-inner">
              <div className="flex items-center gap-3 mb-6">
                <div className="size-2 bg-blue-500 rounded-full animate-pulse shadow-neon"></div>
                <span className="text-xs font-black uppercase tracking-widest text-slate-500">
                  Trending for Client
                </span>
              </div>
              <div className="flex -space-x-3">
                <div className="size-16 rounded-2xl bg-zinc-800 border-2 border-zinc-950 shadow-2xl"></div>
                <div className="size-16 rounded-2xl bg-zinc-800 border-2 border-zinc-950 shadow-2xl"></div>
                <div className="size-16 rounded-2xl bg-blue-600/30 border-2 border-zinc-950 flex items-center justify-center text-sm font-black text-blue-500 backdrop-blur-md">
                  +3
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="md:col-span-3 bg-white/5 backdrop-blur-3xl rounded-[3rem] p-12 lg:p-20 border border-white/10 flex flex-col md:flex-row items-center gap-20 group shadow-3xl hover:border-blue-500/30 transition-all duration-700">
            <div className="flex-1">
              <div className="inline-flex px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-400 text-[10px] font-black tracking-[0.3em] uppercase mb-8">
                RECOVERY ENGINE
              </div>
              <h3 className="text-4xl md:text-5xl font-black mb-8 leading-tight tracking-tighter">
                Abandoned Cart Recovery <br className="hidden lg:block" /> via
                Conversational AI
              </h3>
              <p className="text-slate-400 text-xl leading-relaxed font-medium">
                Proactively connect with bounced customers using subtle,
                personalized reminders and dynamic offers via automated
                messaging.
              </p>
              <ul className="mt-10 space-y-5">
                <li className="flex items-center gap-4 text-lg font-bold text-slate-300 transition-all group-hover:translate-x-2">
                  <CheckCircle size={20} className="text-blue-500" />
                  Increase checkout completion by 35%
                </li>
                <li
                  className="flex items-center gap-4 text-lg font-bold text-slate-300 transition-all group-hover:translate-x-2"
                  style={{ animationDelay: '0.1s' }}
                >
                  <CheckCircle size={20} className="text-blue-500" />
                  Dynamic discounts based on cart value
                </li>
              </ul>
            </div>
            <div className="w-full md:w-2/5 aspect-[4/5] rounded-[3rem] overflow-hidden bg-zinc-900 flex items-center justify-center relative border border-white/5 shadow-2xl">
              <Image
                className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:scale-110 transition-transform duration-1000"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbDmD7jFNUx6NaMgWIUDRZjNOXx4-Stmng_L0nLQzltsU58oAb8io8_SKQo1I8KF1-q6AEIC8YrtPXRmKFGNNDFkXEdOYUnYF3PWPrx32AgJa9tll9HVGWuLwVgmXR78kEtk-BYPBT6uQbXipMBnwdv9Se2belK5xRY0G7jTgm4TYuPxjgNqjBM5OSBqIYdsZjapBcvXX7B0gDWZ32yoitwPyYEomfwDcDMDZO7gYpT15_p8JuwF-1Tdet9dyovC5NmJAJc8nuPJ-J"
                alt="Smartphone checkout success"
              />
              <div className="relative z-10 bg-zinc-950/80 backdrop-blur-2xl p-8 rounded-[2rem] border border-white/20 shadow-3xl transform rotate-2">
                <div className="text-base font-black italic text-white">
                  "Forgot this item? <br /> Final 10% off inside!"
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="px-6 md:px-12 py-40 bg-zinc-900/50 border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 blur-[120px] rounded-full"></div>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tighter">
              Measure the <br className="hidden md:block" />{' '}
              <span className="text-blue-500 underline decoration-4 underline-offset-8">
                ROI Impact
              </span>
            </h2>
            <p className="text-slate-400 text-xl font-medium leading-relaxed mb-12">
              Projections for exponential revenue growth when applying
              Intervision Prism solutions to your current E-commerce operations.
            </p>
            <div className="space-y-10">
              <div>
                <div className="flex justify-between text-sm font-black uppercase tracking-widest mb-4">
                  <span className="text-slate-500">
                    Current Monthly Revenue
                  </span>
                  <span className="text-white">500,000,000 VND</span>
                </div>
                <div className="h-3 w-full bg-zinc-800 rounded-full overflow-hidden p-0.5">
                  <div className="h-full w-1/3 bg-blue-600 rounded-full shadow-neon"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm font-black uppercase tracking-widest mb-4">
                  <span className="text-slate-500">Average Monthly Orders</span>
                  <span className="text-white">1,200</span>
                </div>
                <div className="h-3 w-full bg-zinc-800 rounded-full overflow-hidden p-0.5">
                  <div className="h-full w-1/2 bg-blue-400 rounded-full shadow-neon"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full animate-fade-in-up">
            <div className="bg-white/5 backdrop-blur-3xl p-12 md:p-16 rounded-[4rem] border border-blue-500/20 shadow-3xl relative overflow-hidden transform hover:-rotate-1 transition-transform">
              <div className="absolute top-0 right-0 p-10 opacity-10 pointer-events-none">
                <TrendingUp size={160} />
              </div>
              <div className="text-center mb-12">
                <div className="text-slate-400 text-xs font-black uppercase tracking-[0.3em] mb-4">
                  Estimated Revenue Growth (Year 1)
                </div>
                <div className="text-4xl md:text-6xl font-black text-blue-500 tracking-tighter">
                  +185,000,000 VND
                  <span className="text-xl ml-2 font-black text-slate-500">
                    /mo
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-zinc-950 p-6 rounded-3xl text-center border border-white/5 shadow-inner">
                  <div className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-2">
                    CONVERSION LIFT
                  </div>
                  <div className="text-3xl font-black text-blue-400">~ 22%</div>
                </div>
                <div className="bg-zinc-950 p-6 rounded-3xl text-center border border-white/5 shadow-inner">
                  <div className="text-[10px] text-slate-500 uppercase font-black tracking-widest mb-2">
                    COST SAVED
                  </div>
                  <div className="text-2xl font-black text-blue-300">
                    ~ 15M VND
                  </div>
                </div>
              </div>
              <button
                type="button"
                className="w-full mt-12 bg-white text-zinc-950 font-black py-6 rounded-2xl text-xl hover:bg-blue-500 hover:text-white transition-all transform active:scale-95 shadow-2xl"
              >
                Get Detailed Growth Report
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="px-6 md:px-12 py-40 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-8xl font-black mb-12 leading-[0.95] tracking-tighter animate-fade-in-up">
            Ready to Lead the <br className="hidden md:block" /> E-commerce
            Market?
          </h2>
          <p className="text-xl md:text-2xl text-slate-400 mb-20 max-w-2xl mx-auto leading-relaxed font-medium">
            Join 500+ premium brands skyrocketing their global sales with
            Intervision AI.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-10 font-black">
            <button
              type="button"
              className="bg-blue-600 hover:bg-blue-700 text-white px-14 py-6 rounded-2xl text-2xl active:scale-95 transition-all shadow-3xl shadow-blue-600/40"
            >
              Start for Free Now
            </button>
            <button
              type="button"
              className="text-white flex items-center gap-4 text-2xl group py-4"
            >
              Consulting for Enterprise
              <ArrowRight
                size={20}
                className="group-hover:translate-x-4 transition-transform text-blue-500"
              />
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default EcommerceProductPage
