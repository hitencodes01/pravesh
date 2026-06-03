// PlacementHighlights.tsx
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import PlacementCarousel from "@/components/ui/PlacementSlider";
import { Award, Building2, Globe, TrendingUp, Users, BadgeCheck } from "lucide-react";

const stats = [
    { num: "300+", label: "Company tie-ups" },
    { num: "500+", label: "Students placed every year" },
    { num: "100%", label: "Placement record" },
];

const badges = [
    { icon: Building2, label: "Top MNCs" },
    { icon: Globe, label: "Global opportunities" },
    { icon: BadgeCheck, label: "Industry-ready training" },
    { icon: TrendingUp, label: "Career growth support" },
    { icon: Users, label: "Alumni network" },
];

export default function PlacementHighlights() {
    return (
        <div>
            <Navbar />
            <section className="bg-[#f8f6f1] px-6 py-12">
                {/* Eyebrow */}
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-0.5 bg-amber-700" />
                    <span className="text-xs font-medium tracking-widest uppercase text-amber-700">
                        Placements at VSGOI
                    </span>
                </div>

                {/* Heading */}
                <h2 className="font-serif text-3xl font-bold leading-snug text-neutral-900 mb-3">
                    Careers that begin<br />
                    with <span className="text-amber-700">the right skills</span>
                </h2>

                <p className="text-sm text-neutral-500 leading-relaxed max-w-lg mb-10">
                    At VSGOI, we don't just prepare students for exams — we prepare them
                    for the world. Our placement cell works tirelessly to connect talent
                    with opportunity, year after year.
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 divide-x divide-[#e0d9cc] border border-[#e0d9cc] rounded-2xl overflow-hidden mb-10">
                    {stats.map((s) => (
                        <div key={s.label} className="bg-[#fffdf8] flex flex-col items-center text-center py-5 px-3 gap-1">
                            <span className="font-serif text-3xl font-bold text-neutral-900 leading-none">
                                {s.num}
                            </span>
                            <span className="text-xs text-neutral-400 font-medium leading-snug max-w-[80px]">
                                {s.label}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Badges */}
                <div className="flex flex-wrap gap-2.5 mb-10">
                    {badges.map(({ icon: Icon, label }) => (
                        <div
                            key={label}
                            className="flex items-center gap-2 bg-white border border-[#d4c9b0] rounded-full px-4 py-1.5 text-sm font-medium text-neutral-700"
                        >
                            <Icon size={15} className="text-amber-700" />
                            {label}
                        </div>
                    ))}
                </div>

                {/* Banner */}
                <div className="bg-neutral-900 rounded-2xl p-5 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-amber-700 flex items-center justify-center flex-shrink-0">
                        <Award size={22} className="text-white" />
                    </div>
                    <p className="text-sm text-[#e8e2d6] leading-relaxed">
                        Our students are{" "}
                        <span className="text-amber-300 font-medium">leading the world</span>{" "}
                        with the skills from VSGOI — placed in top MNCs and high-growth
                        startups across India and beyond.
                    </p>
                </div>
            </section>
            <PlacementCarousel />
            <Footer />
        </div>
    );
}