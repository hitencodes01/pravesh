import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import Image from "next/image";

const facilities = [
  {
    id: 1,
    title: "Computer Lab",
    image: "/images/com_lab.png",
    description:
      "VSGOI campus is technology driven with Wi-Fi environment. All the departments have state-of-the-art computers with high-speed internet connectivity, projection systems, input-output devices and extensive software support. Students are encouraged to use these for regular curricular work, research, project work, presentations etc. The institute has also developed an exclusive multi-media and internet lab. to offer 24x7 Net surfing. The lab is equipped with CD Writer, Scanner, Printer, and Desktop publishing, Animation Packages, Online Editing, Recording and Video Mixing Facilities. All the students have access to internet 24 hours a day througn 10 mbps dedicated internet line. The institute has resolved to enhance the internet bandwidth every year.",
    tags: ["LAN Enabled", "High-end CPUs"],
    accent: "border-emerald-600",
    tagBg: "bg-emerald-50 text-emerald-800",
    iconBg: "bg-emerald-100",
  },
  {
    id: 2,
    title: "Hostel",
    image: "/images/hostel.jpg",
    description:
      "Separate hostel for Boys and Girls with Mess facility Boys Hostel: The boys hostel has initial capacity for 125 students. The students taking admission in 1st year are encouraged to reside in hostel so that they are safe from ragging. Each student is provided with an almirah, cot, table & chair as well as English & Hindi newspapers. There is T.V. & sports (both indoor & outdoor games) for their entertainment. There is inhouse zym for those who want to keep themselves fit & healthy and 24 hrs Telephone & Internet facility. They are given three times meals per day & special diet on weekends. There is 24 hrs facility for security guard.Girls Hostel: The girls hostel has capacity for 75 students. Each student is provided with an almirah, cot, table & chair as well as English & Hindi newspapers.The students are taken care by providing daily three meals, T.V. for their entertainment and inhouse zym to keep them healthy. Sweet dish and special diet are provided on satardays & sundays. The hostel timings are from 7:00 AM to 7:30 PM. The students are also provided with 24 hrs. telephone & Internet facility. There is a movement register for the inmates which is strictly followed. The hostel is guarded by 24 hrs security guard.",
    tags: ["Boys & Girls", "Secure Campus"],
    accent: "border-blue-600",
    tagBg: "bg-blue-50 text-blue-800",
    iconBg: "bg-blue-100",
  },
  {
    id: 3,
    title: "Library",
    image: "/images/libe.png",
    description:
      "Libraries are three-tier Central, Institutional and Departmental. Reference books or both Indian and Foreign authors, Case study collections, Audio and Video tapes, CDs & DVDs, Databases, Indian and International journals on engineering, Computer science & management are available. Aesthetically furnished these libraries are open throughout the day & till late evenings. The library information is computerized/digitalized with facilities for reprography.",
    tags: ["Digital Resources", "Reading Halls"],
    accent: "border-violet-600",
    tagBg: "bg-violet-50 text-violet-800",
    iconBg: "bg-violet-100",
  },
  {
    id: 4,
    title: "Cafeteria",
    image: "/images/cafeteria.jpg",
    description:
      "College cafeterias are responsible for supplying a large amount of food to a diverse group of diners under sanitary conditions. Ultimately, however, in college the responsibility for setting up a reliably healthy diet rests with the students. Information is available to college students so that they can better inform their choices when in the cafeteria, and perhaps go for a salad instead of a cheeseburger. Despite overwhelming evidence about the dangers of college cafeterias to student health, it's up to the students to become knowledgeable about proper eating habits and to remain diligent about maintaining a healthy diet, no matter where they choose to eat. The prices of the food items are fixed by the college authorities and are easily affordable by the students. The quality of food items is regularly monitored by college management.We at VSGOI College believe that improvement is a continuous process. Complaints and suggestions if any are always welcome from the students for the improvement in services. For this the students can contact the Teacher Incharge Canteens directly.",
    tags: ["Hygienic Food", "Affordable"],
    accent: "border-amber-500",
    tagBg: "bg-amber-50 text-amber-800",
    iconBg: "bg-amber-100",
  },
  {
    id: 5,
    title: "Open Air Theater",
    image: "/images/theatre.jpg",
    description:
      "Open Air Theater is the most noteworthy feature of VSGOI. The theater has covered mega stage with green rooms with a seating capacity of 1500 people. The Theater is used freuently to host inter institute competitions and also as a dancing floor during occasions like Fresher's, Farewell and New Year party.",
    tags: ["Theater"],
    accent: "border-red-500",
    tagBg: "bg-red-50 text-red-800",
    iconBg: "bg-red-100",
  },
  {
    id: 6,
    title: "Sports",
    image: "/images/sport.png",
    description:
      "VSGOI takes special care of students interested in various sports and yoga activities. The institute provides various sports facilities such as Table Tennis, Badminton, Carom, Chess, Basket Ball, Volleybal, Swimming etc. The institute conducts regularly stress management workshops under the supervision of reputed Yoga practitioners to keep the students in high spirits. An impressive gym with fully functional workstation takes care of the passion of the new-gen students towards physical fitness.Sports play a pivotal role in shaping one's personality and maintaining good health. We've specially developed a sports environment that gives a good experience to all our students.",
    tags: ["Multi-Sport", "Outdoor Arena"],
    accent: "border-green-600",
    tagBg: "bg-green-50 text-green-800",
    iconBg: "bg-green-100",
  },
  {
    id: 7,
    title: "Transportation",
    image: "/images/transport.jpg",
    description:
      "Dr. VSGOI Unnao, situated in Kanpur-Lucknow Hiway is well-connected with Kanpur & Unnao . It offers transport facilities to its students and faculty members on very nominal charges. The buses ply on different routes of Kanpur & Unnao areas to pick and drop the students. Our Bus drivers are highly qualified and are licensed by the RTO to drive college buses to ensure the full safety of both the students & staff members.The students are spared from the difficulty of commuting to the college by public transport. The transport facility is also a significant contributor to inculcating an element of punctuality among the students. Bus Facility is also available for students & faculty members for industrial visits, field trips, and other academic activities.",
    tags: ["Multi-Sport", "Outdoor Arena"],
    accent: "border-green-600",
    tagBg: "bg-green-50 text-green-800",
    iconBg: "bg-green-100",
  },
];

const stats = [
  { value: "7+", label: "Key Facilities" },
  { value: "24×7", label: "Power Supply" },
  { value: "100%", label: "LAN Connected" },
];

const campusHighlights = [
  { label: "Eco Friendly", image: "/facilities/eco.jpg" },
  { label: "Open Spaces", image: "/facilities/openspace.jpg" },
  { label: "Fresh Air", image: "/facilities/freshair.jpg" },
];

export default function FacilitiesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 font-sans">
        {/* ── Hero ── */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#0f2044] to-[#1a3a6e] px-6 py-20 text-center">
          {/* decorative circles */}
          <div className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 rounded-full bg-white/5" />
          <div className="pointer-events-none absolute -bottom-14 -left-8 h-48 w-48 rounded-full bg-white/5" />

          <p className="mb-2 text-xs uppercase tracking-[4px] text-emerald-200">
            Dr. Virendra Swarup Group of Institition
          </p>
          <h1 className="mb-4 font-serif text-4xl font-bold leading-tight text-white md:text-5xl">
            World-Class Facilities
          </h1>
          <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-emerald-100">
            Empowering students with modern infrastructure, a vibrant learning
            environment, and everything needed to excel.
          </p>

          {/* Stats */}
          <div className="mx-auto flex max-w-sm flex-wrap justify-center gap-8">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <p className="font-serif text-3xl font-bold text-white">
                  {s.value}
                </p>
                <p className="mt-1 text-xs text-emerald-200">{s.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Facilities Grid ── */}
        <section className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid gap-6 sm:grid-rows-1 lg:grid-rows-1">
            {facilities.map((f) => (
              <div
                key={f.id}
                className={`flex flex-col md:flex-row overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-md border-t-4 ${f.accent}`}
              >
                {/* Image */}
                <div className="md:w-1/3 h-56 md:h-auto flex-shrink-0">
                  <img
                    src={f.image}
                    alt={f.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 p-6">
                  <h3 className="mb-2 font-serif text-xl font-semibold text-gray-900">
                    {f.title}
                  </h3>

                  <p className="mb-4 text-sm leading-relaxed text-gray-500">
                    {f.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {f.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`rounded-full px-3 py-1 text-xs font-medium ${f.tagBg}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Lush Green Campus Banner ── */}
        <section className="mx-auto max-w-6xl px-4 pb-20">
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="flex flex-col gap-0 md:flex-row">
              {/* Campus image */}
              <div className="relative h-64 w-full md:h-auto md:w-2/5 md:min-h-[260px]">
                <Image
                  src="/images/building.jpeg"
                  alt="Lush green VSGOI campus"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                {/* overlay badge */}
                <div className="absolute bottom-4 left-4 rounded-xl bg-emerald-700/80 px-4 py-2 backdrop-blur-sm">
                  <p className="text-xs font-semibold text-white">
                    🌿 Green Campus
                  </p>
                </div>
              </div>

              {/* Text content */}
              <div className="flex flex-1 flex-col justify-center p-7">
                <h3 className="mb-3 font-serif text-2xl font-bold text-gray-900">
                  Lush Green Campus
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-gray-500">
                  VSGOI is nestled within a beautifully landscaped green campus —
                  lined with trees, manicured lawns, and open spaces that create a
                  calm, inspiring atmosphere for learning and well-being. The
                  natural surroundings promote a healthy, eco-friendly lifestyle
                  for the entire college community.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer className="border-t border-gray-200 bg-white py-6 text-center text-xs text-gray-400">
          © {new Date().getFullYear()} VSGOI — Building futures in a green,
          world-class environment
        </footer>
      </main>
      <Footer /></>
  );
}