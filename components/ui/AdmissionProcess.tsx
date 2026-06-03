"use client";
import { useEffect, useState } from "react";

/* ── types ───────────────────────────────────────────────────────── */

export type CourseKey = "btech" | "btechlateral" | "polytechnic" | "polytechniclateral" | "iti" | "bba" | "bca" | "mba";

type Process = {
    label: string;
    acronym: string;
    accent: string;
    accentLight: string;
    accentText: string;
    accentBorder: string;
    eligibility: string[];
    requiredDocs: string[];
};

/* ── data ────────────────────────────────────────────────────────── */

const ALL_DOCUMENTS: string[] = [
    "10th Marksheet",
    "12th Marksheet",
    "Diploma",
    "Graduation",
    "Aadhar Card",
    "Migration Certificate",
    "Transfer Certificate",
    "10 Passport Size Photographs",
    "Gap Affidavit",
    "Income Certificate",
    "Caste Certificate",
    "Domicile Certificate",
    "Score Card (JEE / CUET / JEECUP)",
];

const admissionData: Record<CourseKey, Process> = {
    btech: {
        label: "Bachelor of Technology",
        acronym: "B.Tech",
        accent: "from-amber-500 to-orange-500",
        accentLight: "bg-amber-50",
        accentText: "text-amber-700",
        accentBorder: "border-amber-300",
        eligibility: [
            "Passed 10+2 (PCM) with minimum 45% marks (40% for SC/ST)",
            "Valid JEE Main / JEECUP score accepted",
            "CUET score also accepted for direct admission",
            "Lateral entry available for Polytechnic diploma holders (2nd year)",
        ],
        requiredDocs: [
            "10th Marksheet",
            "12th Marksheet",
            "Aadhar Card",
            "Migration Certificate",
            "Transfer Certificate",
            "10 Passport Size Photographs",
            "Gap Affidavit",
            "Income Certificate",
            "Caste Certificate",
            "Domicile Certificate",
            "Score Card (JEE / CUET / JEECUP)",
        ],
    },
    btechlateral: {
        label: "B.Tech Lateral Entry (AKTU)",
        acronym: "B.Tech Lateral",
        accent: "from-orange-500 to-red-500",
        accentLight: "bg-orange-50",
        accentText: "text-orange-700",
        accentBorder: "border-orange-300",
        eligibility: [
            "3-year Diploma (Polytechnic) in relevant Engineering branch",
            "Minimum 45% marks in Diploma (40% for SC/ST candidates)",
            "Direct admission into 2nd year (3rd semester) of B.Tech",
            "Admission via AKTU Lateral Entry counselling / JEECUP Paper 2",
            "B.Sc. (PCM) graduates also eligible for lateral entry",
        ],
        requiredDocs: [
            "10th Marksheet",
            "12th Marksheet",
            "Diploma",
            "Aadhar Card",
            "Migration Certificate",
            "Transfer Certificate",
            "10 Passport Size Photographs",
            "Gap Affidavit",
            "Income Certificate",
            "Caste Certificate",
            "Domicile Certificate",
            "Score Card (JEE / CUET / JEECUP)",
        ],
    },
    polytechnic: {
        label: "Diploma in Engineering",
        acronym: "Polytechnic",
        accent: "from-sky-500 to-cyan-600",
        accentLight: "bg-sky-50",
        accentText: "text-sky-700",
        accentBorder: "border-sky-300",
        eligibility: [
            "Passed Class 10th (High School) with minimum 35% marks",
            "Valid JEECUP score required for UP state counselling",
            "ITI certificate holders eligible for lateral entry (2nd year)",
            "Age limit as per BTEUP norms",
        ],
        requiredDocs: [
            "10th Marksheet",
            "Aadhar Card",
            "Migration Certificate",
            "Transfer Certificate",
            "10 Passport Size Photographs",
            "Gap Affidavit",
            "Income Certificate",
            "Caste Certificate",
            "Domicile Certificate",
            "Score Card (JEE / CUET / JEECUP)",
        ],
    },
    polytechniclateral: {
        label: "Polytechnic Lateral Entry",
        acronym: "Poly Lateral",
        accent: "from-cyan-500 to-teal-600",
        accentLight: "bg-cyan-50",
        accentText: "text-cyan-700",
        accentBorder: "border-cyan-300",
        eligibility: [
            "Passed ITI (NCVT / SCVT) certificate in relevant trade",
            "Minimum 35% marks in ITI qualifying examination",
            "Direct admission into 2nd year (3rd semester) of Polytechnic",
            "Admission via JEECUP Paper 6 / BTEUP lateral counselling",
            "10+2 (vocational stream) candidates also eligible",
        ],
        requiredDocs: [
            "10th Marksheet",
            "Diploma",
            "Aadhar Card",
            "Migration Certificate",
            "Transfer Certificate",
            "10 Passport Size Photographs",
            "Gap Affidavit",
            "Income Certificate",
            "Caste Certificate",
            "Domicile Certificate",
        ],
    },
    iti: {
        label: "Industrial Training Institute",
        acronym: "ITI",
        accent: "from-rose-500 to-pink-600",
        accentLight: "bg-rose-50",
        accentText: "text-rose-700",
        accentBorder: "border-rose-300",
        eligibility: [
            "Passed Class 8th / 10th depending on the trade",
            "Electrician & Fitter: Class 10th pass required",
            "Welder: Class 8th pass minimum",
            "No upper age bar for most NCVT / SCVT trades",
        ],
        requiredDocs: [
            "10th Marksheet",
            "Aadhar Card",
            "Transfer Certificate",
            "10 Passport Size Photographs",
            "Income Certificate",
            "Caste Certificate",
            "Domicile Certificate",
        ],
    },
    bba: {
        label: "Bachelor of Business Administration",
        acronym: "BBA",
        accent: "from-violet-500 to-purple-600",
        accentLight: "bg-violet-50",
        accentText: "text-violet-700",
        accentBorder: "border-violet-300",
        eligibility: [
            "Passed 10+2 in any stream with minimum 45% marks",
            "No specific subject restriction — Arts, Commerce & Science eligible",
            "CUET / university entrance score may be required",
            "Age limit: generally up to 22 years (relaxation for reserved categories)",
        ],
        requiredDocs: [
            "10th Marksheet",
            "12th Marksheet",
            "Aadhar Card",
            "Migration Certificate",
            "Transfer Certificate",
            "10 Passport Size Photographs",
            "Gap Affidavit",
            "Income Certificate",
            "Caste Certificate",
            "Domicile Certificate",
        ],
    },
    bca: {
        label: "Bachelor of Computer Applications",
        acronym: "BCA",
        accent: "from-emerald-500 to-teal-600",
        accentLight: "bg-emerald-50",
        accentText: "text-emerald-700",
        accentBorder: "border-emerald-300",
        eligibility: [
            "Passed 10+2 in any stream with minimum 45% marks",
            "Mathematics as a subject in 10+2 is preferred / required",
            "CUET / university entrance score accepted",
            "Science (PCM / PCB) and Commerce stream candidates equally eligible",
        ],
        requiredDocs: [
            "10th Marksheet",
            "12th Marksheet",
            "Aadhar Card",
            "Migration Certificate",
            "Transfer Certificate",
            "10 Passport Size Photographs",
            "Gap Affidavit",
            "Income Certificate",
            "Caste Certificate",
            "Domicile Certificate",
        ],
    },
    mba: {
        label: "Master of Business Administration",
        acronym: "MBA",
        accent: "from-indigo-500 to-blue-600",
        accentLight: "bg-indigo-50",
        accentText: "text-indigo-700",
        accentBorder: "border-indigo-300",
        eligibility: [
            "Bachelor's degree in any discipline with minimum 50% marks (45% for SC/ST)",
            "Final year graduation students may apply provisionally",
            "Valid CAT / MAT / CMAT / UPCMAT score preferred",
            "AKTU affiliated — admission via UPSEE / state counselling",
        ],
        requiredDocs: [
            "10th Marksheet",
            "12th Marksheet",
            "Graduation",
            "Aadhar Card",
            "Migration Certificate",
            "Transfer Certificate",
            "10 Passport Size Photographs",
            "Gap Affidavit",
            "Income Certificate",
            "Caste Certificate",
            "Domicile Certificate",
        ],
    },
};

/* ── tab groups ──────────────────────────────────────────────────── */

const TAB_GROUPS: { label: string; keys: CourseKey[] }[] = [
    { label: "Engineering", keys: ["btech", "btechlateral", "polytechnic", "polytechniclateral", "iti"] },
    { label: "Management & IT", keys: ["bba", "bca", "mba"] },
];

/* ── sub-components ──────────────────────────────────────────────── */

function CourseTab({
    data,
    active,
    onClick,
}: {
    data: Process;
    active: boolean;
    onClick: () => void;
}) {
    return (
        <button
            onClick={onClick}
            className={`flex flex-col items-start gap-0.5 px-4 py-3 rounded-xl border transition-all duration-200 text-left w-full
                ${active
                    ? `bg-gradient-to-br ${data.accent} text-white border-transparent shadow-md`
                    : "bg-white border-gray-200 text-gray-600 hover:border-gray-300 hover:shadow-sm"
                }`}
        >
            <span className={`text-[10px] font-bold uppercase tracking-widest ${active ? "text-white/70" : "text-gray-400"}`}>
                {data.acronym}
            </span>
            <span className="text-sm font-extrabold leading-tight">{data.label}</span>
        </button>
    );
}

function DocItem({ label, required }: { label: string; required: boolean }) {
    return (
        <div className={`flex items-center gap-3 rounded-xl px-4 py-2.5 border-4 border-black transition-colors
            ${required ? "bg-white border-gray-200" : "bg-gray-50 border-gray-100 opacity-40"}`}
        >
            <span className={`flex-shrink-0 w-4 h-4 rounded border-2 flex items-center justify-center
                ${required ? "border-gray-400 bg-white" : "border-gray-200 bg-gray-100"}`}
            >
                {required && <span className="w-2 h-2 rounded-sm bg-gray-700 block" />}
            </span>
            <span className={`text-sm font-medium ${required ? "text-gray-700" : "text-gray-400 line-through"}`}>
                {label}
            </span>
            {required && (
                <span className="ml-auto text-[10px] font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full whitespace-nowrap">
                    Required
                </span>
            )}
        </div>
    );
}

/* ── main component ──────────────────────────────────────────────── */

export default function AdmissionProcess({ fromCourse }: { fromCourse: CourseKey | null }) {
    const [active, setActive] = useState<CourseKey>("btech");
    const course = admissionData[active];
    useEffect(() => {
        if (fromCourse) {
            setActive(fromCourse);
        }
    }, [fromCourse]);
    return (
        <div className="min-h-screen bg-gray-50">
            {/* page header */}
            <div className="relative overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#0f2044] to-[#1a3a6e] text-white">
                <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-blue-500/10" />
                <div className="pointer-events-none absolute -bottom-12 -right-12 h-56 w-56 rounded-full bg-amber-400/10" />
                <div className="max-w-5xl mx-auto px-4 py-12 md:py-16 flex flex-col gap-3">
                    <p className="text-white/60 text-xs font-bold uppercase tracking-widest">Admissions 2025–26</p>
                    <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-none">Admission Process</h1>
                    <p className="text-white/75 text-sm md:text-base max-w-xl leading-relaxed mt-1">
                        Eligibility criteria, required documents and step-by-step guidance for each programme offered at VSGOI.
                    </p>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-4 py-10 flex flex-col gap-8">

                {/* grouped course tabs */}
                {!fromCourse && (<div className="flex flex-col gap-5">
                    {TAB_GROUPS.map((group) => (
                        <div key={group.label} className="flex flex-col gap-2">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 px-1">
                                {group.label}
                            </p>
                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
                                {group.keys.map((key) => (
                                    <CourseTab
                                        key={key}
                                        data={admissionData[key]}
                                        active={active === key}
                                        onClick={() => setActive(key)}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>)}

                {/* active course label */}
                <div className="flex items-center gap-3">
                    <div className={`h-6 w-1 rounded-full bg-gradient-to-b ${course.accent}`} />
                    <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">{course.acronym}</p>
                        <h2 className="text-lg font-extrabold text-gray-900 leading-tight">{course.label}</h2>
                    </div>
                </div>

                {/* content area */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                    {/* eligibility */}
                    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 flex flex-col gap-4">
                        <div className="flex flex-col gap-1">
                            <span className={`self-start px-3 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-widest border ${course.accentLight} ${course.accentText} ${course.accentBorder}`}>
                                Eligibility
                            </span>
                            <h3 className="text-base font-extrabold text-gray-900">Who Can Apply</h3>
                            <div className={`h-0.5 w-8 rounded-full bg-gradient-to-r ${course.accent}`} />
                        </div>

                        <ul className="flex flex-col gap-3">
                            {course.eligibility.map((point) => (
                                <li key={point} className="flex items-start gap-3">
                                    <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-gradient-to-br ${course.accent}`} />
                                    <span className="text-sm text-gray-600 leading-relaxed">{point}</span>
                                </li>
                            ))}
                        </ul>

                        {/* how to apply */}
                        <div className={`mt-auto rounded-xl border px-4 py-3 ${course.accentLight} ${course.accentBorder}`}>
                            <p className={`text-[11px] font-bold uppercase tracking-widest mb-2 ${course.accentText}`}>How to Apply</p>
                            <ol className="flex flex-col gap-1.5 list-decimal list-inside">
                                {[
                                    "Visit the admission office or apply online",
                                    "Submit filled application form with documents",
                                    "Attend counselling / merit list round",
                                    "Pay fees & confirm admission",
                                ].map((step) => (
                                    <li key={step} className={`text-xs font-medium ${course.accentText}`}>{step}</li>
                                ))}
                            </ol>
                        </div>
                    </div>

                    {/* documents */}
                    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 flex flex-col gap-4">
                        <div className="flex flex-col gap-1">
                            <span className={`self-start px-3 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-widest border ${course.accentLight} ${course.accentText} ${course.accentBorder}`}>
                                Documents
                            </span>
                            <h3 className="text-base font-extrabold text-gray-900">Required at Admission</h3>
                            <div className={`h-0.5 w-8 rounded-full bg-gradient-to-r ${course.accent}`} />
                        </div>

                        <div className="flex items-center gap-2">
                            <span className="text-xs text-gray-400 font-medium">
                                {course.requiredDocs.length} of {ALL_DOCUMENTS.length} documents required
                            </span>
                            <span className="flex-1 h-px bg-gray-100" />
                        </div>

                        <div className="flex flex-col gap-2 overflow-y-auto max-h-[380px] pr-1">
                            {ALL_DOCUMENTS.map((doc) => (
                                <DocItem
                                    key={doc}
                                    label={doc}
                                    required={course.requiredDocs.includes(doc)}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* note strip */}
                <div className="flex items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4">
                    <span className="text-amber-500 text-lg mt-0.5">⚠</span>
                    <p className="text-sm text-amber-800 leading-relaxed">
                        All documents must be submitted in <strong>original + 2 self-attested photocopies</strong>. Gap Affidavit is mandatory if there is a break of 1 or more years after the last qualifying examination. Documents once submitted will not be returned until course completion.
                    </p>
                </div>

            </div>
        </div>
    );
}