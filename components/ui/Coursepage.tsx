import AdmissionProcess, { CourseKey } from "./AdmissionProcess";
import PlacementCarousel from "./PlacementSlider";


export interface Branch {
    name: string;
    code?: string;
    description: string;
    duration?: string;
    seats?: number;
    highlights?: string[];
}

export interface CourseData {
    name: string;
    acronym: string;
    affiliation: string;
    description: string;
    duration: string;
    accent: "blue" | "emerald" | "violet" | "amber" | "sky" | "rose";
    examination: string;
    branches?: Branch[];
    fees: {
        tuition: string;
        ecc?: string;
    };
    facilities: string[];
    campusLife: {
        label: string;
        value: string;
    }[];
    placements: { id: number; company: string; role: string; package: string; location: string; image: string; alt: string }[];
}

const accentMap = {
    blue: { grad: "from-blue-500 to-indigo-600", pill: "bg-blue-50 text-blue-700 border-blue-200", bar: "from-blue-500 to-indigo-500", ring: "ring-blue-200", tag: "text-blue-600", icon: "bg-blue-100 text-blue-600", badge: "bg-blue-600" },
    emerald: { grad: "from-emerald-500 to-teal-600", pill: "bg-emerald-50 text-emerald-700 border-emerald-200", bar: "from-emerald-500 to-teal-500", ring: "ring-emerald-200", tag: "text-emerald-600", icon: "bg-emerald-100 text-emerald-600", badge: "bg-emerald-600" },
    violet: { grad: "from-violet-500 to-purple-600", pill: "bg-violet-50 text-violet-700 border-violet-200", bar: "from-violet-500 to-purple-500", ring: "ring-violet-200", tag: "text-violet-600", icon: "bg-violet-100 text-violet-600", badge: "bg-violet-600" },
    amber: { grad: "from-amber-500 to-orange-500", pill: "bg-amber-50 text-amber-700 border-amber-200", bar: "from-amber-500 to-orange-400", ring: "ring-amber-200", tag: "text-amber-600", icon: "bg-amber-100 text-amber-700", badge: "bg-amber-500" },
    sky: { grad: "from-sky-500 to-cyan-600", pill: "bg-sky-50 text-sky-700 border-sky-200", bar: "from-sky-500 to-cyan-500", ring: "ring-sky-200", tag: "text-sky-600", icon: "bg-sky-100 text-sky-600", badge: "bg-sky-600" },
    rose: { grad: "from-rose-500 to-pink-600", pill: "bg-rose-50 text-rose-700 border-rose-200", bar: "from-rose-500 to-pink-500", ring: "ring-rose-200", tag: "text-rose-600", icon: "bg-rose-100 text-rose-600", badge: "bg-rose-600" },
};

/* ── shared primitives ───────────────────────────────────────────── */

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    return (
        <div className={`group relative bg-white rounded-2xl border border-gray-500 shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden ${className}`}>
            {children}
        </div>
    );
}

function CardHeading({ label, title, accent }: { label: string; title: string; accent: keyof typeof accentMap }) {
    const a = accentMap[accent];
    return (
        <div className="flex flex-col gap-1 mb-4">
            <span className={`inline-block self-start px-3 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-widest border ${a.pill}`}>
                {label}
            </span>
            <h2 className="text-xl font-extrabold text-gray-900">{title}</h2>
            <div className={`h-0.5 w-10 rounded-full bg-gradient-to-r ${a.bar}`} />
        </div>
    );
}

/* ── branch section ──────────────────────────────────────────────── */

function BranchCard({ branch, accent, index }: { branch: Branch; accent: keyof typeof accentMap; index: number }) {
    const a = accentMap[accent];

    return (
        <div className="relative flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-md transition-shadow duration-300 overflow-hidden">
            {/* subtle top-edge accent bar */}
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${a.bar} opacity-80`} />

            {/* header row */}
            <div className="flex items-start justify-between gap-3 pt-1">
                <div className="flex items-center gap-3">
                    {/* index bubble */}
                    <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-xs font-extrabold text-white ${a.badge}`}>
                        {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                        <h3 className="text-base font-extrabold text-gray-900 leading-tight">{branch.name}</h3>
                        {branch.code && (
                            <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">{branch.code}</span>
                        )}
                    </div>
                </div>

                {/* meta pills */}
                <div className="flex flex-col items-end gap-1">
                    {branch.duration && (
                        <span className="px-2 py-0.5 rounded-md bg-gray-100 text-gray-500 text-[11px] font-semibold whitespace-nowrap">
                            {branch.duration}
                        </span>
                    )}
                    {branch.seats !== undefined && (
                        <span className={`px-2 py-0.5 rounded-md text-[11px] font-semibold whitespace-nowrap border ${a.pill}`}>
                            {branch.seats} seats
                        </span>
                    )}
                </div>
            </div>

            {/* description */}
            <p className="text-gray-500 text-sm leading-relaxed">{branch.description}</p>

            {/* highlights */}
            {branch.highlights && branch.highlights.length > 0 && (
                <ul className="flex flex-col gap-1.5 mt-auto">
                    {branch.highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2 text-sm text-gray-600">
                            <span className={`mt-[5px] w-1.5 h-1.5 rounded-full flex-shrink-0 bg-gradient-to-br ${a.grad}`} />
                            {h}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

function BranchSection({ branches, accent }: { branches: Branch[]; accent: keyof typeof accentMap }) {
    if (!branches || branches.length === 0) return null;

    return (
        <Card className="p-7">
            <CardHeading label="Specialisations" title="Available Branches" accent={accent} />

            {/* summary count strip */}
            <div className="flex items-center gap-2 mb-5">
                <span className="text-sm text-gray-400 font-medium">
                    {branches.length} branch{branches.length !== 1 ? "es" : ""} offered
                </span>
                <span className="flex-1 h-px bg-gray-100" />
                {branches.some((b) => b.seats !== undefined) && (
                    <span className="text-sm text-gray-400 font-medium">
                        Total seats: {branches.reduce((sum, b) => sum + (b.seats ?? 0), 0)}
                    </span>
                )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
                {branches.map((branch, i) => (
                    <BranchCard key={branch.name} branch={branch} accent={accent} index={i} />
                ))}
            </div>
        </Card>
    );
}

/* ── main page ───────────────────────────────────────────────────── */

export default function CoursePage({ course }: { course: CourseData }) {
    const a = accentMap[course.accent];
    const courseName = course.acronym.toLowerCase()
    console.log(courseName)
    return (
        <div className="min-h-screen bg-gray-50">
            {/* hero */}
            <div className="relative overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#0f2044] to-[#1a3a6e] text-white">
                <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-blue-500/10" />
                <div className="pointer-events-none absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-amber-400/10" />
                <div className="max-w-7xl mx-auto px-4 py-14 md:py-20 flex flex-col gap-4">
                    <p className="text-white/70 text-xs font-semibold uppercase tracking-widest">
                        Programs &amp; Curriculum
                    </p>
                    <div className="flex flex-col gap-1">
                        <span className="text-3xl md:text-7xl font-extrabold tracking-tight leading-none">
                            {course.acronym}
                        </span>
                        <h1 className="text-lg md:text-2xl font-semibold text-white/90 leading-snug max-w-2xl">
                            {course.name}
                        </h1>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-1">
                        <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur text-xs font-semibold border border-white/30">
                            {course.affiliation}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur text-xs font-semibold border border-white/30">
                            {course.duration}
                        </span>
                    </div>
                    <p className="text-white/80 text-sm md:text-base leading-relaxed max-w-2xl mt-2">
                        {course.description}
                    </p>
                </div>
            </div>



            <div className="max-w-7xl mx-auto px-4 py-12 flex flex-col gap-6">

                {/* ── branches ── */}
                {course.branches && course.branches.length > 0 && (
                    <BranchSection branches={course.branches} accent={course.accent} />
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* examination */}
                    <Card className="p-7">
                        <CardHeading label="Academic" title="Examination Pattern" accent={course.accent} />
                        <p className="text-gray-500 text-sm leading-relaxed">{course.examination}</p>
                    </Card>

                    {/* fees */}
                    <Card className="p-7">
                        <CardHeading label="Financials" title="Fee Structure" accent={course.accent} />
                        <div className="flex flex-col gap-3">
                            <div className="flex items-center justify-between rounded-xl bg-gray-50 border border-gray-100 px-4 py-3">
                                <span className="text-sm font-semibold text-gray-600">Tuition Fee</span>
                                <span className={`text-sm font-extrabold ${a.tag}`}>{course.fees.tuition}</span>
                            </div>
                            {course.fees.ecc && (
                                <div className="flex items-center justify-between rounded-xl bg-gray-50 border border-gray-100 px-4 py-3">
                                    <span className="text-sm font-semibold text-gray-600">ECC Charges</span>
                                    <span className={`text-sm font-extrabold ${a.tag}`}>{course.fees.ecc}</span>
                                </div>
                            )}
                            <p className="text-[11px] text-black mt-1 leading-snug">
                                * ECC includes Admission Kit, Uniform (3 Shirts, 2 Pants, 1 Tie) &amp; Books.
                            </p>
                        </div>
                    </Card>
                </div>
                <AdmissionProcess fromCourse={courseName as CourseKey} />
                {/* facilities */}
                <Card className="p-7">
                    <CardHeading label="On Campus" title="Facilities Included" accent={course.accent} />
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                        {course.facilities.map((f) => (
                            <div key={f} className="flex items-center gap-2 rounded-xl border border-gray-100 bg-gray-200 px-4 py-2.5">
                                <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 bg-gradient-to-br ${a.grad}`} />
                                <span className="text-sm text-gray-600 font-medium">{f}</span>
                            </div>
                        ))}
                    </div>
                </Card>
                <PlacementCarousel />
                {/* campus life */}
                <Card className="p-7">
                    <CardHeading label="Student Life" title="Campus Information" accent={course.accent} />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {course.campusLife.map((item) => (
                            <div key={item.label} className="flex flex-col gap-0.5 rounded-xl border border-gray-100 bg-gray-200 px-4 py-3">
                                <span className="text-[11px] font-bold uppercase tracking-widest text-gray-400">{item.label}</span>
                                <span className="text-sm font-semibold text-gray-800">{item.value}</span>
                            </div>
                        ))}
                    </div>
                </Card>

            </div>
        </div>
    );
}