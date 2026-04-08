import { Clock, CalendarX2, Frown } from 'lucide-react'

export const metadata = {
  title: 'AI Solutions for Spas & Aesthetics | Intervision',
  description: 'Comprehensive AI solutions helping Spas and Aesthetics Clinics increase conversion rates and customer retention 24/7.'
}

export default function SpaProductPage() {
  return (
    <main className="flex-grow">
      {/* Hero Section */}
      <div className="@container w-full pt-20">
        <div 
          className="relative flex min-h-[560px] flex-col gap-6 overflow-hidden bg-cover bg-center bg-no-repeat @[480px]:gap-8 items-center justify-center p-8 text-center group" 
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.7) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuB_Ufc_1JOKMghwChbQTNU7u2wn9ERYBLx6hvQ0e50wae4yZYb6kG1Khc2RHCuydh4UgdQq8jUsNHGAKe-ajx8IcjM3hi_n8sRjL1wyPf62X1wswz3wBzse70mOEqxh3ffReIn3VkBLy-6FzZSh5aa_AtOfYdly3-JxuF4Ii6HI8CEnlMSEAYx42xLIFpyL-M19L-AZNoh6RRURaiJ5z5snu0AuYOQrXGbSqb9OzDmrHK9lrjzRxY0f1ESgiWninBZsnyjJF3FFayF3")'
          }}
        >
          <div className="flex flex-col gap-4 max-w-[800px] z-10 animate-fade-in-up">
            <span className="text-primary font-bold tracking-wider uppercase text-sm">AI Solutions for Spas & Aesthetics Clinics</span>
            <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-6xl drop-shadow-lg">
              Automate Scheduling and Consultation for Your Spa Customers
            </h1>
            <p className="text-slate-200 text-lg font-normal leading-relaxed @[480px]:text-xl max-w-[640px] mx-auto">
              Comprehensive AI solutions helping Spas and Aesthetics Clinics increase conversion rates and customer retention 24/7 without additional staff.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 z-10">
            <button className="flex min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-primary hover:bg-blue-600 transition-all text-white text-base font-bold shadow-lg shadow-blue-500/30">
              <span className="truncate">Start for Your Spa</span>
            </button>
            <button className="flex min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-8 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 transition-all text-white text-base font-bold">
              <span className="truncate">Watch Demo</span>
            </button>
          </div>
        </div>
      </div>

      {/* Pain Points Section */}
      <div className="layout-content-container flex flex-col max-w-[1200px] mx-auto px-4 py-16 gap-12">
        <div className="flex flex-col items-center text-center gap-4">
          <h2 className="text-slate-900 dark:text-white tracking-tight text-3xl font-bold leading-tight md:text-5xl max-w-[800px]">
            Are Customers Leaving Because of Delayed Consultations?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg font-normal leading-relaxed max-w-[720px]">
            Don't lose potential customers over slow responses. Intervision solves the biggest pain points for Spa owners.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="group flex flex-col gap-6 rounded-2xl border border-slate-200 dark:border-border-dark bg-white dark:bg-surface-dark p-8 hover:border-primary/50 transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              <Clock size={30} />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-slate-900 dark:text-white text-xl font-bold leading-tight">Slow Response</h3>
              <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">Customers waiting too long will go to competitors. 70% of customers expect an immediate response.</p>
            </div>
          </div>
          {/* Card 2 */}
          <div className="group flex flex-col gap-6 rounded-2xl border border-slate-200 dark:border-border-dark bg-white dark:bg-surface-dark p-8 hover:border-primary/50 transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              <CalendarX2 size={30} />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-slate-900 dark:text-white text-xl font-bold leading-tight">Overlapping Appointments</h3>
              <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">Manual management through messages leads to confusion, double bookings, and an unprofessional experience.</p>
            </div>
          </div>
          {/* Card 3 */}
          <div className="group flex flex-col gap-6 rounded-2xl border border-slate-200 dark:border-border-dark bg-white dark:bg-surface-dark p-8 hover:border-primary/50 transition-all duration-300">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
              <Frown size={30} />
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-slate-900 dark:text-white text-xl font-bold leading-tight">Poor Post-Treatment Care</h3>
              <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">Lack of follow-up after customers leave reduces return rates and new referrals.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Demo / Quiz Section */}
      <div className="w-full bg-white dark:bg-surface-dark border-y border-slate-200 dark:border-border-dark">
        <div className="max-w-[1000px] mx-auto px-4 py-20 flex flex-col gap-10">
          <div className="text-center space-y-2">
            <span className="text-primary font-bold text-sm tracking-widest uppercase">Live Experience</span>
            <h2 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-bold leading-tight">
              Automated Consultation Demo
            </h2>
            <p className="text-slate-600 dark:text-slate-400">AI will automatically suggest the right script based on customer preferences.</p>
          </div>
          <div className="bg-slate-50 dark:bg-background-dark border border-slate-200 dark:border-border-dark rounded-2xl p-6 md:p-10 shadow-2xl">
            <h3 className="text-slate-900 dark:text-white text-xl font-semibold mb-6">Which service are you interested in?</h3>
            <div className="space-y-4">
              <label className="group flex items-center gap-4 rounded-xl border border-slate-200 dark:border-border-dark bg-white/50 dark:bg-surface-dark/50 p-4 hover:border-primary hover:bg-white dark:hover:bg-surface-dark transition-all cursor-pointer">
                <div className="relative flex items-center justify-center">
                  <input defaultChecked className="peer h-5 w-5 border-2 border-slate-300 dark:border-slate-600 bg-transparent text-primary focus:ring-primary focus:ring-offset-0 checked:border-primary cursor-pointer appearance-none rounded-full checked:bg-primary" name="service_interest" type="radio"/>
                  <div className="absolute inset-0 hidden peer-checked:flex items-center justify-center pointer-events-none">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-slate-900 dark:text-white text-base font-semibold group-hover:text-primary transition-colors">Skin Care & Facials</span>
                  <span className="text-slate-600 dark:text-slate-400 text-sm">Consultation on acne, pigmentation, and skin rejuvenation treatments</span>
                </div>
              </label>
              <label className="group flex items-center gap-4 rounded-xl border border-slate-200 dark:border-border-dark bg-white/50 dark:bg-surface-dark/50 p-4 hover:border-primary hover:bg-white dark:hover:bg-surface-dark transition-all cursor-pointer">
                <div className="relative flex items-center justify-center">
                  <input className="peer h-5 w-5 border-2 border-slate-300 dark:border-slate-600 bg-transparent text-primary focus:ring-primary focus:ring-offset-0 checked:border-primary cursor-pointer appearance-none rounded-full checked:bg-primary" name="service_interest" type="radio"/>
                  <div className="absolute inset-0 hidden peer-checked:flex items-center justify-center pointer-events-none">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-slate-900 dark:text-white text-base font-semibold group-hover:text-primary transition-colors">High-Tech Slimming</span>
                  <span className="text-slate-600 dark:text-slate-400 text-sm">Fat reduction for abdomen, thighs, and body toning packages</span>
                </div>
              </label>
              <label className="group flex items-center gap-4 rounded-xl border border-slate-200 dark:border-border-dark bg-white/50 dark:bg-surface-dark/50 p-4 hover:border-primary hover:bg-white dark:hover:bg-surface-dark transition-all cursor-pointer">
                <div className="relative flex items-center justify-center">
                  <input className="peer h-5 w-5 border-2 border-slate-300 dark:border-slate-600 bg-transparent text-primary focus:ring-primary focus:ring-offset-0 checked:border-primary cursor-pointer appearance-none rounded-full checked:bg-primary" name="service_interest" type="radio"/>
                  <div className="absolute inset-0 hidden peer-checked:flex items-center justify-center pointer-events-none">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-slate-900 dark:text-white text-base font-semibold group-hover:text-primary transition-colors">Permanent Hair Removal</span>
                  <span className="text-slate-600 dark:text-slate-400 text-sm">Safe, painless Laser Diode technology</span>
                </div>
              </label>
            </div>
            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-border-dark flex flex-col md:flex-row gap-4 justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-slate-600 dark:text-slate-400">AI is ready to respond...</span>
              </div>
              <button className="w-full md:w-auto px-6 py-2.5 rounded-lg bg-primary hover:bg-blue-600 text-white font-bold text-sm transition-colors">
                Start Consultation Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Case Study Section */}
      <div className="max-w-[1200px] mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row gap-12 items-center rounded-3xl bg-gradient-to-br from-white dark:from-surface-dark to-slate-50 dark:to-background-dark border border-slate-200 dark:border-border-dark p-8 md:p-12">
          <div className="flex-1 flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-600 dark:text-green-400 text-xs font-bold uppercase tracking-wider">Case Study</span>
              <span className="text-slate-600 dark:text-slate-400 text-sm font-medium">Lotus Spa & Clinic</span>
            </div>
            <h2 className="text-slate-900 dark:text-white text-3xl md:text-4xl font-bold leading-tight">
              'Intervision helped us increase <span className="text-primary">revenue by 30%</span> after only 2 months of implementation.'
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
              Previously, receptionists were often overloaded during peak hours, leading to missed customer messages. With Intervision, every message is responded to immediately, and appointments are automatically scheduled into available time slots.
            </p>
            <div className="flex flex-col gap-4 mt-2">
              <div className="flex items-center gap-4">
                <div className="flex flex-col">
                  <strong className="text-slate-900 dark:text-white text-xl">Ms. Thu Hoài</strong>
                  <span className="text-slate-600 dark:text-slate-400 text-sm">Founder, Lotus Spa</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="bg-slate-100 dark:bg-background-dark/50 border border-slate-200 dark:border-border-dark rounded-xl p-4">
                  <div className="text-2xl font-bold text-slate-900 dark:text-white mb-1">24/7</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Response Time</div>
                </div>
                <div className="bg-slate-100 dark:bg-background-dark/50 border border-slate-200 dark:border-border-dark rounded-xl p-4">
                  <div className="text-2xl font-bold text-slate-900 dark:text-white mb-1">+45%</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">Booking Rate</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 w-full relative">
            <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full opacity-40"></div>
            <img 
              alt="Spa owner using tablet" 
              className="relative w-full h-auto aspect-video object-cover rounded-xl border border-slate-200 dark:border-border-dark shadow-2xl" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAf7rXcOPcqlUc6D7Q0ZslMJVx11v19ydi5Qgm3JSNCUOe5OQGKZKMocUKDmhgT6JsJ0I7tCLbZ06DyPoDKmUwrMLEiAHGr5lmvZr3SM6P8yuNmRYy8zQPzRxIbIGATH4pxqrNYFwOK5a-j21m247FDHEJcuFDRHV_tfJLwpfeL9EkrK1-THGVPcVEqYO2JJYMOje8MnnTkd2h4qYs0ywcQ2ac44HMxvIdjszi1gsRk-h4NWrfdEZV_hukY6LSYY1AvN8-DlQlFqQgo" 
            />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-slate-50 dark:bg-background-dark py-24 text-center border-t border-slate-200 dark:border-border-dark">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-slate-900 dark:text-white text-4xl font-black leading-tight tracking-tight mb-6 max-w-[800px] mx-auto">
            Ready to Skyrocket Your Spa's Revenue?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg mb-10 max-w-[600px] mx-auto">
            Sign up today to receive free consultation and experience the power of AI in Spa operational management.
          </p>
          <button className="inline-flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-14 px-8 bg-primary hover:bg-primary-hover transition-all text-white text-lg font-bold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40">
            Start for Your Spa
          </button>
          <p className="mt-6 text-sm text-slate-500 italic">14-day free trial. No credit card required.</p>
        </div>
      </div>
    </main>
  )
}

