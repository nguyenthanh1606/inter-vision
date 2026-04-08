import React from 'react';

export const metadata = {
  title: 'AI for Coaching & Freelancers | Intervision',
  description: 'Turn your knowledge into an automated customer attraction machine with Intervision AI.',
};

const CoachingProductPage = () => {
  return (
    <main className="flex-grow bg-slate-50 dark:bg-zinc-950 text-slate-900 dark:text-slate-100 antialiased overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-full mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 text-sm font-bold mb-8 animate-fade-in-up">
              <span className="material-symbols-outlined text-sm">bolt</span> AI SOLUTIONS FOR COACHES & FREELANCERS
            </div>
            <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight text-slate-900 dark:text-white mb-8">
              Turn Knowledge into an <span className="text-blue-500">Automated Machine</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              AI systems help coaches and freelancers screen high-quality students and schedule appointments 24/7 without hours of manual chatting.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-6 font-bold">
              <button className="bg-blue-600 text-white px-10 py-5 rounded-2xl text-lg hover:bg-blue-700 hover:scale-105 transition-all shadow-xl shadow-blue-500/20 shadow-neon flex items-center justify-center gap-2">
                Create Coaching Funnel <span className="material-symbols-outlined">arrow_forward</span>
              </button>
              <button className="bg-white/5 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white px-10 py-5 rounded-2xl text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">play_circle</span> Watch Demo
              </button>
            </div>
          </div>
          
          <div className="flex-1 relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="absolute -top-10 -right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]"></div>
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-3xl transform rotate-1 group">
              <img 
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNdXpqNqfsHJ4aWgcEB-m29X_CI7VSAyMfth16TFkflPiEWRJ_IHR8TuchYwhT1UdkBSgu33ivt9FyL79KQoDMcv4bXRFQn5p_nvpLSaS21R73RGI3-lMplW1_CGxdfBRKSEvJebLX6OWHQ873xCQjolmYL1Zz45el70sfDTeem3t9hdLV65q3dNF2VOp6EUbeU2BL1WhS_lA3QbcdM6Nd7FQjsFBHJ1pQf63Utrx9PE407tYab6r5ZL9Meue8L8GFLVhMZxt7kivW" 
                alt="Professional coaching workspace"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-xl p-6 rounded-2xl border border-white/20 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                <div className="flex items-center gap-4">
                  <div className="size-10 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/20">
                    <span className="material-symbols-outlined text-white text-lg">check</span>
                  </div>
                  <div>
                    <p className="text-white text-sm font-black">New Qualified Lead!</p>
                    <p className="text-white/70 text-xs mt-1">AI automatically screened & scheduled at 14:00.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-32 bg-white/50 dark:bg-white/5 border-y border-slate-200 dark:border-white/10">
        <div className="max-w-full mx-auto px-6 md:px-12">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Are You Facing These Challenges?</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Common roadblocks holding your coaching business back.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-10 rounded-[2rem] bg-white dark:bg-zinc-900 border border-slate-200 dark:border-white/10 hover:border-blue-500/50 transition-all group shadow-xl">
              <span className="material-symbols-outlined text-5xl text-blue-500 mb-8 group-hover:scale-110 transition-transform block">timer_off</span>
              <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Wrong Prospects</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Spending hours chatting with people who don't have real needs or sufficient budget to invest in your coaching.</p>
            </div>
            <div className="p-10 rounded-[2rem] bg-white dark:bg-zinc-900 border border-slate-200 dark:border-white/10 hover:border-blue-500/50 transition-all group shadow-xl">
              <span className="material-symbols-outlined text-5xl text-blue-500 mb-8 group-hover:scale-110 transition-transform block">person_remove</span>
              <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Ghosted After Pricing</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Lack of follow-up systems and value delivery causes leads to drop off immediately after receiving a quote.</p>
            </div>
            <div className="p-10 rounded-[2rem] bg-white dark:bg-zinc-900 border border-slate-200 dark:border-white/10 hover:border-blue-500/50 transition-all group shadow-xl">
              <span className="material-symbols-outlined text-5xl text-blue-500 mb-8 group-hover:scale-110 transition-transform block">inventory</span>
              <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Manual Process</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed">Manual information collection makes your professional image look amateur to high-end, premium students.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Chat Demo */}
      <section className="py-32">
        <div className="max-w-full mx-auto px-6 md:px-12">
          <div className="bg-zinc-900 rounded-[3rem] overflow-hidden border border-white/10 shadow-3xl flex flex-col md:flex-row min-h-[600px]">
            <div className="p-12 md:p-20 flex-1 flex flex-col justify-center">
              <h2 className="text-4xl font-black text-white mb-6">Experience the AI Student Screening Funnel</h2>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">Try our automated process that qualifies and categorizes leads in under 60 seconds.</p>
              <button className="bg-blue-600 text-white w-fit px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all flex items-center gap-3 shadow-xl shadow-blue-600/20">
                Start Demo Chat <span className="material-symbols-outlined">forum</span>
              </button>
            </div>
            <div className="flex-1 bg-zinc-800/40 p-8 md:p-12 border-l border-white/5 backdrop-blur-md">
              <div className="bg-zinc-950 rounded-2xl border border-white/10 h-full min-h-[400px] flex flex-col overflow-hidden shadow-2xl">
                <div className="p-4 border-b border-white/10 bg-white/5 flex items-center gap-3">
                  <div className="size-3 rounded-full bg-red-500"></div>
                  <div className="size-3 rounded-full bg-yellow-500"></div>
                  <div className="size-3 rounded-full bg-green-500"></div>
                  <span className="text-xs text-slate-500 ml-auto font-medium tracking-widest uppercase">AI Assistant</span>
                </div>
                <div className="flex-1 p-8 space-y-8 h-[400px] overflow-y-auto">
                  <div className="flex gap-4 animate-fade-in-up">
                    <div className="size-10 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0 border border-blue-500/10">
                      <span className="material-symbols-outlined text-blue-500 text-sm">smart_toy</span>
                    </div>
                    <div className="bg-zinc-800 p-4 rounded-2xl rounded-tl-none text-sm max-w-[85%] leading-relaxed shadow-sm">
                      Hello! What is your biggest goal for coaching this year?
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-3 animate-fade-in-up" style={{ animationDelay: '1s' }}>
                    <div className="bg-blue-600 text-white p-4 rounded-2xl rounded-tr-none text-sm max-w-[85%] leading-relaxed shadow-lg font-medium">
                      I want to increase my income to 100M VND/month.
                    </div>
                  </div>
                  <div className="flex gap-4 animate-fade-in-up" style={{ animationDelay: '2s' }}>
                    <div className="size-10 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0 border border-blue-500/10">
                      <span className="material-symbols-outlined text-blue-500 text-sm">smart_toy</span>
                    </div>
                    <div className="bg-zinc-800 p-4 rounded-2xl rounded-tl-none text-sm max-w-[85%] leading-relaxed shadow-sm">
                      Great! What is your expected budget for this roadmap?
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-4 px-14 animate-fade-in-up" style={{ animationDelay: '3s' }}>
                    <div className="px-5 py-2 border-2 border-blue-500/30 rounded-full text-xs font-bold text-blue-500 bg-blue-500/5 cursor-pointer hover:bg-blue-500 hover:text-white transition-all">Under 10M VND</div>
                    <div className="px-5 py-2 border-2 border-blue-500/30 rounded-full text-xs font-bold text-blue-500 bg-blue-500/5 cursor-pointer hover:bg-blue-500 hover:text-white transition-all">10 - 50M VND</div>
                    <div className="px-5 py-2 border-2 border-blue-500/30 rounded-full text-xs font-bold text-blue-500 bg-blue-500/5 cursor-pointer hover:bg-blue-500 hover:text-white transition-all">Over 50M VND</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-32 bg-white dark:bg-zinc-950 border-y border-slate-200 dark:border-white/10">
        <div className="max-w-full mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-3 gap-16">
            <div className="flex flex-col items-center text-center group">
              <div className="size-20 rounded-3xl bg-blue-500/10 flex items-center justify-center mb-8 group-hover:bg-blue-500/20 transition-all transform group-hover:rotate-6 shadow-xl shadow-blue-500/5">
                <span className="material-symbols-outlined text-4xl text-blue-600">nights_stay</span>
              </div>
              <h3 className="text-2xl font-black mb-4">24/7 Screening</h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">AI works for you even while you sleep, responding to customers immediately when they show interest.</p>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="size-20 rounded-3xl bg-blue-500/10 flex items-center justify-center mb-8 group-hover:bg-blue-500/20 transition-all transform group-hover:rotate-6 shadow-xl shadow-blue-500/5">
                <span className="material-symbols-outlined text-4xl text-blue-600">trending_up</span>
              </div>
              <h3 className="text-2xl font-black mb-4">Increase ROI</h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">Focus your precious time only on working with those who are truly serious and qualified.</p>
            </div>
            <div className="flex flex-col items-center text-center group">
              <div className="size-20 rounded-3xl bg-blue-500/10 flex items-center justify-center mb-8 group-hover:bg-blue-500/20 transition-all transform group-hover:rotate-6 shadow-xl shadow-blue-500/5">
                <span className="material-symbols-outlined text-4xl text-blue-600">verified_user</span>
              </div>
              <h3 className="text-2xl font-black mb-4">Professionalism</h3>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">Smooth, automated processes create a professional impression and differentiate you from noise.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-40 bg-zinc-950 relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #256af4 1px, transparent 0)', backgroundSize: '48px 48px' }}></div>
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center relative z-10">
          <span className="material-symbols-outlined text-8xl text-blue-500/40 mb-12 block select-none">format_quote</span>
          <p className="text-3xl md:text-5xl font-medium text-white italic leading-tight mb-16 tracking-tight">
            "Intervision completely changed the way I work. I save over 15 hours every week just by automating the screening phase. Now I only open Zoom when meeting the right people who are ready to pay."
          </p>
          <div className="flex items-center justify-center gap-6">
            <img 
              className="size-20 rounded-3xl border-2 border-blue-500 shadow-2xl p-0.5 object-cover transform rotate-3" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsonzg704bKd5K0mPgUV6VQp2KRXImbyXhf9vzjYQKudFd-Af3GJ-8IiMy35_LiRhvvczSbFdTizytt9gmNvmYXR6OPbcG85W4wfn9MSAlDeHd70BMwT0x5GsnHzUtFtaU8ECrD92nhm5ZTvZrVwQNtcmalOiQ7BFEJhf56yNhDWHyaclSnREiirVH5qwXtLoAtEP5MbQHGdckCDXWarc2HQXdiLWpf9y4h42SmljRNoeFQw9go9GHmeqF4cHCvGT-ZHblyNTjQT7k" 
              alt="Nguyen Minh Tuan"
            />
            <div className="text-left">
              <p className="text-xl font-black text-white">Nguyen Minh Tuan</p>
              <p className="text-blue-500 font-bold uppercase tracking-[0.2em] text-xs">Business & Mindset Mentor</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40">
        <div className="max-w-full mx-auto px-6 md:px-12">
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-[3rem] p-16 md:p-32 text-center relative overflow-hidden shadow-neon animate-fade-in-up">
            <div className="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
              <span className="material-symbols-outlined text-[320px]">auto_awesome</span>
            </div>
            <h2 className="text-4xl md:text-7xl font-black text-white mb-10 relative z-10 tracking-tight">Ready to Automate Your <br className="hidden md:block"/> Coaching Business?</h2>
            <p className="text-white/80 text-xl mb-16 max-w-2xl mx-auto relative z-10 leading-relaxed font-medium">Start today to optimize your customer attraction process and focus on creating real value for your students.</p>
            <button className="bg-white text-blue-600 px-12 py-6 rounded-2xl font-black text-2xl hover:bg-slate-100 hover:scale-105 transition-all shadow-3xl relative z-10 transform active:scale-95">
              Start for Free Now
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CoachingProductPage;
