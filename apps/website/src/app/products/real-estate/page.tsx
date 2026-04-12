import {
  Bot,
  CloudOff,
  ListFilter,
  Moon,
  Quote,
  Send,
  TrendingUp
} from 'lucide-react'
import Image from 'next/image'

export const metadata = {
  title: 'AI for Real Estate | Intervision',
  description:
    'Automate lead classification and collection for real estate brokers 24/7 with Intervision AI.'
}

const RealEstateProductPage = () => {
  return (
    <main className="flex-grow bg-slate-50 dark:bg-zinc-950 text-slate-900 dark:text-slate-100 antialiased">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-20 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#ec5b13]/40 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#ec5b13]/20 rounded-full blur-[100px]"></div>
        </div>

        <div className="max-w-full mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col gap-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ec5b13]/10 border border-[#ec5b13]/20 text-[#ec5b13] text-sm font-bold uppercase tracking-wider w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ec5b13] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ec5b13]"></span>
                </span>
                AI for Real Estate
              </div>
              <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tight text-slate-900 dark:text-white">
                Automate Lead Classification for{' '}
                <span className="text-[#ec5b13]">Real Estate</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed">
                AI systems help brokers capture customer real estate needs 24/7
                without missing any opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="button"
                  className="bg-[#ec5b13] hover:scale-105 transition-transform text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-[#ec5b13]/20 shadow-neon"
                >
                  Start for Real Estate
                </button>
                <button
                  type="button"
                  className="bg-white/5 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 hover:bg-white/10 text-slate-900 dark:text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all"
                >
                  Watch Demo
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-[#ec5b13]/10">
                <Image
                  className="w-full h-auto object-cover aspect-square"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaXQpx96k6EaLB4MEepbRm1_h2yHfM5W8KAkIyOScI88xz5aXe1Ibtvb-Ruv1joXzKBfVlnsnufXYTTCB1ncIYqSHH7YzMgKkypkTDp8URVakChDScw8138k5bNMQAjWSqv6BdGgACTR1byIQ0nSEPPiM_JGg0EmJBm_gtwdHzWOWNReWpu9FUi2yKuM761jJh_WGCUBfbh6gKyVaxiRW5noCGegoYkvcVaZ7Q2y4-UhLl9TqDI52dRtS84wkbFGz08u6Yy5mV7e5Z"
                  alt="Modern luxury real estate office"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white dark:bg-zinc-900 p-8 rounded-3xl shadow-2xl border border-[#ec5b13]/10 hidden md:block animate-fade-in-up">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-green-500/20 flex items-center justify-center text-green-500">
                    <TrendingUp size={30} />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-slate-500 uppercase tracking-widest">
                      New Leads Today
                    </div>
                    <div className="text-3xl font-black text-slate-900 dark:text-white">
                      +24 Prospects
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-32 bg-white/50 dark:bg-white/5 border-y border-slate-200 dark:border-white/10">
        <div className="max-w-full mx-auto px-6 md:px-12 text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            Major Challenges for Brokers
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Fast response is a vital factor for successful real estate closing.
          </p>
        </div>

        <div className="max-w-full mx-auto px-6 md:px-12 grid md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-zinc-900/50 p-10 rounded-3xl border border-slate-200 dark:border-white/10 border-b-4 border-b-[#ec5b13] hover:-translate-y-2 transition-transform shadow-xl">
            <div className="w-16 h-16 bg-[#ec5b13]/10 rounded-2xl flex items-center justify-center text-[#ec5b13] mb-8">
              <Moon size={40} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
              Missing Nighttime Leads
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Customers often search for properties outside of business hours,
              leading to delayed responses and losing leads to competitors.
            </p>
          </div>

          <div className="bg-white dark:bg-zinc-900/50 p-10 rounded-3xl border border-slate-200 dark:border-white/10 border-b-4 border-b-[#ec5b13] hover:-translate-y-2 transition-transform shadow-xl">
            <div className="w-16 h-16 bg-[#ec5b13]/10 rounded-2xl flex items-center justify-center text-[#ec5b13] mb-8">
              <ListFilter size={40} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
              Time-Consuming Filtering
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Processing hundreds of spam messages or low-budget leads before
              finding serious buyers who are ready to commit.
            </p>
          </div>

          <div className="bg-white dark:bg-zinc-900/50 p-10 rounded-3xl border border-slate-200 dark:border-white/10 border-b-4 border-b-[#ec5b13] hover:-translate-y-2 transition-transform shadow-xl">
            <div className="w-16 h-16 bg-[#ec5b13]/10 rounded-2xl flex items-center justify-center text-[#ec5b13] mb-8">
              <CloudOff size={40} />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">
              Fragmented Data
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Customer information is scattered across platforms, making it hard
              to manage and track long-term consultation progress.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Demo */}
      <section className="py-32 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-6">
              Experience 24/7 AI Consultation
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              Simulate how Intervision AI interacts with your potential
              customers.
            </p>
          </div>

          <div className="bg-white dark:bg-zinc-900 border border-[#ec5b13]/20 rounded-[2.5rem] shadow-2xl overflow-hidden max-w-md mx-auto transform hover:scale-[1.02] transition-transform">
            {/* Chat Header */}
            <div className="bg-[#ec5b13] p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center text-white backdrop-blur-md">
                <Bot size={24} />
              </div>
              <div className="text-white">
                <div className="font-bold text-lg leading-none">
                  Intervision Assistant
                </div>
                <div className="text-sm opacity-80 mt-1 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                  Online
                </div>
              </div>
            </div>

            {/* Chat Body */}
            <div className="p-8 space-y-6 h-[480px] overflow-y-auto bg-slate-50 dark:bg-zinc-950">
              <div className="flex gap-3 animate-fade-in-up">
                <div className="w-10 h-10 rounded-xl bg-[#ec5b13]/20 flex items-center justify-center text-[#ec5b13] shrink-0 border border-[#ec5b13]/10">
                  <Bot size={20} />
                </div>
                <div className="bg-white dark:bg-zinc-900 p-4 rounded-2xl rounded-tl-none text-sm shadow-sm max-w-[85%] border border-[#ec5b13]/5">
                  Hello! I am your AI assistant from Intervision. Are you
                  looking to buy or rent property?
                </div>
              </div>

              <div
                className="flex justify-end animate-fade-in-up"
                style={{ animationDelay: '1s' }}
              >
                <div className="bg-[#ec5b13] text-white p-4 rounded-2xl rounded-tr-none text-sm shadow-lg max-w-[85%] font-medium">
                  I'm looking to buy a townhouse.
                </div>
              </div>

              <div
                className="flex gap-3 animate-fade-in-up"
                style={{ animationDelay: '2s' }}
              >
                <div className="w-10 h-10 rounded-xl bg-[#ec5b13]/20 flex items-center justify-center text-[#ec5b13] shrink-0 border border-[#ec5b13]/10">
                  <Bot size={20} />
                </div>
                <div className="bg-white dark:bg-zinc-900 p-4 rounded-2xl rounded-tl-none text-sm shadow-sm max-w-[85%] border border-[#ec5b13]/5">
                  Great. What is your expected budget and which area is your top
                  priority?
                </div>
              </div>

              {/* Quiz Options */}
              <div
                className="pl-12 flex flex-wrap gap-2 animate-fade-in-up"
                style={{ animationDelay: '3s' }}
              >
                <button
                  type="button"
                  className="px-4 py-2 rounded-xl border border-[#ec5b13] text-[#ec5b13] text-xs font-bold hover:bg-[#ec5b13] hover:text-white transition-all"
                >
                  Under 5 Billion VND
                </button>
                <button
                  type="button"
                  className="px-4 py-2 rounded-xl border border-[#ec5b13] text-[#ec5b13] text-xs font-bold hover:bg-[#ec5b13] hover:text-white transition-all"
                >
                  5 - 10 Billion VND
                </button>
                <button
                  type="button"
                  className="px-4 py-2 rounded-xl border border-[#ec5b13] text-[#ec5b13] text-xs font-bold hover:bg-[#ec5b13] hover:text-white transition-all"
                >
                  Over 10 Billion VND
                </button>
              </div>
            </div>

            {/* Chat Footer */}
            <div className="p-6 bg-white dark:bg-zinc-900 border-t border-[#ec5b13]/10">
              <div className="bg-slate-100 dark:bg-zinc-950 rounded-2xl p-3 flex items-center border border-[#ec5b13]/5">
                <div className="flex-1 px-4 text-slate-400 text-sm italic">
                  User is choosing...
                </div>
                <button
                  type="button"
                  className="p-2 text-[#ec5b13] hover:scale-110 transition-transform"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section className="py-24 bg-[#ec5b13] text-white">
        <div className="max-w-full mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            <div className="animate-fade-in-up">
              <div className="text-6xl font-black mb-3 tracking-tighter">
                40%
              </div>
              <div className="text-white/80 font-bold uppercase text-xs tracking-[0.2em]">
                Increase Closing Rate
              </div>
            </div>
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: '0.1s' }}
            >
              <div className="text-6xl font-black mb-3 tracking-tighter">
                15h
              </div>
              <div className="text-white/80 font-bold uppercase text-xs tracking-[0.2em]">
                Hours Saved Weekly
              </div>
            </div>
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: '0.2s' }}
            >
              <div className="text-6xl font-black mb-3 tracking-tighter">
                100%
              </div>
              <div className="text-white/80 font-bold uppercase text-xs tracking-[0.2em]">
                Leads Responded To
              </div>
            </div>
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: '0.3s' }}
            >
              <div className="text-6xl font-black mb-3 tracking-tighter">
                24/7
              </div>
              <div className="text-white/80 font-bold uppercase text-xs tracking-[0.2em]">
                Non-stop Operation
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-40">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="bg-white/5 dark:bg-white/5 backdrop-blur-3xl p-12 md:p-20 rounded-[3rem] relative border border-slate-200 dark:border-white/10 shadow-3xl">
            <Quote
              size={90}
              className="text-[#ec5b13]/10 absolute top-10 left-10 select-none"
            />
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
              <div className="w-40 h-40 rounded-[2rem] overflow-hidden shrink-0 border-4 border-[#ec5b13]/20 shadow-2xl transform -rotate-3">
                <Image
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpdXrLLewLEhpGBZEj1HaMAMjQE4vEjAD8-clMmE_pYvbQfvVKfQNKVBL9vpdlWb98woiVnaJbAeonZH1lsMYdJUWPtbowsEvupUzNT0WtPft1i56EgYjWzJFxmwTFCnEZW7UNgwbgd2K-6FCynuSE9h9S4lVEqphEfYb4NSjpNDOxdQTg2fAUEUaDVSTDGyvUX2uiamM2Th8RIZYAW2LeGn8bMP5IhmQu3RLUo7H76Ub-vdxlM7LA8XI057OH4A6qQsZ-tehgv5tH"
                  alt="Mr. Hoang Nam"
                />
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-medium italic mb-8 leading-relaxed text-slate-800 dark:text-slate-100">
                  "Since using Intervision AI, I no longer worry about
                  late-night messages. AI helps me pre-filter customers with
                  matching budgets, so I just need to call and schedule
                  viewings. It saves so much time!"
                </p>
                <div>
                  <h4 className="text-2xl font-black text-[#ec5b13]">
                    Mr. Hoang Nam
                  </h4>
                  <p className="text-slate-500 font-bold uppercase tracking-widest text-sm mt-1">
                    Sales Director at Luxury Home Vietnam
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="pb-40 relative px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center bg-white/5 dark:bg-white/5 backdrop-blur-3xl py-24 rounded-[4rem] border border-slate-200 dark:border-white/10 shadow-3xl overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#ec5b13]/5 to-transparent -z-10"></div>
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
            Ready to Skyrocket Your <br className="hidden md:block" /> Real
            Estate Revenue?
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join over 500+ brokers and real estate agencies leading the market
            with AI technology.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button
              type="button"
              className="bg-[#ec5b13] hover:scale-105 hover:bg-[#ec5b13]/90 text-white px-12 py-5 rounded-2xl font-black text-xl transition-all shadow-[#ec5b13]/30 shadow-neon"
            >
              Start for Free Now
            </button>
            <button
              type="button"
              className="bg-transparent border-2 border-[#ec5b13]/20 hover:border-[#ec5b13] text-slate-900 dark:text-white px-12 py-5 rounded-2xl font-black text-xl transition-all"
            >
              Contact 1-1
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}

export default RealEstateProductPage
