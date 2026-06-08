import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import Image from "next/image";


const alakritiDays = [
  {
    day: "Day 01",
    title: "Inauguration & Cultural Parade",
    image: "/events/alakriti-day1.jpg",
    desc: "The grand opening ceremony with lamp lighting, welcome addresses by the Director, and a spectacular cultural parade showcasing state traditions.",
  },
  {
    day: "Day 02",
    title: "Competitions & Talent Showcase",
    image: "/events/alakriti-day2.jpg",
    desc: "Inter-college competitions spanning dance, debate, fine arts, and technical events with participants from across Madhya Pradesh.",
  },
  {
    day: "Day 03",
    title: "Music Night — Md Danish Live",
    image: "/events/alakriti-day3.jpg",
    desc: "The electrifying finale — a live concert by renowned artist Md Danish that kept thousands of students on their feet till midnight.",
    featured: true,
  },
];

const alakritiGallery = [
  "/images/md-danish.jpeg",
  "/images/alakriti-gallery-2.jpeg",
  "/images/alakriti-gallery-4.jpeg",
  "/images/alakriti-gallery-1.jpeg",
];

const otherEvents = [
  {
    id: "srijan",
    name: "Srijan",
    subtitle: "Fresher's Welcome Party",
    year: "2026",
    coverImage: "/images/srijan.jpg",
    description:
      "Srijan is VSGOI's warm and vibrant welcome for every incoming batch. Seniors roll out the red carpet for freshers with games, performances, crown ceremonies, and the iconic Best Fresher title — an unforgettable first memory of college life.",
    accent: "from-violet-700 to-pink-500",
    border: "border-violet-400",
    badgeBg: "bg-violet-600",
    tagBg: "bg-violet-50 text-violet-800",
    highlights: [
      { label: "Freshers", value: "300+" },
      { label: "Performances", value: "20+" },
      { label: "Crown Winners", value: "4" },
    ],
    tags: ["Welcome Ceremony", "Best Fresher", "Dance Night", "Games"],
    gallery: ["/images/srijan1.jpg", "/images/srijan2.jpg", "/images/srijan3.jpg"],
  },
  {
    id: "adios",
    name: "Adios",
    subtitle: "Farewell Ceremony",
    year: "2026",
    coverImage: "/images/adios.jpg",
    description:
      "Adios is a heartfelt send-off to the graduating batch — a tearful yet joyous evening filled with memories, awards, senior speeches, and the bittersweet joy of a new chapter beginning. A celebration of everything college life means.",
    accent: "from-amber-600 to-rose-500",
    border: "border-amber-400",
    badgeBg: "bg-amber-500",
    tagBg: "bg-amber-50 text-amber-800",
    highlights: [
      { label: "Graduates", value: "250+" },
      { label: "Awards", value: "15+" },
      { label: "Memories", value: "∞" },
    ],
    tags: ["Farewell Night", "Senior Awards", "Ramp Walk", "Speeches"],
    gallery: ["/events/adios-1.jpg", "/events/adios-2.jpg", "/events/adios-3.jpg"],
  },
];


export default function EventsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0a0a0a] font-sans text-white">

        {/* ════════════════════════════════════════════
          HERO — ALAKRITI
      ════════════════════════════════════════════ */}
        <section className="relative min-h-screen overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0">
            <Image
              src="/events/alakriti-hero.jpg"
              alt="Alakriti 2026"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0a0a0a]" />
          </div>

          {/* Hero content */}
          <div className="relative flex min-h-screen flex-col items-center justify-center px-6 pb-24 pt-32 text-center">
            <span className="mb-4 rounded-full border border-yellow-400/40 bg-yellow-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[3px] text-yellow-300">
              Annual Function · 2026
            </span>
            <h1 className="mb-2 font-serif text-6xl font-bold leading-none tracking-tight text-white md:text-8xl">
              Alakriti
            </h1>
            <p className="mb-6 font-serif text-xl font-medium italic text-yellow-300 md:text-2xl">
              "Exhilaration Unlimited"
            </p>
            <p className="mx-auto max-w-lg text-sm leading-relaxed text-gray-300">
              VSGOI's grandest celebration of talent, culture, and spirit — three
              days of electrifying performances, competitions, and memories that
              last a lifetime.
            </p>

            {/* Stat pills */}
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              {[
                ["3", "Epic Days"],
                ["50+", "Events"],
                ["5000+", "Attendees"],
                ["Md Danish", "Music Night"],
              ].map(([val, lbl]) => (
                <div
                  key={lbl}
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-sm"
                >
                  <p className="font-serif text-xl font-bold text-white">{val}</p>
                  <p className="text-xs text-gray-400">{lbl}</p>
                </div>
              ))}
            </div>

            {/* Scroll cue */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-gray-500">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
          ALAKRITI — 3 DAYS TIMELINE
      ════════════════════════════════════════════ */}
        {/* <section className="mx-auto max-w-6xl px-4 py-20">
          <div className="mb-12 text-center">
            <p className="mb-2 text-xs uppercase tracking-[4px] text-yellow-400">
              Alakriti 2026
            </p>
            <h2 className="font-serif text-4xl font-bold text-white">
              Three Days of Magic
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {alakritiDays.map((d) => (
              <div
                key={d.day}
                className={`group relative overflow-hidden rounded-2xl border transition-transform duration-300 hover:-translate-y-1 ${d.featured
                  ? "border-yellow-400/60 shadow-lg shadow-yellow-500/10"
                  : "border-white/10"
                  }`}
              >

                <div className="relative h-56 w-full">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  {d.featured && (
                    <div className="absolute right-3 top-3 rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold text-black">
                      ⭐ Featured
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4">
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white backdrop-blur-sm">
                      {d.day}
                    </span>
                  </div>
                </div>
                {/* Text */}
                {/* <div className="bg-[#111] p-5">
                  <h3 className="mb-2 font-serif text-lg font-semibold text-white">
                    {d.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-400">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section> */} 

        

        {/* ════════════════════════════════════════════
          MD DANISH — MUSIC NIGHT SPOTLIGHT
      ════════════════════════════════════════════ */}
        <section className="relative overflow-hidden bg-gradient-to-br from-yellow-950 via-[#1a1200] to-[#0a0a0a] px-4 py-24">
          <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-yellow-500/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />

          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col items-center gap-12 lg:flex-row">
              {/* Artist image */}
              <div className="relative w-full shrink-0 lg:w-2/5">
                <div className="relative h-[420px] w-full overflow-hidden rounded-2xl border border-yellow-400/20">
                  <Image
                    src="/images/md-danish.jpeg"
                    alt="Md Danish performing at Alakriti Music Night"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                {/* floating label */}
                <div className="absolute -bottom-4 -right-4 rounded-2xl border border-yellow-400/30 bg-black/80 p-4 backdrop-blur-md">
                  <p className="text-xs text-gray-400">Live Performance</p>
                  <p className="font-serif text-lg font-bold text-yellow-300">
                    Md Danish
                  </p>
                  <p className="text-xs text-gray-400">Alakriti 2026 · Day 3</p>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <span className="mb-4 inline-block rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-yellow-300">
                  Music Night · Day 3
                </span>
                <h2 className="mb-4 font-serif text-4xl font-bold leading-tight text-white md:text-5xl">
                  The Night That Shook VSGOI
                </h2>
                <p className="mb-6 text-sm leading-relaxed text-gray-400">
                  Alakriti 2026 reached its thunderous peak when{" "}
                  <span className="font-semibold text-yellow-300">Md Danish</span>{" "}
                  took the stage on Day 3's Music Night. The entire campus turned
                  into a sea of lights and energy as thousands of students sang,
                  danced, and made memories they'll carry forever.
                </p>
                <p className="mb-8 text-sm leading-relaxed text-gray-400">
                  From soulful melodies to high-energy bangers, the performance
                  was a perfect finale to three phenomenal days of Alakriti — a
                  testament to VSGOI's commitment to giving students an experience
                  beyond academics.
                </p>

                {/* highlights row */}
                <div className="flex flex-wrap gap-4">
                  {[
                    ["🎤", "Live Concert"],
                    ["🌙", "Music Night"],
                    ["🔥", "Day 3 Finale"],
                    ["5000+", "In Attendance"],
                  ].map(([icon, lbl]) => (
                    <div
                      key={lbl}
                      className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center"
                    >
                      <p className="text-xl">{icon}</p>
                      <p className="mt-1 text-xs text-gray-300">{lbl}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════════
          ALAKRITI GALLERY
      ════════════════════════════════════════════ */}
        <section className="mx-auto max-w-6xl px-4 py-20">
          <div className="mb-10 flex items-center justify-between">
            <h2 className="font-serif text-3xl font-bold text-white">
              Alakriti Gallery
            </h2>
            <span className="rounded-full border border-yellow-400/30 px-4 py-1.5 text-xs text-yellow-400">
              2026 Edition
            </span>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
            {alakritiGallery.map((img, i) => (
              <div
                key={i}
                className={`relative overflow-hidden rounded-2xl ${i === 0 ? "col-span-2 row-span-2 h-80" : "h-36"
                  }`}
              >
                <Image
                  src={img}
                  alt={`Alakriti 2026 gallery ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </section>

        {/* ════════════════════════════════════════════
          SRIJAN & ADIOS
      ════════════════════════════════════════════ */}
        <section className="mx-auto max-w-6xl space-y-24 px-4 py-10 pb-28">
          <div className="mb-4 text-center">
            <p className="mb-2 text-xs uppercase tracking-[4px] text-gray-500">
              More Events
            </p>
            <h2 className="font-serif text-4xl font-bold text-white">
              Every Beginning & Every Goodbye
            </h2>
          </div>

          {otherEvents.map((ev, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={ev.id}
                id={ev.id}
                className={`flex flex-col gap-10 lg:flex-row ${!isEven ? "lg:flex-row-reverse" : ""
                  }`}
              >
                {/* Images */}
                <div className="flex flex-col gap-3 lg:w-1/2">
                  <div className="relative h-72 w-full overflow-hidden rounded-2xl">
                    <Image
                      src={ev.coverImage}
                      alt={ev.name}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${ev.accent} opacity-50`}
                    />
                    <div className="absolute bottom-5 left-5">
                      <p className="font-serif text-3xl font-bold text-white drop-shadow-lg">
                        {ev.name}
                      </p>
                      <p className="text-sm text-white/80">{ev.subtitle}</p>
                    </div>
                    <div
                      className={`absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-semibold text-white ${ev.badgeBg}`}
                    >
                      {ev.year}
                    </div>
                  </div>
                  {/* gallery row */}
                  <div className="grid grid-cols-3 gap-3">
                    {ev.gallery.map((img, i) => (
                      <div
                        key={i}
                        className="relative h-24 overflow-hidden rounded-xl"
                      >
                        <Image
                          src={img}
                          alt={`${ev.name} moment ${i + 1}`}
                          fill
                          className="object-cover transition-transform duration-300 hover:scale-110"
                          sizes="16vw"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Info */}
                <div className="flex flex-col justify-center lg:w-1/2">
                  <span
                    className={`mb-3 w-fit rounded-full px-3 py-1 text-xs font-semibold ${ev.tagBg}`}
                  >
                    {ev.subtitle}
                  </span>
                  <h2 className="mb-3 font-serif text-4xl font-bold text-white">
                    {ev.name}
                  </h2>
                  <p className="mb-6 text-sm leading-relaxed text-gray-400">
                    {ev.description}
                  </p>

                  {/* Stats */}
                  <div className="mb-6 grid grid-cols-3 gap-3">
                    {ev.highlights.map((h) => (
                      <div
                        key={h.label}
                        className="rounded-xl border border-white/10 bg-white/5 p-4 text-center"
                      >
                        <p className="font-serif text-2xl font-bold text-white">
                          {h.value}
                        </p>
                        <p className="mt-1 text-xs text-gray-400">{h.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {ev.tags.map((t) => (
                      <span
                        key={t}
                        className={`rounded-full px-3 py-1 text-xs font-medium ${ev.tagBg}`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </section>

        {/* ════════════════════════════════════════════
          FOOTER
      ════════════════════════════════════════════ */}
        <footer className="border-t border-white/10 bg-black py-8 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} VSGOI — Where every event becomes a
          memory
        </footer>
      </main>
      <Footer />
    </>
  );
}