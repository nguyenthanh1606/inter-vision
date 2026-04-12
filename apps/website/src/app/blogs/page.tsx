import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { CTA } from '../_components/CTA'

export default function BlogsPage() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-hidden pt-24">
      <main className="flex-1 mx-auto max-w-[1200px] w-full px-6 lg:px-0 py-10">
        {/* Hero / Featured Post */}
        <section className="mb-16">
          <Link
            href="/blogs/kham-pha-ky-nguyen-ai"
            className="relative overflow-hidden rounded-2xl bg-slate-900 border border-primary/20 flex flex-col lg:flex-row min-h-[450px] group"
          >
            <div
              className="w-full lg:w-1/2 bg-center bg-cover min-h-[300px]"
              data-alt="Futuristic AI chip with blue neon circuits"
              style={{
                backgroundImage:
                  'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDg6j29bygvXG9PJ1sPHQc2EGgQKR1hUgkkIbY5k3OtaF8WNoH2WictdORf7O9SGENGO2PAPnT2zaZvcno14ZBs_AGRtRdlFoTXoj1oXvRizHUVHno8UYlKLcUclHIkds8gDvaIh9MNxlhwy67VhSGAS0_yOMxdjUlEewOfXVACRtZ4ju5040i6GEucNrOFyioOQt0xgytm5h93dZs0y8yZ3RhEY-PJmgJDvzYbGh0JhTJoLdNbgitz8XYEaDm9PLUqeGcCM3Ck_E4V")'
              }}
            ></div>
            <div className="w-full lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center gap-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold uppercase tracking-wider">
                  Featured
                </span>
                <span className="text-slate-400 text-sm">May 12, 2024</span>
              </div>
              <h1 className="text-3xl lg:text-5xl font-black leading-tight text-slate-100 group-hover:text-primary transition-colors">
                Discover the Era of AI in Modern Marketing
              </h1>
              <p className="text-slate-400 text-lg leading-relaxed">
                Stay ahead of AI trends, optimize Lead Gen conversion rates, and
                build breakthrough marketing strategies with Intervision
                experts.
              </p>
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  className="flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-bold text-white shadow-[0_0_20px_rgba(37,106,244,0.4)] hover:shadow-[0_0_30px_rgba(37,106,244,0.6)] transition-all"
                >
                  <span>Read article now</span>
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>
          </Link>
        </section>

        {/* Categories Filter */}
        <div className="mb-10 flex flex-wrap items-center justify-between border-b border-slate-800 pb-4 gap-4">
          <div className="flex gap-2 sm:gap-6 overflow-x-auto no-scrollbar">
            <button
              type="button"
              className="border-b-2 border-primary pb-4 px-2 text-sm font-bold text-primary whitespace-nowrap"
            >
              All articles
            </button>
            <button
              type="button"
              className="border-b-2 border-transparent pb-4 px-2 text-sm font-medium text-slate-400 hover:text-slate-100 transition-colors whitespace-nowrap"
            >
              Artificial Intelligence (AI)
            </button>
            <button
              type="button"
              className="border-b-2 border-transparent pb-4 px-2 text-sm font-medium text-slate-400 hover:text-slate-100 transition-colors whitespace-nowrap"
            >
              Lead Generation
            </button>
            <button
              type="button"
              className="border-b-2 border-transparent pb-4 px-2 text-sm font-medium text-slate-400 hover:text-slate-100 transition-colors whitespace-nowrap"
            >
              Digital Marketing
            </button>
            <button
              type="button"
              className="border-b-2 border-transparent pb-4 px-2 text-sm font-medium text-slate-400 hover:text-slate-100 transition-colors whitespace-nowrap"
            >
              SaaS Technology
            </button>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <span className="text-sm font-medium">Sort by:</span>
            <select className="bg-transparent border-none text-sm font-bold text-slate-100 focus:ring-0 cursor-pointer">
              <option>Newest</option>
              <option>Most viewed</option>
            </select>
          </div>
        </div>

        {/* Blog Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {/* Post 1 */}
          <Link href="/blogs/ung-dung-ai" className="group flex flex-col gap-4">
            <div className="relative overflow-hidden rounded-xl aspect-video bg-slate-800">
              <div
                className="absolute inset-0 bg-center bg-cover transition-transform duration-500 group-hover:scale-110"
                data-alt="Data analytics dashboard on a screen"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAUzQpjsMKe-tNqHY-VYvz-fCt5GvxbY74Hj0AyYoO2QHPRo3JH9VcfKm1Ux6Iuv1igF-0EWPAwQ_MGVubIvWi3Gjk1qTav6vIFICGjjwIvYMfRH8yu3Oqxv-_RirLncGuoKgQstmZ76kz3jr0fKS-RnbmgHJ6ekgvS33bbo-D_kuecjoNkX5qeLcvyBzPJkerecdDIR2jVS8YvjzODjVO-eOWysjzI_jzFheC3HCCGhREwHACnqWl_K-t1IbEHfScnl9tiyyrsglBT")'
                }}
              ></div>
              <div className="absolute top-4 left-4">
                <span className="rounded bg-slate-900/80 backdrop-blur px-2 py-1 text-[10px] font-bold text-white uppercase tracking-widest">
                  AI & Data
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold text-slate-100 group-hover:text-primary transition-colors">
                Applying AI in enterprise process automation
              </h3>
              <p className="text-slate-400 text-sm line-clamp-2">
                How AI is reshaping the way SaaS businesses operate and cutting
                personnel costs.
              </p>
              <div className="mt-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="size-6 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-[10px] font-bold text-primary">
                    IV
                  </div>
                  <span className="text-xs text-slate-500 font-medium">
                    By Intervision
                  </span>
                </div>
                <span className="text-xs text-slate-500 italic">
                  8 min read
                </span>
              </div>
            </div>
          </Link>

          {/* Post 2 */}
          <Link
            className="group flex flex-col gap-4"
            href="/blogs/toi-uu-hoa-lead-gen"
          >
            <div className="relative overflow-hidden rounded-xl aspect-video bg-slate-800">
              <div
                className="absolute inset-0 bg-center bg-cover transition-transform duration-500 group-hover:scale-110"
                data-alt="Marketing growth chart with blue lines"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC1j_orQ2wVnRQriBOdyEi_sKgBOvhemTCjAgEZD-zDgknP-pq4yI0gnkUyqHRYGxMmbaBybQSKC92HIBqnLUkWWJA5iqHyKX_V5y7rT-RVK1yqsK9DojoCABooLSAbMzYegiFvjpCmMmaWY4MI1z9PEqCFB5Bja5KRwtRJwEShXiGeFyrkc8XCbU55crlvalhrQ_lt24lWhU2GLyIYTmTPOAI7ofkhsgCZkXMpvBps4Onk27kLo63oDxHRrZ_TLzSCoKsY--YcIL40")'
                }}
              ></div>
              <div className="absolute top-4 left-4">
                <span className="rounded bg-slate-900/80 backdrop-blur px-2 py-1 text-[10px] font-bold text-white uppercase tracking-widest">
                  Lead Gen
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold text-slate-100 group-hover:text-primary transition-colors">
                Optimizing Lead Gen conversion rates for B2B
              </h3>
              <p className="text-slate-400 text-sm line-clamp-2">
                10 strategies to attract high-quality leads without increasing
                your ad budget.
              </p>
              <div className="mt-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="size-6 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-[10px] font-bold text-primary">
                    IV
                  </div>
                  <span className="text-xs text-slate-500 font-medium">
                    By Intervision
                  </span>
                </div>
                <span className="text-xs text-slate-500 italic">
                  12 min read
                </span>
              </div>
            </div>
          </Link>

          {/* Post 3 */}
          <Link
            className="group flex flex-col gap-4"
            href="/blogs/xu-huong-marketing"
          >
            <div className="relative overflow-hidden rounded-xl aspect-video bg-slate-800">
              <div
                className="absolute inset-0 bg-center bg-cover transition-transform duration-500 group-hover:scale-110"
                data-alt="Modern office meeting with digital strategy"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBVfQUPfovJMiGRdR4CDJvqYNkItVXvpf83TjNsnEAKA-DWQatoSKSvPaz4XPuqIyDM4y_dQ6FsBDgqA_IkGjkHOFpvcMuBAqzST4RC0jtiP7S1t1pSXPnnX2hgIWOcQUDOA9mYn_uaO-9rs_OEzsJw12pNDc6aoyvcrHYFExN4fto_mVtc_Dfb9HvvcCK7-pmXUBL73qfXSy-Igz4wYZ-HvbmbG0DwamgXwIWpVPPCfdjDPHx6xa_nhEZTOP1tVoT5DhEAQ_xQJafz")'
                }}
              ></div>
              <div className="absolute top-4 left-4">
                <span className="rounded bg-slate-900/80 backdrop-blur px-2 py-1 text-[10px] font-bold text-white uppercase tracking-widest">
                  Marketing
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold text-slate-100 group-hover:text-primary transition-colors">
                Marketing Trends 2024: Personalization is the key
              </h3>
              <p className="text-slate-400 text-sm line-clamp-2">
                Why building personalized customer experiences will determine
                your brand's success.
              </p>
              <div className="mt-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="size-6 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-[10px] font-bold text-primary">
                    IV
                  </div>
                  <span className="text-xs text-slate-500 font-medium">
                    By Intervision
                  </span>
                </div>
                <span className="text-xs text-slate-500 italic">
                  10 min read
                </span>
              </div>
            </div>
          </Link>

          {/* Post 4 */}
          <Link
            className="group flex flex-col gap-4"
            href="/blogs/xay-dung-he-sinh-thai-saas"
          >
            <div className="relative overflow-hidden rounded-xl aspect-video bg-slate-800">
              <div
                className="absolute inset-0 bg-center bg-cover transition-transform duration-500 group-hover:scale-110"
                data-alt="Laptop showing SaaS performance metrics"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDZ18hTiLEtndKJKmlYKeU_dkXdEF_kw8tQdCy43tdmHHPSAtpSq8eAUQF2Jbn7MtQ3UfxshV3q-E4h4tKQR8MpVdAiLYRPDJe6BrZsajedtP0h2r-glvGCdDTxYQ1REiczKsl_yUmjWAVIlBqnJhOBbN4RA1bayHPKWBI0S9NGWwwQiF3CbDMiXr17c4TOQxNs7YTkMqdzG--WrE144yMzWjxipezJwfhoz8LtiMQKP8_n18ypayvO4pw6WqdmE95HxX2UpiqN-3Ma")'
                }}
              ></div>
              <div className="absolute top-4 left-4">
                <span className="rounded bg-slate-900/80 backdrop-blur px-2 py-1 text-[10px] font-bold text-white uppercase tracking-widest">
                  SaaS
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold text-slate-100 group-hover:text-primary transition-colors">
                Building a sustainable SaaS ecosystem
              </h3>
              <p className="text-slate-400 text-sm line-clamp-2">
                Product development strategies focused on users and system
                scalability.
              </p>
              <div className="mt-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="size-6 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-[10px] font-bold text-primary">
                    IV
                  </div>
                  <span className="text-xs text-slate-500 font-medium">
                    By Intervision
                  </span>
                </div>
                <span className="text-xs text-slate-500 italic">
                  15 min read
                </span>
              </div>
            </div>
          </Link>

          {/* Post 5 */}
          <Link
            className="group flex flex-col gap-4"
            href="/blogs/tuong-lai-cua-cloud-computing"
          >
            <div className="relative overflow-hidden rounded-xl aspect-video bg-slate-800">
              <div
                className="absolute inset-0 bg-center bg-cover transition-transform duration-500 group-hover:scale-110"
                data-alt="High tech blue server room"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAAugkEMBIeSuBf3vGX_dypJLfWJlvz8pysb-_CRFb6zm9v4uy3P4pBh_ktYcc9beEt7owJefD4zDBTF_ojhgFEtYRuEbM9jy_m8iEVFTZHPC-1OouynkyRzSg7Jz23tCpX2bxaOOMtj_b2b15BAHhd7hXGFuJ8X8hfuVNcvKnuNL6SsFRo555yiQllZJPrL81iU8dKBev0r4y8euKut-fwez9LnzPLgCbY8O23wS7ZN9zuiOwiAHjeuE8pJA4zfKcTpmKckZAj-Q0N")'
                }}
              ></div>
              <div className="absolute top-4 left-4">
                <span className="rounded bg-slate-900/80 backdrop-blur px-2 py-1 text-[10px] font-bold text-white uppercase tracking-widest">
                  Cloud
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold text-slate-100 group-hover:text-primary transition-colors">
                The Future of Cloud Computing in Marketing
              </h3>
              <p className="text-slate-400 text-sm line-clamp-2">
                How cloud storage is helping large marketing campaigns process
                data in real-time.
              </p>
              <div className="mt-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="size-6 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-[10px] font-bold text-primary">
                    IV
                  </div>
                  <span className="text-xs text-slate-500 font-medium">
                    By Intervision
                  </span>
                </div>
                <span className="text-xs text-slate-500 italic">
                  9 min read
                </span>
              </div>
            </div>
          </Link>

          {/* Post 6 */}
          <Link
            className="group flex flex-col gap-4"
            href="/blogs/bao-mat-du-lieu"
          >
            <div className="relative overflow-hidden rounded-xl aspect-video bg-slate-800">
              <div
                className="absolute inset-0 bg-center bg-cover transition-transform duration-500 group-hover:scale-110"
                data-alt="Cybersecurity blue digital lock"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDGhBnA1fIVvtvQw-lMMuvKNRd9vPyvcjFcfwWLlAsqvlmNrGZk-tDJkZfq_8oBV42kDJOXrxht5ircuPx8PGPUGQKL8XTpw9y1c1aChXpIjGY5_UF_uTCT12jIi_zXxeKdI771V9VXntAQkffmeQ7Kv5yu7v5-iwAQrU_LsGheFIAUjex8v9Tr7tiPRi1UQd57-jyTvME7_hE3ngke8R3lo2_5S59QEuHy7SmrrhETPL8rdTGrLqUV03PSEGByZ99kCoVHA3XbU1Lg")'
                }}
              ></div>
              <div className="absolute top-4 left-4">
                <span className="rounded bg-slate-900/80 backdrop-blur px-2 py-1 text-[10px] font-bold text-white uppercase tracking-widest">
                  Security
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold text-slate-100 group-hover:text-primary transition-colors">
                Customer Data Security in the Digital Age
              </h3>
              <p className="text-slate-400 text-sm line-clamp-2">
                Mandatory security standards that every marketing platform must
                follow to retain customers.
              </p>
              <div className="mt-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="size-6 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-[10px] font-bold text-primary">
                    IV
                  </div>
                  <span className="text-xs text-slate-500 font-medium">
                    By Intervision
                  </span>
                </div>
                <span className="text-xs text-slate-500 italic">
                  11 min read
                </span>
              </div>
            </div>
          </Link>
        </section>
      </main>

      <CTA />
    </div>
  )
}
