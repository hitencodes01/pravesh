"use server"
export default async function Secretary() {
    return (
        <section aria-labelledby="founder-heading" className="relative overflow-hidden bg-[#f5f3ee] py-20 px-6">

            {/* Subtle decorative bg elements */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-1/2 bg-[radial-gradient(ellipse_at_top_left,_rgba(26,39,68,0.04)_0%,_transparent_60%)]" />
            <div className="pointer-events-none absolute right-0 bottom-0 h-64 w-64 rounded-full bg-amber-400/5 blur-3xl" />

            <div className="relative mx-auto max-w-5xl">

                {/* Section label */}
                <div className="mb-10 flex items-center gap-3">
                    <div className="h-px w-8 bg-amber-500" />
                    <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-600">
                        Secretary
                    </span>
                </div>

                {/* Main card */}
                <div className="grid grid-cols-1 gap-0 overflow-hidden rounded-2xl border border-[#dedad3] bg-white shadow-sm lg:grid-cols-[340px_1fr]">

                    {/* Left — photo panel */}
                    <div className="relative flex flex-col items-center justify-end bg-gradient-to-b from-[#1a2744] to-[#0a1628] px-8 pb-8 pt-12">

                        {/* Decorative hex ring */}
                        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-10">
                            <svg viewBox="0 0 300 300" fill="none" className="h-72 w-72 text-amber-300">
                                <polygon points="150,10 280,80 280,220 150,290 20,220 20,80" stroke="currentColor" strokeWidth="1" fill="none" />
                                <polygon points="150,40 255,95 255,205 150,260 45,205 45,95" stroke="currentColor" strokeWidth="0.7" fill="none" />
                                <polygon points="150,70 230,110 230,190 150,230 70,190 70,110" stroke="currentColor" strokeWidth="0.5" fill="none" />
                            </svg>
                        </div>

                        {/* Photo frame */}
                        <div className="relative z-10 mb-6">
                            <div className="h-48 w-48 overflow-hidden rounded-full border-4 border-amber-400/40 bg-[#1e3a5f] shadow-lg ring-4 ring-[#1a2744]">
                                <img
                                    src="/images/home-joint-secretary.jpg"
                                    alt="Portrait of Shri Ragendra Swarup, Founder"
                                    className="h-full w-full object-cover object-top"
                                    loading="lazy"
                                />
                            </div>
                            {/* Gold dot accent */}
                            <span className="absolute bottom-2 right-2 h-4 w-4 rounded-full border-2 border-[#1a2744] bg-amber-400" aria-hidden="true" />
                        </div>

                        {/* Name & dates */}
                        <div className="relative z-10 text-center">
                            <h2 id="founder-heading" className="font-serif text-xl font-bold leading-snug text-amber-300">
                                Dr. Alakshendra Swarup
                            </h2>
                            <h3 className="text-sm">Sceretary</h3>
                            {/* Thin divider */}
                            <div className="mx-auto my-4 h-px w-12 bg-amber-400/30" />

                            {/* Trust badge */}
                            <p className="text-[11px] leading-relaxed text-slate-500">
                                Dr. Virendra Swarup<br />Memorial Trust
                            </p>
                        </div>
                    </div>

                    {/* Right — content panel */}
                    <div className="flex flex-col justify-between px-8 py-10 sm:px-10">

                        {/* Pull quote */}
                        <div className="mb-8">
                            <svg viewBox="0 0 40 28" fill="none" className="mb-3 h-8 w-8 text-amber-400/50" aria-hidden="true">
                                <path d="M0 28V16C0 7.163 5.373 1.6 16.12 0l1.88 3.2C12.373 4.533 9.333 7.52 8.8 12H16V28H0zm24 0V16C24 7.163 29.373 1.6 40.12 0L42 3.2C36.373 4.533 33.333 7.52 32.8 12H40V28H24z" fill="currentColor" />
                            </svg>
                            <p className="font-serif text-lg font-medium italic leading-relaxed text-[#1a2744] sm:text-xl">
                                I will appreciate your decision to become part of our ongoing mission tp transform passions into careers.
                            </p>
                        </div>

                        {/* Bio paragraphs */}
                        <div className="flex flex-col gap-4 text-[15px] leading-[1.8] text-gray-600">
                            <p>
                                Education today has acquired a flavour and character that's never been before. With bluring of borders and overlapping of clusters, the world has shrunk to emerges as a single huge market place. Desperate consumers, hetrogeneous work forces, converging technologies, information on the fly, market driven structures, Just-in-time supply chain managemnet etc. ...{" "}
                                <strong className="font-semibold text-[#1a2744]">Dr. Virendra Swarup Memorial Trust</strong>.
                            </p>
                            <p>
                                The scenario is as exciting as challenging.The need of the hour, therefore, is creation of competencies through capabilities. VSGOI envisages to do just that, drawing strngths from its unparallel resources of academic expriences, would class state of the art infrastructure, high caliber faculty, industry interface and above all commitment to excellence in education.
                            </p>
                        </div>

                    </div>
                </div>


            </div>
        </section>
    )
};
