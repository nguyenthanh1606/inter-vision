import Link from 'next/link';
import { ChevronRight, CalendarDays, Clock, Share2, Link as LinkIcon, Bookmark, Rocket } from 'lucide-react';
import { CTA } from '../../_components/CTA';

export default function BlogDetailPage() {
    return (
        <div className="relative flex min-h-screen flex-col overflow-x-hidden bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 pt-24">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full flex-1">
                {/* Breadcrumbs */}
                <nav className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-8">
                    <Link className="hover:text-primary" href="/">Home</Link>
                    <ChevronRight size={14} />
                    <Link className="hover:text-primary" href="/blogs">Blog</Link>
                    <ChevronRight size={14} />
                    <span className="text-slate-900 dark:text-slate-200 font-medium">Article Detail</span>
                </nav>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Article Content */}
                    <article className="lg:col-span-8">
                        {/* Article Header */}
                        <header className="mb-8">
                            <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">AI Technology</span>
                            <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight mb-6">
                                The Future of Artificial Intelligence in Graphic Design and Digital Art
                            </h1>
                            <div className="flex flex-wrap items-center gap-6 py-6 border-y border-slate-200 dark:border-slate-800">
                                <div className="flex items-center gap-3">
                                    <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center overflow-hidden border-2 border-primary">
                                        <img alt="Avatar" className="w-full h-full object-cover" data-alt="Portrait photo of a creative professional man" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNyVCcPNImSpGELay52Z8QO2suYTvlvhIV3d05WHBIPXZ-__7SAQbwhDE8sS71Mt11gAU7JHgezTl_vOtFkGDwOzPf8TyYhe6AE1Q1C7aB0BxxQHVFFj4YD2GQL2nlLKTAgYz2HZ608Ia2WmSWm3LlzstZ8Tx_piEif0kY8zOOi28gmlCiHgiSF2BndsbgNPnHBptHMkLg039rtjq_WtUvaYQuc6iB_8cvDui2p805jg9Gs2uZW7NOeNL6aPWs-vaIlrArdFu6YhSk" />
                                    </div>
                                    <div>
                                        <p className="text-slate-900 dark:text-white font-bold text-sm">Nguyen Van A</p>
                                        <p className="text-slate-500 text-xs tracking-wide">Design Expert</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 text-slate-500 dark:text-slate-400 text-sm">
                                    <div className="flex items-center gap-1">
                                        <CalendarDays size={18} />
                                        <span>October 15, 2023</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Clock size={18} />
                                        <span>8 min read</span>
                                    </div>
                                </div>
                            </div>
                        </header>

                        {/* Featured Image */}
                        <div className="rounded-xl overflow-hidden mb-10 shadow-2xl shadow-primary/10">
                            <img alt="AI art" className="w-full h-auto object-cover max-h-[500px]" data-alt="Futuristic digital art representing artificial intelligence neural networks" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzs3dY0RR0sOlwBCxf0rgzrc6569Nc-N0hEwgQaCEPguv08f1ymJSUX6ZH3jwWKOgbTYJj-FjokI58BHoA_aB3fHp9yjsazwyyEyP7d3ZogKwEteoD_dtfRZRoQUlRDx7GaGGuuU1zGR9DIrt6w9oMNslyoP0fZmzNSE8w1QIFBL63SR5jkpGQsK129NiQruyyEKQC5HwrzYEuULHYrO2QM-MMl-t18sM21OgghN5oinWOIvC6G27EDfhQDzDjSU-xSQrXCUhnVuSl" />
                        </div>

                        {/* Article Body */}
                        <div className="prose prose-slate dark:prose-invert max-w-none space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed text-lg">
                            <p className="text-xl font-medium text-slate-900 dark:text-slate-100 italic border-l-4 border-primary pl-6 py-2 bg-primary/5 rounded-r-lg">
                                In the past decade, we have witnessed the explosion of artificial intelligence (AI) in almost every field. However, graphic design is experiencing the most profound revolution.
                            </p>
                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white pt-4">The Rise of Generative AI Tools</h2>
                            <p>
                                From Midjourney to DALL-E 3, text-to-image tools are no longer a distant concept. These tools allow designers to quickly sketch ideas and create complex layouts in seconds instead of hours. This doesn't mean AI will replace humans, but rather it serves as a powerful collaborator to optimize the workflow.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-8">
                                <img alt="AI Work" className="rounded-lg h-64 w-full object-cover" data-alt="Close up of a digital designer working with AI software" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcdEuP4MbOSsTDHWk07AyDBa7o6iv4tehXgHbVqCAS-ac9s2Geu8VOHcJ7wuGSEJWzCPVSsFbRcQls2O3gQeFNbAw7g52wm3nwmMcVtOW5Qs3w3hykggeA0MDN7LKRBGhPLVWI3aNRTACHxTxYttDB8wXvKue7XmcuXYaMvbvhXoLMQtiU8nXmOs2MbCXO4gSi69NpcaPbxBBSEYR4VtzZNABC_R0WrT6z-e-0d9oslZoHuljwx0rgtjxAjaQlqbzftJYUSXb5cSsB" />
                                <img alt="Cyberpunk design" className="rounded-lg h-64 w-full object-cover" data-alt="Neon blue glowing circuitry and digital data interface" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjABPY5aNRFcYSVI689NB2oQxk6FdDmvDD59gJw5g2kyLsUnaQs9_FwiWmkiGNbvq0JTlwbx2Sq8zl--9tsRqS0-XUMQW9g6rRhYIvMBXEKjGG7VF_3x_XeCHbnJo6w2GcRzuvUYH9Gkg4V5bS1JGh198oy7CQ9LRwqSvel77r7yXrNHoowQRF3hgZK8hUaJHGvv2cBhObCv9_fg0lByy40UGoCSaYVp4WjRzG8iLHX9y6f7KVmEKFqy78O_P7WyQ1zB1LuSr7MRgE" />
                            </div>

                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">Why shouldn't we fear AI?</h3>
                            <p>
                                Instead of worrying about job losses, modern designers are learning how to "train" AI. The use of prompts has become a valuable new skill. A good designer is now someone who knows how to combine core creative thinking with the high-speed processing capabilities of machines.
                            </p>

                            <blockquote className="my-10 border-l-4 border-primary pl-6 italic text-2xl font-light text-slate-800 dark:text-slate-200">
                                "AI won't take your job, but a person using AI might."
                            </blockquote>

                            <h2 className="text-2xl font-bold text-slate-900 dark:text-white pt-4">The Road Ahead</h2>
                            <p>
                                We are heading towards an era where the boundary between real and virtual blurs. Augmented Reality (AR) and Virtual Reality (VR) technologies combined with AI will create unprecedented visual experiences. Intervision is proud to be a pioneer in applying these technologies to projects for global partners.
                            </p>
                        </div>

                        {/* Tags & Share */}
                        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-wrap justify-between items-center gap-6">
                            <div className="flex items-center gap-3">
                                <span className="text-sm font-bold text-slate-500 uppercase">Tags:</span>
                                <div className="flex flex-wrap gap-2">
                                    <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-sm hover:text-primary cursor-pointer">AI Design</span>
                                    <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-sm hover:text-primary cursor-pointer">Future Tech</span>
                                    <span className="px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-lg text-sm hover:text-primary cursor-pointer">Digital Arts</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="text-sm font-bold text-slate-500 uppercase">Share:</span>
                                <div className="flex gap-2">
                                    <button className="size-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-primary hover:text-white transition-all">
                                        <Share2 size={18} />
                                    </button>
                                    <button className="size-10 flex items-center justify-center rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-primary hover:text-white transition-all">
                                        <LinkIcon size={18} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* Sidebar */}
                    <aside className="lg:col-span-4 space-y-10">
                        {/* Related Posts */}
                        <div className="bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800">
                            <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                                <Bookmark size={20} className="text-primary" />
                                Related Articles
                            </h4>
                            <div className="space-y-6">
                                <Link className="group block" href="/blogs/cach-toi-uu-hoa-ui-ux">
                                    <div className="flex gap-4">
                                        <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                                            <img alt="Tech" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" data-alt="Close up of high tech robotic arm moving components" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBRyb_-lNlEK9_88wbWboD4vtdla3pejEtgcidxmcfeocIq-YV5TNheM2BOw6RWMCAPEedeadgiRd8IdyFWnKDNaCWPfk0V3aIHqmYCYlwK2EPXDk2YnPy-wZvzlSBxsI4YUz5093fUNrtO7uB7KRktVccX5Qec_DLnSrG1cJGV2RYtk9Q2uyEGZBnN86i9-UU7zFxAzLwfhSiPN5SO1y_SYNiNfqFVY5SeonG-3jerATJaBK5mjURQE9cPQKBnHCZRPN3t6EWFkNe" />
                                        </div>
                                        <div>
                                            <h5 className="text-sm font-bold text-slate-900 dark:text-slate-100 group-hover:text-primary transition-colors line-clamp-2">How to optimize UI/UX with real user data</h5>
                                            <p className="text-xs text-slate-500 mt-2">October 12, 2023</p>
                                        </div>
                                    </div>
                                </Link>
                                <Link className="group block" href="/blogs/xu-huong-phat-trien-web">
                                    <div className="flex gap-4">
                                        <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                                            <img alt="Code" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" data-alt="Macbook screen showing React code with colorful syntax highlighting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCvyiUPdVk1DPkjc_22_rwHyuGgT6TBRbRDyKNWL69sFwc0yqur6n8QE6kbP49wNpCr0XFc4Rnr28W_DgzARLIlGQFUtwYdnQvX7ChH1u-sx1KjirucIKXNY7YekVec3IJ8XE1yyRr6DA0X5U_uO-lwJI-vMIq26DyvUr437PYBF7-aOWEwDZNGscFZB5i2HTMmBLHFGfKlIrhV3EkzjaF-huqS1Mp673OIMoDtozSxR6YkRgFGnfkl4yHeAL5Hc5Phs5bOorciXTxa" />
                                        </div>
                                        <div>
                                            <h5 className="text-sm font-bold text-slate-900 dark:text-slate-100 group-hover:text-primary transition-colors line-clamp-2">What's special about web development trends in 2024?</h5>
                                            <p className="text-xs text-slate-500 mt-2">October 10, 2023</p>
                                        </div>
                                    </div>
                                </Link>
                                <Link className="group block" href="/blogs/phan-tich-du-lieu">
                                    <div className="flex gap-4">
                                        <div className="w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                                            <img alt="Graph" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" data-alt="Financial data charts and analytics displayed on a screen" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAUhOeUxB-Y16rg0MoTsxxHVHMz94wGSGCNZVu_qQTSZYW04KCL3psfD6a7rLW_gFEeNToSrY4XBzazzvVI1NBXfTGtSaPz_AXM_0Ul66E_4jphTGdtH8_ZcCdNXDFIQK55pgBS2WTEzkwqtV3YKJqPkqZ9tIIrJjlwqocHqK6gDs2YUh7sOAWglhAqtRhi13Narsg_xEv_6vNI3fcSvp52QqFclvZr3yntNT1NvEwSZoHDnmXSkjB8amfC0tPCx4vCn9CgKnC_r2gC" />
                                        </div>
                                        <div>
                                            <h5 className="text-sm font-bold text-slate-900 dark:text-slate-100 group-hover:text-primary transition-colors line-clamp-2">Data Analysis: The key to success for digital enterprises</h5>
                                            <p className="text-xs text-slate-500 mt-2">October 08, 2023</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        {/* Ad/Banner Section */}
                        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary to-blue-800 p-8 text-white">
                            <div className="relative z-10">
                                <h4 className="text-xl font-bold mb-4">Need a breakthrough design solution?</h4>
                                <p className="text-sm text-blue-100 mb-6">Contact our expert team for a free consultation today.</p>
                                <button className="w-full py-3 bg-white text-primary font-bold rounded-lg hover:bg-blue-50 transition-colors">Contact now</button>
                            </div>
                            <div className="absolute -bottom-10 -right-10 opacity-20">
                                <Rocket size={150} />
                            </div>
                        </div>

                        {/* Categories */}
                        <div className="p-6 border border-slate-200 dark:border-slate-800 rounded-xl">
                            <h4 className="text-lg font-bold mb-4">Categories</h4>
                            <ul className="space-y-3">
                                <li className="flex items-center justify-between text-sm group cursor-pointer">
                                    <span className="text-slate-600 dark:text-slate-400 group-hover:text-primary">Technology</span>
                                    <span className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 rounded text-xs">12</span>
                                </li>
                                <li className="flex items-center justify-between text-sm group cursor-pointer">
                                    <span className="text-slate-600 dark:text-slate-400 group-hover:text-primary">Design</span>
                                    <span className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 rounded text-xs">25</span>
                                </li>
                                <li className="flex items-center justify-between text-sm group cursor-pointer">
                                    <span className="text-slate-600 dark:text-slate-400 group-hover:text-primary">Marketing</span>
                                    <span className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 rounded text-xs">18</span>
                                </li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </main>

            <CTA />
        </div>
    );
}
