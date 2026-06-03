// GuestLectures.tsx
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import { Scale, FlaskConical, Cpu, Briefcase, HeartPulse, Globe, Mic } from "lucide-react";

const stats = [
    { num: "50+", label: "Expert speakers every year" },
    { num: "10+", label: "Domains covered" },
    { num: "PAN", label: "India representation" },
];

const domains = [
    { tag: "Finance", label: "SEBI & Regulators", sub: "Market experts & policymakers", accent: "border-blue-600", tagCls: "bg-blue-50 text-blue-800" },
    { tag: "Academia", label: "IITs & Research", sub: "Professors & innovators", accent: "border-emerald-600", tagCls: "bg-emerald-50 text-emerald-800" },
    { tag: "Technology", label: "Tech & Engineering", sub: "Industry engineers & CTOs", accent: "border-amber-600", tagCls: "bg-amber-50 text-amber-800" },
    { tag: "Business", label: "Entrepreneurship", sub: "Founders & startup mentors", accent: "border-violet-600", tagCls: "bg-violet-50 text-violet-800" },
    { tag: "Science", label: "Healthcare & Research", sub: "Doctors & scientists", accent: "border-red-600", tagCls: "bg-red-50 text-red-800" },
    { tag: "Governance", label: "Policy & Government", sub: "IAS officers & officials", accent: "border-teal-600", tagCls: "bg-teal-50 text-teal-800" },
];

export default function GuestLectures() {
    return (
        <div>
            <Navbar />
            <section className="bg-[#f0f4f8] px-6 py-12">
                {/* Eyebrow */}
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-0.5 bg-blue-700" />
                    <span className="text-xs font-medium tracking-widest uppercase text-blue-700">
                        Guest Lectures at VSGOI
                    </span>
                </div>

                {/* Heading */}
                <h2 className="font-serif text-3xl font-bold leading-snug text-neutral-900 mb-3">
                    Learning from those<br />
                    who <span className="text-blue-700">lead the industry</span>
                </h2>

                <p className="text-sm text-neutral-500 leading-relaxed max-w-lg mb-10">
                    VSGOI welcomes distinguished guests from across India — seasoned
                    professionals, regulators, and academicians who bring real-world
                    insight straight to our classrooms.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 divide-x divide-[#cdd8e8] border border-[#cdd8e8] rounded-2xl overflow-hidden mb-10">
                    {stats.map((s) => (
                        <div key={s.label} className="bg-[#fafdff] flex flex-col items-center text-center py-5 px-3 gap-1">
                            <span className="font-serif text-3xl font-bold text-neutral-900 leading-none">
                                {s.num}
                            </span>
                            <span className="text-xs text-neutral-400 font-medium leading-snug max-w-[80px]">
                                {s.label}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Domain Cards */}
                <div className="grid grid-cols-3 gap-2.5 mb-10">
                    {domains.map(({ tag, label, sub, accent, tagCls }) => (
                        <div
                            key={label}
                            className={`bg-white border-[0.5px] border-[#cdd8e8] border-l-[3px] ${accent} rounded-2xl p-4 flex flex-col gap-1.5`}
                        >
                            <span className={`text-[10px] font-medium uppercase tracking-wide px-2 py-0.5 rounded-full w-fit ${tagCls}`}>
                                {tag}
                            </span>
                            <p className="text-sm font-medium text-neutral-800 leading-snug">{label}</p>
                            <p className="text-xs text-neutral-400">{sub}</p>
                        </div>
                    ))}
                </div>

                {/* Banner */}
                <div className="bg-[#0f2744] rounded-2xl p-5 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-700 flex items-center justify-center flex-shrink-0">
                        <Mic size={22} className="text-white" />
                    </div>
                    <p className="text-sm text-[#c8d9ef] leading-relaxed">
                        Every lecture is a window to the real world —{" "}
                        <span className="text-blue-300 font-medium">
                            industry leaders, IIT professors, and SEBI officials
                        </span>{" "}
                        share their journeys and expertise, inspiring the next generation at VSGOI.
                    </p>
                </div>
            </section>
            <Footer />
        </div>
    );
}