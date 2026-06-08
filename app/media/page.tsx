const blogs = [
  {
    slug: "alakriti-2026-recap",
    category: "Annual Function",
    categoryColor: "bg-yellow-400/15 text-yellow-300 border-yellow-400/30",
    featured: true,
    date: "March 15, 2026",
    readTime: "5 min read",
    image: "/media/alakriti-2026.jpg",
    headline: "Alakriti 2026 — Exhilaration Unlimited Took VSGOI by Storm",
    description:
      "Three unforgettable days of music, culture, and competition. Alakriti 2026 shattered all records with 5000+ attendees, 50+ events, and a grand finale that left every student speechless. Here's a full recap of the most awaited annual function in VSGOI history.",
    author: "Editorial Team",
    authorImage: "/media/author-editorial.jpg",
  },
  {
    slug: "md-danish-music-night",
    category: "Music Night",
    categoryColor: "bg-orange-400/15 text-orange-300 border-orange-400/30",
    featured: true,
    date: "March 13, 2026",
    readTime: "3 min read",
    image: "/media/music-night.jpg",
    headline: "Md Danish Sets the Stage Ablaze at Alakriti Music Night",
    description:
      "Day 3 of Alakriti 2026 reached its thunderous peak as Md Danish took the stage for an electric live performance. From soulful melodies to high-energy anthems, the music night was a night the VSGOI campus will never forget.",
    author: "Cultural Club",
    authorImage: "/media/author-cultural.jpg",
  },
  {
    slug: "srijan-2026-fresher-party",
    category: "Fresher Party",
    categoryColor: "bg-violet-400/15 text-violet-300 border-violet-400/30",
    featured: false,
    date: "August 20, 2025",
    readTime: "4 min read",
    image: "/media/srijan-2026.jpg",
    headline: "Srijan 2025 — A Grand Welcome for the New Batch",
    description:
      "The freshers of 2025 were welcomed in the most spectacular style at Srijan. Crown ceremonies, talent showcases, and the iconic Best Fresher title made it a night the new batch will always cherish as their first true college memory.",
    author: "Student Council",
    authorImage: "/media/author-council.jpg",
  },
  {
    slug: "adios-farewell-2026",
    category: "Farewell",
    categoryColor: "bg-rose-400/15 text-rose-300 border-rose-400/30",
    featured: false,
    date: "April 10, 2026",
    readTime: "4 min read",
    image: "/media/adios-2026.jpg",
    headline: "Adios 2026 — A Tearful Yet Joyous Farewell to the Graduating Batch",
    description:
      "With heartfelt speeches, ramp walks, and a room full of bittersweet tears, VSGOI bid farewell to the graduating class of 2026. Adios was not just a ceremony — it was a celebration of four years of friendship, growth, and irreplaceable memories.",
    author: "Editorial Team",
    authorImage: "/media/author-editorial.jpg",
  },
  {
    slug: "sports-trophy-2026",
    category: "Sports",
    categoryColor: "bg-emerald-400/15 text-emerald-300 border-emerald-400/30",
    featured: false,
    date: "February 5, 2026",
    readTime: "3 min read",
    image: "/media/sports-trophy.jpg",
    headline: "VSGOI Clinches Inter-College Cricket Championship 2026",
    description:
      "In a nail-biting final, the VSGOI cricket team defended their title with a stunning 6-wicket victory. The Sports Club's relentless training and team spirit brought the trophy home once again, adding to the institution's proud sporting legacy.",
    author: "Sports Club",
    authorImage: "/media/author-sports.jpg",
  },
  {
    slug: "technical-fest-hackathon",
    category: "Technical",
    categoryColor: "bg-blue-400/15 text-blue-300 border-blue-400/30",
    featured: false,
    date: "January 22, 2026",
    readTime: "4 min read",
    image: "/media/technical-fest.jpg",
    headline: "TechSpark Hackathon 2026 — 48 Hours of Pure Innovation",
    description:
      "Over 30 teams competed in VSGOI's flagship 48-hour hackathon, building solutions in AI, IoT, and sustainability. The Technical Club's biggest event yet drew participants from 12 colleges and produced projects that are already gaining industry attention.",
    author: "Technical Club",
    authorImage: "/media/author-technical.jpg",
  },
  {
    slug: "green-campus-initiative",
    category: "Campus",
    categoryColor: "bg-green-400/15 text-green-300 border-green-400/30",
    featured: false,
    date: "January 5, 2026",
    readTime: "2 min read",
    image: "/media/green-campus.jpg",
    headline: "VSGOI Launches Green Campus Initiative — 500 Trees Planted",
    description:
      "The Social Club led a massive plantation drive across the campus, planting 500 saplings in a single day. The initiative marks VSGOI's commitment to sustainability and eco-conscious campus development as part of the Green Campus programme.",
    author: "Social Club",
    authorImage: "/media/author-social.jpg",
  },
  {
    slug: "cultural-night-dec-2025",
    category: "Cultural",
    categoryColor: "bg-pink-400/15 text-pink-300 border-pink-400/30",
    featured: false,
    date: "December 18, 2025",
    readTime: "3 min read",
    image: "/media/cultural-night.jpg",
    headline: "Cultural Night 2025 — A Dazzling Evening of Art and Performance",
    description:
      "The Cultural Club's annual showcase brought together dancers, musicians, poets, and visual artists for an evening that highlighted the incredible depth of talent within VSGOI. The audience witnessed everything from classical Kathak to contemporary fusion.",
    author: "Cultural Club",
    authorImage: "/media/author-cultural.jpg",
  },
];

const categories = ["All", "Annual Function", "Music Night", "Fresher Party", "Farewell", "Sports", "Technical", "Campus", "Cultural"];


import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import Image from "next/image";

function FeaturedCard({ blog }: { blog: (typeof blogs)[0] }) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#111] transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40">
      <div className="flex flex-col lg:flex-row">
        {/* Image */}
        <div className="relative h-72 w-full shrink-0 overflow-hidden lg:h-auto lg:w-1/2">
          <Image
            src={blog.image}
            alt={blog.headline}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#111] hidden lg:block" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent lg:hidden" />
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col justify-center p-8 lg:p-10">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span
              className={`rounded-full border px-3 py-1 text-xs font-semibold ${blog.categoryColor}`}
            >
              {blog.category}
            </span>
            <span className="rounded-full bg-yellow-400/10 border border-yellow-400/20 px-3 py-1 text-xs font-semibold text-yellow-300">
              ★ Featured
            </span>
          </div>

          <h2 className="mb-4 font-serif text-2xl font-bold leading-tight text-white md:text-3xl">
            {blog.headline}
          </h2>
          <p className="mb-6 text-sm leading-relaxed text-gray-400">
            {blog.description}
          </p>

          {/* Meta */}
          <div className="flex items-center justify-between border-t border-white/10 pt-5">
            <div className="flex items-center gap-3">
              <div className="relative h-8 w-8 overflow-hidden rounded-full bg-white/10">
                <Image
                  src={blog.authorImage}
                  alt={blog.author}
                  fill
                  className="object-cover"
                  sizes="32px"
                />
              </div>
              <div>
                <p className="text-xs font-medium text-white">{blog.author}</p>
                <p className="text-xs text-gray-500">{blog.date}</p>
              </div>
            </div>
            <span className="text-xs text-gray-500">{blog.readTime}</span>
          </div>
        </div>
      </div>
    </article>
  );
}

function BlogCard({ blog }: { blog: (typeof blogs)[0] }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#111] transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-xl hover:shadow-black/40">
      {/* Image */}
      <div className="relative h-52 w-full overflow-hidden">
        <Image
          src={blog.image}
          alt={blog.headline}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111]/80 via-transparent to-transparent" />
        {/* category badge on image */}
        <div className="absolute left-4 top-4">
          <span
            className={`rounded-full border px-3 py-1 text-xs font-semibold backdrop-blur-sm ${blog.categoryColor}`}
          >
            {blog.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-2 flex items-center gap-2 text-xs text-gray-500">
          <span>{blog.date}</span>
          <span>·</span>
          <span>{blog.readTime}</span>
        </div>

        <h3 className="mb-3 font-serif text-lg font-semibold leading-snug text-white transition-colors group-hover:text-yellow-300">
          {blog.headline}
        </h3>
        <p className="mb-5 flex-1 text-sm leading-relaxed text-gray-400 line-clamp-3">
          {blog.description}
        </p>

        {/* Author row */}
        <div className="flex items-center justify-between border-t border-white/10 pt-4">
          <div className="flex items-center gap-2">
            <div className="relative h-7 w-7 overflow-hidden rounded-full bg-white/10">
              <Image
                src={blog.authorImage}
                alt={blog.author}
                fill
                className="object-cover"
                sizes="28px"
              />
            </div>
            <span className="text-xs font-medium text-gray-300">
              {blog.author}
            </span>
          </div>
          <span className="flex items-center gap-1 text-xs font-medium text-yellow-400 transition-all group-hover:gap-2">
            Read more
            <svg className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </span>
        </div>
      </div>
    </article>
  );
}


export default function MediaPage() {
  const featured = blogs.filter((b) => b.featured);
  const regular = blogs.filter((b) => !b.featured);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0a0a0a] font-sans text-white">

        {/* ── Hero ── */}
        <section className="relative overflow-hidden border-b border-white/10 px-6 py-24 text-center">
          <div className="pointer-events-none absolute -left-24 top-0 h-80 w-80 rounded-full bg-yellow-500/10 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />

          <p className="mb-3 text-xs uppercase tracking-[4px] text-gray-500">
            Vindhya Shiksha Gram Online Institute
          </p>
          <h1 className="mb-4 font-serif text-5xl font-bold text-white md:text-6xl">
            Media & Blog
          </h1>
          <p className="mx-auto max-w-lg text-sm leading-relaxed text-gray-400">
            Stories, recaps, and moments from the heart of VSGOI — every event,
            every achievement, every memory captured in words and images.
          </p>

          {/* stats */}
          <div className="mt-10 flex flex-wrap justify-center gap-6">
            {[
              [blogs.length + "+", "Articles"],
              [categories.length - 1 + "", "Categories"],
              ["2026", "Latest Edition"],
            ].map(([val, lbl]) => (
              <div key={lbl} className="text-center">
                <p className="font-serif text-3xl font-bold text-white">{val}</p>
                <p className="mt-1 text-xs text-gray-500">{lbl}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="mx-auto max-w-7xl px-4 py-16">

          {/* ── Category Filter Pills (visual only — add state for interactivity) ── */}
          <div className="mb-14 flex flex-wrap justify-center gap-2">
            {categories.map((cat, i) => (
              <button
                key={cat}
                className={`rounded-full border px-4 py-2 text-xs font-medium transition hover:bg-white/10 ${i === 0
                  ? "border-white/40 bg-white/10 text-white"
                  : "border-white/10 text-gray-400"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* ── Featured Posts ── */}
          {featured.length > 0 && (
            <div className="mb-16">
              <div className="mb-8 flex items-center gap-4">
                <div className="h-px flex-1 bg-white/10" />
                <span className="text-xs font-semibold uppercase tracking-widest text-yellow-400">
                  Featured Stories
                </span>
                <div className="h-px flex-1 bg-white/10" />
              </div>
              <div className="space-y-6">
                {featured.map((blog) => (
                  <FeaturedCard key={blog.slug} blog={blog} />
                ))}
              </div>
            </div>
          )}

          {/* ── All Posts Grid ── */}
          <div className="mb-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">
              All Stories
            </span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {regular.map((blog) => (
              <BlogCard key={blog.slug} blog={blog} />
            ))}
          </div>

          {/* ── Load More (static placeholder) ── */}
          <div className="mt-16 text-center">
            <button className="rounded-full border border-white/20 px-8 py-3 text-sm font-medium text-gray-300 transition hover:bg-white/10 hover:text-white">
              Load More Stories
            </button>
          </div>
        </div>

        {/* ── Footer ── */}
        <footer className="border-t border-white/10 bg-black py-8 text-center text-xs text-gray-500">
          © {new Date().getFullYear()} VSGOI — Every moment deserves to be told
        </footer>
      </main>
      <Footer />
    </>
  );
}