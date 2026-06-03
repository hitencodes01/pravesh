

import Link from "next/link";


const icons: any = {
    BTECH: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <path d="M12 2L2 7l10 5 10-5-10-5z" />
            <path d="M2 17l10 5 10-5" />
            <path d="M2 12l10 5 10-5" />
        </svg>
    ),
    BBA: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <rect x="2" y="3" width="20" height="14" rx="2" />
            <path d="M8 21h8M12 17v4" />
            <path d="M7 8h4M7 11h6" />
        </svg>
    ),
    BCA: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <rect x="2" y="3" width="20" height="15" rx="2" />
            <polyline points="8 10 12 14 16 10" />
            <line x1="12" y1="14" x2="12" y2="7" />
            <line x1="2" y1="20" x2="22" y2="20" />
        </svg>
    ),
    MBA: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <path d="M22 10v6M2 10l10-5 10 5-10 5-10-5z" />
            <path d="M6 12v5c0 1.657 2.686 3 6 3s6-1.343 6-3v-5" />
        </svg>
    ),
    POLYTECHNIC: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <circle cx="12" cy="12" r="3" />
            <path d="M19.07 4.93l-1.41 1.41M5.34 18.66l-1.41 1.41M20 12h-2M6 12H4M19.07 19.07l-1.41-1.41M5.34 5.34 3.93 3.93" />
            <circle cx="12" cy="12" r="7" />
        </svg>
    ),
    ITI: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
    ),
};

// Per-course accent colors (gradient from→to + ring color)
const accents: Record<string, { from: string; to: string; ring: string; text: string }> = {
    BTECH: { from: "from-blue-500", to: "to-indigo-600", ring: "ring-blue-200", text: "text-blue-600" },
    BBA: { from: "from-emerald-500", to: "to-teal-600", ring: "ring-emerald-200", text: "text-emerald-600" },
    BCA: { from: "from-violet-500", to: "to-purple-600", ring: "ring-violet-200", text: "text-violet-600" },
    MBA: { from: "from-amber-500", to: "to-orange-500", ring: "ring-amber-200", text: "text-amber-600" },
    POLYTECHNIC: { from: "from-sky-500", to: "to-cyan-600", ring: "ring-sky-200", text: "text-sky-600" },
    ITI: { from: "from-rose-500", to: "to-pink-600", ring: "ring-rose-200", text: "text-rose-600" },
};

export default function CourseSection() {
    const courses = [
        {
            key: "BTECH",
            name: "B.TECH",
            tags: ["CS", "ME", "CSE", "EE"],
            description:
                "The B.Tech program at VSGOI prepares engineers for a rapidly evolving technological landscape. Offered across four specializations — Computer Science (CS), Mechanical Engineering (ME), Computer Science & Engineering (CSE), and Electrical Engineering (EE) — the program blends rigorous theoretical foundations with hands-on practical training. Students engage in laboratory work, industrial visits, live projects, and internships that bridge the gap between academia and industry.",
        },
        {
            key: "BBA",
            name: "BBA",
            tags: ["Management", "Leadership"],
            description:
                "The program aims at giving a broad knowledge of the functional areas of management in an organization. It develops practical managerial skills, communication skills and business decision-making capability. It incorporates training and practical experience in the form of case studies, projects, presentations, internships, industrial visits and interaction with experts from the industry.",
        },
        {
            key: "BCA",
            name: "BCA",
            tags: ["Computing", "Technology"],
            description:
                "Developments in computing are creating a wide range of excellent career prospects. There is a high demand for graduates who have the skills to apply computer technology to the practical problems of business and industry. The BCA program at CMS Kanpur is designed to produce graduates who meet these needs with strong technical foundations.",
        },
        {
            key: "MBA",
            name: "MBA",
            tags: ["Business", "Strategy"],
            description:
                "The MBA program equips students with advanced business acumen, leadership qualities, and strategic thinking to excel in dynamic corporate environments. With a curriculum crafted around real-world challenges, students gain expertise in finance, marketing, operations, and human resources for senior management roles.",
        },
        {
            key: "POLYTECHNIC",
            name: "POLYTECHNIC",
            tags: ["Mechanical", "Civil", "Electrical"],
            description:
                "Dr. Virendra Swarup Polytechnic offers Diploma programs in Mechanical, Civil and Electrical Engineering to meet the growing needs of skilled manpower in diverse industries. It lays emphasis on a blend of theoretical learning with extensive hands-on practice.",
        },
        {
            key: "ITI",
            name: "ITI",
            tags: ["Electrician", "Fitter", "Welder"],
            description:
                "Dr. Virendra Swarup Private ITI offers certificates in Electrician, Fitter and Welder trades to meet the growing needs of skilled manpower in diverse industries. The program ensures students gain practical vocational skills that make them immediately employable.",
        },
    ];

    return (
        <section className="py-16 px-4 bg-gray-50">
            {/* Header */}
            <div className="text-center mb-12">
                <p className="text-blue-600 uppercase tracking-widest text-xs font-bold mb-2">
                    What We Offer
                </p>
                <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                    Programs &amp; Curriculum
                </h2>
                <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500" />
            </div>

            {/* Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((item) => {
                    const accent = accents[item.key];
                    return (
                        <div
                            key={item.key}
                            className="group relative bg-white rounded-xl border border-gray-300 p-6 flex flex-col gap-4 shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300"
                        >
                            {/* Top gradient bar */}
                            <div
                                className={`absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl bg-gradient-to-r ${accent.from} ${accent.to} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                            />

                            {/* Icon container */}
                            <div className="flex items-center gap-4">
                                <div
                                    className={`
                    flex-shrink-0 w-12 h-12 rounded-xl
                    bg-gradient-to-br ${accent.from} ${accent.to}
                    ring-[3px] ${accent.ring}
                    flex items-center justify-center
                    text-white shadow-md
                    group-hover:scale-105 transition-transform duration-300
                  `}
                                >
                                    {icons[item.key]}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 tracking-tight">
                                    {item.name}
                                </h3>
                            </div>

                            {/* Tags */}
                            <div className="flex flex-wrap gap-2">
                                {item.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className={`text-xs font-semibold ${accent.text} bg-gray-50 border border-gray-200 rounded-full px-3 py-0.5`}
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            {/* Description */}
                            <p className="text-gray-500 text-sm leading-relaxed flex-1">
                                {item.description}
                            </p>

                            {/* CTA */}
                            <button
                                className={`mt-1 self-start text-sm font-semibold ${accent.text} flex items-center gap-1 group/btn`}
                            >
                                <Link href={`/${item.key}`}>Learn more</Link>
                                <span className="group-hover/btn:translate-x-1 transition-transform duration-200 inline-block">
                                    →
                                </span>
                            </button>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
