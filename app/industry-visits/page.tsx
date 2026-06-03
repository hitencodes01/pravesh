// IndustrialVisits.tsx
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import { Bus } from "lucide-react";

const stats = [
    { num: "100+", label: "Industry tie-ups for visits" },
    { num: "All", label: "Branches covered" },
    { num: "Every", label: "Academic year" },
];

const visits = [
    { tag: "IT / Tech", name: "TCS Lucknow", sub: "India's largest IT services company", branch: "CSE · IT", accent: "border-blue-600", tagCls: "bg-blue-50 text-blue-800" },
    { tag: "FMCG", name: "Parle-G Factory", sub: "Manufacturing & production at scale", branch: "ME · MBA", accent: "border-amber-600", tagCls: "bg-amber-50 text-amber-800" },
    { tag: "Textile", name: "Mirza Limited", sub: "Leading leather & footwear export house", branch: "MBA · CE", accent: "border-violet-600", tagCls: "bg-violet-50 text-violet-800" },
    { tag: "Manufacturing", name: "Auto & Steel Plants", sub: "Heavy engineering & assembly lines", branch: "ME · EE", accent: "border-red-600", tagCls: "bg-red-50 text-red-800" },
    { tag: "Pharma", name: "Pharma & Chemical Units", sub: "R&D labs and production facilities", branch: "Bio · Chem", accent: "border-teal-600", tagCls: "bg-teal-50 text-teal-800" },
    { tag: "And more", name: "100+ Partner Industries", sub: "Across sectors, every year", branch: "All branches", accent: "border-green-600 border-dashed", tagCls: "bg-green-50 text-green-800" },
];

export default function IndustrialVisits() {
    return (
        <div>
            <Navbar />
            <section className="bg-[#f2f7f2] px-6 py-12">
                {/* Eyebrow */}
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-0.5 bg-green-600" />
                    <span className="text-xs font-medium tracking-widest uppercase text-green-600">
                        Industrial Visits at VSGOI
                    </span>
                </div>

                {/* Heading */}
                <h2 className="font-serif text-3xl font-bold leading-snug text-neutral-900 mb-3">
                    Learning beyond<br />
                    the <span className="text-green-600">classroom walls</span>
                </h2>

                <p className="text-sm text-neutral-500 leading-relaxed max-w-lg mb-10">
                    VSGOI takes students beyond textbooks — into factories, tech campuses,
                    and production floors, giving them a firsthand look at how industries
                    operate at scale.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 divide-x divide-[#b6d9bc] border border-[#b6d9bc] rounded-2xl overflow-hidden mb-10">
                    {stats.map((s) => (
                        <div key={s.label} className="bg-[#f9fdf9] flex flex-col items-center text-center py-5 px-3 gap-1">
                            <span className="font-serif text-3xl font-bold text-neutral-900 leading-none">{s.num}</span>
                            <span className="text-xs text-neutral-400 font-medium leading-snug max-w-[80px]">{s.label}</span>
                        </div>
                    ))}
                </div>

                {/* Visit Cards */}
                <div className="grid grid-cols-3 gap-2.5 mb-10">
                    {visits.map(({ tag, name, sub, branch, accent, tagCls }) => (
                        <div key={name} className={`bg-white border-[0.5px] border-[#c4dbc6] border-l-[3px] ${accent} rounded-2xl p-4 flex flex-col gap-1.5`}>
                            <span className={`text-[10px] font-medium uppercase tracking-wide px-2 py-0.5 rounded-full w-fit ${tagCls}`}>{tag}</span>
                            <p className="text-sm font-medium text-neutral-800 leading-snug">{name}</p>
                            <p className="text-xs text-neutral-400">{sub}</p>
                            <p className="text-[10px] text-neutral-400 mt-1">
                                Branch: <span className="bg-green-50 text-green-700 font-medium px-1.5 py-0.5 rounded">{branch}</span>
                            </p>
                        </div>
                    ))}
                </div>

                {/* Banner */}
                <div className="bg-[#0c2213] rounded-2xl p-5 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center flex-shrink-0">
                        <Bus size={22} className="text-white" />
                    </div>
                    <p className="text-sm text-green-100 leading-relaxed">
                        From <span className="text-green-300 font-medium">TCS Lucknow to Parle-G factories and Mirza Limited</span> — every visit is a step closer to industry readiness, giving VSGOI students an edge before they even graduate.
                    </p>
                </div>
            </section>
            <Footer />
        </div>
    );
}