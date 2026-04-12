import {
  ArrowRight,
  BrainCircuit,
  Building2,
  ChevronRight,
  Leaf,
  Megaphone,
  ShoppingCart
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Specialized AI Solutions | Intervision',
  description:
    'Explore how Intervision helps your business automate processes, screen customers, and achieve outstanding revenue growth with next-generation AI.'
}

export default function ProductsPage() {
  return (
    <main className="pt-32 pb-24 px-6 md:px-12 max-w-full mx-auto">
      {/* Hero Section */}
      <header className="relative mb-24 text-center md:text-left">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="relative z-10 max-w-3xl">
          <span className="inline-block py-1 px-3 mb-6 rounded-md bg-blue-900/20 text-primary text-xs font-bold tracking-widest uppercase">
            The Digital Oracle
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter text-slate-900 dark:text-white mb-8 leading-[1.1]">
            Specialized AI Solutions for Every Industry
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed mb-10">
            Discover how Intervision helps your business automate processes,
            screen customers, and achieve outstanding revenue growth through
            next-generation artificial intelligence.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <button
              type="button"
              className="bg-gradient-to-br from-primary to-primary-hover text-white px-8 py-4 rounded-xl font-bold transition-transform active:scale-95 flex items-center gap-2 shadow-neon"
            >
              Get Started Now <ArrowRight size={20} />
            </button>
            <button
              type="button"
              className="bg-slate-200/20 dark:bg-surface-dark/20 border border-slate-300 dark:border-border-dark text-slate-900 dark:text-white px-8 py-4 rounded-xl font-bold backdrop-blur-md hover:bg-slate-100 dark:hover:bg-surface-dark/40 transition-all"
            >
              Watch Demo
            </button>
          </div>
        </div>
      </header>

      {/* Industry Solutions Grid (Bento Style) */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Solution 1: Spa */}
        <div className="md:col-span-8 group relative overflow-hidden bg-white/5 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl p-8 transition-all hover:bg-white/10 dark:hover:bg-white/10">
          <div className="flex flex-col md:flex-row gap-8 items-center h-full">
            <div className="flex-1">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Leaf size={30} className="text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Spa & Aesthetics Solutions
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                Automate scheduling and consultation 24/7. Minimize missed
                prospects and intelligently optimize technician schedules.
              </p>
              <Link
                href="/products/spa"
                className="text-primary font-semibold flex items-center gap-2 hover:gap-4 transition-all"
              >
                View Details <ChevronRight size={16} />
              </Link>
            </div>
            <div className="flex-1 w-full h-64 md:h-full min-h-[240px] relative rounded-2xl overflow-hidden">
              <Image
                className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeyk8nunTEkdyWhy-wDK99JxPGPoAMeRaut9VBol-6URpW0cwrqv5t85hJtv0WDWDDed6o-YMvVShXZP8Px9xss7pwg_OUV9BcSdC9xLn1fSpl4_qbVgauueyTMdOFIz4coSnxJosYPIZ4EGZRL_ViwcNIeAIjZ6X5pqsHAaVBZ4hgEqTeLL5ZpgbyzjDxp2TUUyyxXUO0ms3aG6L0sHj8q5I0XCtXlUXI-wpAqWhjUyxK3HcTsT5na6Jp3yV9WFTWxdUbm4IT7Y8f"
                alt="luxury spa interior"
                width={550}
                height={550}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent group-hover:opacity-0 transition-opacity duration-300"></div>
            </div>
          </div>
        </div>

        {/* Solution 2: Real Estate */}
        <div className="md:col-span-4 group relative overflow-hidden bg-white/5 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl p-8 transition-all hover:bg-white/10 dark:hover:bg-white/10">
          <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
            <Building2 size={30} className="text-secondary" />
          </div>
          <h3 className="text-2xl font-bold mb-4">Real Estate</h3>
          <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
            Classify property needs and automatically collect leads from
            multiple digital channels.
          </p>
          <div className="mb-8 w-full h-40 rounded-xl overflow-hidden">
            <Image
              className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-500 group-hover:opacity-100"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwZwn1oU-bzuLel0PA7moCcsGrM13JrJRiBJ65NexQA3eszv8OvJgHu8A0KT-ULBbIQUDPMdX5DDAgYCecr1mvKP4yaxd0jORXGBJXs2xFyDL6wJq4L-FxskQFn3gGRFgNJz4ynX4_w98q70hdkTnl0y56Vk8eoBtA85Dd9DgQ-RUc91YEqULIYVjfupKPCk7dckJP9XoiY0V5pYQojeBPEwx0JlT6A-vMs4AsvMSKQ6JpUk7WSPUkie8gL0mPRk2giVd9AoOaNQ--"
              alt="modern high-rise buildings"
              width={400}
              height={250}
            />
          </div>
          <Link
            href="/products/real-estate"
            className="text-primary font-semibold flex items-center gap-2 hover:gap-4 transition-all"
          >
            View Details <ChevronRight size={16} />
          </Link>
        </div>

        {/* Solution 3: Coaching */}
        <div className="md:col-span-4 group relative overflow-hidden bg-white/5 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl p-8 transition-all hover:bg-white/10 dark:hover:bg-white/10">
          <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6">
            <BrainCircuit size={30} className="text-purple-500" />
          </div>
          <h3 className="text-2xl font-bold mb-4">Coaching & Freelancers</h3>
          <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
            Screen students and turn knowledge into an automated customer
            attraction machine.
          </p>
          <Link
            href="/products/coaching"
            className="text-primary font-semibold flex items-center gap-2 hover:gap-4 transition-all"
          >
            View Details <ChevronRight size={16} />
          </Link>
        </div>

        {/* Solution 4: Agency */}
        <div className="md:col-span-4 group relative overflow-hidden bg-white/5 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl p-8 transition-all hover:bg-white/10 dark:hover:bg-white/10">
          <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
            <Megaphone size={30} className="text-primary" />
          </div>
          <h3 className="text-2xl font-bold mb-4">Agency Solutions</h3>
          <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
            Manage campaigns and optimize conversions for clients through AI
            data insights.
          </p>
          <Link
            href="/products/agency"
            className="text-primary font-semibold flex items-center gap-2 hover:gap-4 transition-all"
          >
            View Details <ChevronRight size={16} />
          </Link>
        </div>

        {/* Solution 5: E-commerce */}
        <div className="md:col-span-4 group relative overflow-hidden bg-white/5 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl p-8 transition-all hover:bg-white/10 dark:hover:bg-white/10">
          <div className="absolute top-4 right-4">
            <span className="bg-primary/20 text-primary text-[10px] font-bold px-2 py-1 rounded-full uppercase">
              Hot
            </span>
          </div>
          <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6">
            <ShoppingCart size={30} className="text-secondary" />
          </div>
          <h3 className="text-2xl font-bold mb-4">E-commerce</h3>
          <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
            Increase closing rates through multi-lingual conversational chatbots
            and personalized recommendations.
          </p>
          <Link
            href="/products/ecommerce"
            className="text-primary font-semibold flex items-center gap-2 hover:gap-4 transition-all"
          >
            View Details <ChevronRight size={16} />
          </Link>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="mt-32 relative">
        <div className="bg-white/5 dark:bg-white/5 backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-[2.5rem] p-12 md:p-20 overflow-hidden relative border-none">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10"></div>
          <div className="absolute -right-20 -bottom-20 w-80 h-80 bg-primary/20 blur-[100px] rounded-full"></div>
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
              Haven't found the right solution yet?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
              Contact us to build a custom AI solution, tailored specifically to
              your business model and your unique challenges.
            </p>
            <button
              type="button"
              className="bg-primary hover:bg-primary-hover text-white px-10 py-5 rounded-full font-black text-lg hover:scale-105 transition-transform shadow-neon"
            >
              Contact for 1-1 Consultation
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
