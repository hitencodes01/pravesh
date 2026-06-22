import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import Image from "next/image";

const clubs = [
  {
    id: "sports",
    name: "Sports Club",
    tagline: "Sweat. Compete. Conquer.",
    coverImage: "/pravesh/images/club/Sports.webp",
    description:
      "The Sports Club fuels the athlete in every student. From inter-college tournaments to daily fitness sessions, we build champions on and off the field.",
    accent: "from-emerald-700 to-emerald-500",
    border: "border-emerald-500",
    tagBg: "bg-emerald-50 text-emerald-800",
    badgeBg: "bg-emerald-600",
    activities: ["Cricket", "Football", "Athletics", "Kabaddi", "Badminton"],
    highlights: [
      { label: "Members", value: "200+" },
      { label: "Sports", value: "10+" },
      { label: "Trophies", value: "35+" },
    ],

  },
  {
    id: "cultural",
    name: "Cultural Club",
    tagline: "Celebrate. Express. Inspire.",
    coverImage: "/pravesh/images/club/Cultural.jpg",
    description:
      "A stage for performers, artists, and dreamers. The Cultural Club organises festivals, dance events, drama performances, and art exhibitions that bring campus life alive.",
    accent: "from-violet-700 to-violet-500",
    border: "border-violet-500",
    tagBg: "bg-violet-50 text-violet-800",
    badgeBg: "bg-violet-600",
    activities: ["Dance", "Drama", "Music", "Fine Arts", "Poetry"],
    highlights: [
      { label: "Members", value: "180+" },
      { label: "Events/Year", value: "15+" },
      { label: "Art Shows", value: "8+" },
    ],
  },
  {
    id: "technical",
    name: "Technical Club",
    tagline: "Build. Innovate. Launch.",
    coverImage: "/pravesh/images/club/Technical.webp",
    description:
      "Where ideas become prototypes. The Technical Club empowers students through hackathons, coding contests, robotics workshops, and tech talks by industry experts.",
    accent: "from-blue-700 to-blue-500",
    border: "border-blue-500",
    tagBg: "bg-blue-50 text-blue-800",
    badgeBg: "bg-blue-600",
    activities: ["Hackathons", "Robotics", "Web Dev", "AI/ML", "Electronics"],
    highlights: [
      { label: "Members", value: "160+" },
      { label: "Projects", value: "50+" },
      { label: "Workshops", value: "20+" },
    ],
  },
  {
    id: "social",
    name: "Social Club",
    tagline: "Care. Connect. Change.",
    coverImage: "/pravesh/images/club/Social.webp",
    description:
      "Driven by compassion, the Social Club leads community outreach, awareness drives, blood donation camps, and initiatives that create real impact beyond the campus walls.",
    accent: "from-amber-600 to-amber-400",
    border: "border-amber-400",
    tagBg: "bg-amber-50 text-amber-800",
    badgeBg: "bg-amber-500",
    activities: ["Blood Donation", "Tree Plantation", "Awareness Drives", "NSS", "Volunteering"],
    highlights: [
      {
        label: "Members",
        value: "140+"
      },
      { label: "Campaigns", value: "25+" },
      { label: "Lives Touched", value: "1000+" },
    ],
  },
];

export default function ClubsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 font-sans">

        {/* ── Hero ── */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#0f2044] to-[#1a3a6e] px-6 py-24 text-center">
          <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-violet-600/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-72 w-72 rounded-full bg-emerald-600/20 blur-3xl" />

          <p className="mb-3 text-xs uppercase tracking-[4px] text-white">
            Dr. Virendra Swarup Group Of Institution
          </p>
          <h1 className="mb-5 font-serif text-5xl font-bold leading-tight text-white md:text-6xl">
            Student Clubs
          </h1>
          <p className="mx-auto max-w-xl text-base leading-relaxed text-gray-400">
            Beyond classrooms, VSGOI thrives through its vibrant clubs — where
            passion meets purpose and every student finds their tribe.
          </p>

          {/* Club count pills */}
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {clubs.map((c) => (
              <a
                key={c.id}
                href={`#${c.id}`}
                className={`rounded-full border px-5 py-2 text-sm font-medium text-white transition hover:bg-white/10 ${c.border}`}
              >
                {c.name}
              </a>
            ))}
          </div>
        </section>

        {/* ── Club Sections ── */}
        <div className="mx-auto max-w-6xl space-y-24 px-4 py-20">
          {clubs.map((club, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <section key={club.id} id={club.id} className="scroll-mt-10">
                {/* Section header */}
                <div className="mb-8 flex items-center gap-4">
                  <div className={`h-1 w-10 rounded-full bg-gradient-to-r ${club.accent}`} />
                  <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                    {club.name}
                  </span>
                </div>

                <div
                  className={`flex flex-col gap-8 lg:flex-row ${!isEven ? "lg:flex-row-reverse" : ""
                    }`}
                >
                  {/* ── Left / Right: Cover Image + Gallery ── */}
                  <div className="flex flex-col gap-3 lg:w-1/2">
                    {/* Cover */}
                    <div className="relative h-72 w-full overflow-hidden rounded-2xl">
                      <Image
                        src={`/pravesh/${club.coverImage}`}
                        alt={club.name}
                        fill
                        className="object-cover transition-transform duration-500 hover:scale-105"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      {/* gradient overlay + tagline */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-t ${club.accent} opacity-60`}
                      />
                      <div className="absolute bottom-5 left-5">
                        <p className="font-serif text-2xl font-bold text-white drop-shadow">
                          {club.tagline}
                        </p>
                      </div>
                      {/* badge */}
                      <div
                        className={`absolute right-4 top-4 rounded-full px-3 py-1 text-xs font-semibold text-white ${club.badgeBg}`}
                      >
                        Active Club
                      </div>
                    </div>
                  </div>

                  {/* ── Right / Left: Info ── */}
                  <div className="flex flex-col justify-center lg:w-1/2">
                    <h2 className="mb-3 font-serif text-3xl font-bold text-gray-900">
                      {club.name}
                    </h2>
                    <p className="mb-6 text-sm leading-relaxed text-gray-500">
                      {club.description}
                    </p>

                    {/* Highlights */}
                    <div className="mb-6 grid grid-cols-3 gap-4">
                      {club.highlights.map((h) => (
                        <div
                          key={h.label}
                          className="rounded-xl bg-white p-4 text-center shadow-sm border border-gray-100"
                        >
                          <p className="font-serif text-2xl font-bold text-gray-900">
                            {h.value}
                          </p>
                          <p className="mt-1 text-xs text-gray-400">{h.label}</p>
                        </div>
                      ))}
                    </div>

                    {/* Activities */}
                    <div>
                      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-400">
                        Activities
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {club.activities.map((a) => (
                          <span
                            key={a}
                            className={`rounded-full px-3 py-1 text-xs font-medium ${club.tagBg}`}
                          >
                            {a}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>

        {/* ── Footer ── */}
        <footer className="border-t border-gray-200 bg-white py-6 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} VSGOI — Nurturing talent, building community
        </footer>
      </main>
      <Footer />
    </>
  );
}