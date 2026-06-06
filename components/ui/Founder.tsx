export default function Founder() {
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
            Our Founder
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
                  src="/images/ragendra-swarup.jpg"
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
                Shri Ragendra Swarup
              </h2>
              <time
                dateTime="1956-04-22/2002-05-19"
                className="mt-1.5 block font-mono text-[11px] tracking-widest text-slate-400"
              >
                22 April 1956 &mdash; 19 May 2002
              </time>

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
                VSGOI shall always endeavour to make his dreams come true.
              </p>
            </div>

            {/* Bio paragraphs */}
            <div className="flex flex-col gap-4 text-[15px] leading-[1.8] text-gray-600">
              <p>
                Shri Ragendra Swarup was an eminent and towering figure in the educational sphere who dedicated
                his life to the noble cause of spreading quality education — establishing premier university and
                pre-university level institutions throughout the state of Uttar Pradesh under the banner of the{" "}
                <strong className="font-semibold text-[#1a2744]">Dr. Virendra Swarup Memorial Trust</strong>.
              </p>
              <p>
                Being a philanthropist, his genuine concern and magnanimity towards the masses made him dear to
                all hearts. His name and commendable deeds shall be cherished in high spirits by one and all.
              </p>
            </div>

          </div>
        </div>

        {/* Bottom eternal tribute strip */}
        <div className="mt-6 flex items-center justify-center gap-3 rounded-xl border border-amber-200 bg-amber-50 px-6 py-4">
          <span className="h-px w-8 bg-amber-400" aria-hidden="true" />
          <p className="text-center font-serif text-sm italic text-amber-700">
            A visionary who turned the dream of quality education into a living reality for thousands.
          </p>
          <span className="h-px w-8 bg-amber-400" aria-hidden="true" />
        </div>

      </div>
    </section>
  )
}
