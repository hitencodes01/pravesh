import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import { Wrench } from "lucide-react";

const stats = [
    { num: "6+", label: "Branches with dedicated training" },
    { num: "Industry", label: "Grade tools & software" },
    { num: "100%", label: "Practical curriculum" },
];

const branches = [
    {
        tag: "CSE · IT", name: "Computer Science", sub: "Software & web development",
        accent: "border-blue-600", tagCls: "bg-blue-50 text-blue-800",
        skills: ["Python", "Java", "React", "DSA"],
    },
    {
        tag: "EE · ECE", name: "Electrical & Electronics", sub: "Circuit design & embedded systems",
        accent: "border-amber-600", tagCls: "bg-amber-50 text-amber-800",
        skills: ["PLC", "Arduino", "AutoCAD"],
    },
    {
        tag: "ME", name: "Mechanical Engg.", sub: "Design, manufacturing & simulation",
        accent: "border-red-600", tagCls: "bg-red-50 text-red-800",
        skills: ["CAD", "ANSYS", "SolidWorks"],
    },
    {
        tag: "CE", name: "Civil Engg.", sub: "Structural analysis & planning",
        accent: "border-teal-600", tagCls: "bg-teal-50 text-teal-800",
        skills: ["AutoCAD", "STAAD Pro", "Revit"],
    },
    {
        tag: "MBA", name: "Management", sub: "Business analytics & strategy",
        accent: "border-green-600", tagCls: "bg-green-50 text-green-800",
        skills: ["Excel", "Tableau", "SAP"],
    },
    {
        tag: "CA", name: "Computer Applications", sub: "Websites and Applications",
        accent: "border-pink-600", tagCls: "bg-pink-50 text-pink-800",
        skills: ["WEB", "Software", "Networking"],
    },
];

export default function TechnicalTraining() {
    return (
        <div>
            <Navbar />
            <section className="bg-[#f4f2f8] px-6 py-12">
                {/* Eyebrow */}
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-0.5 bg-violet-700" />
                    <span className="text-xs font-medium tracking-widest uppercase text-violet-700">
                        Technical Training at VSGOI
                    </span>
                </div>

                {/* Heading */}
                <h2 className="font-serif text-3xl font-bold leading-snug text-neutral-900 mb-3">
                    Skills built for<br />
                    the <span className="text-violet-700">real industry</span>
                </h2>

                <p className="text-sm text-neutral-500 leading-relaxed max-w-lg mb-10">
                    At VSGOI, technical training goes beyond theory — students gain hands-on,
                    industry-relevant skills in their respective branches, making them
                    job-ready from day one.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 divide-x divide-[#c4b5e8] border border-[#c4b5e8] rounded-2xl overflow-hidden mb-10">
                    {stats.map((s) => (
                        <div key={s.label} className="bg-[#faf9fe] flex flex-col items-center text-center py-5 px-3 gap-1">
                            <span className="font-serif text-3xl font-bold text-neutral-900 leading-none">{s.num}</span>
                            <span className="text-xs text-neutral-400 font-medium leading-snug max-w-[90px]">{s.label}</span>
                        </div>
                    ))}
                </div>

                {/* Branch Cards */}
                <div className="grid grid-cols-3 gap-2.5 mb-10">
                    {branches.map(({ tag, name, sub, accent, tagCls, skills }) => (
                        <div key={name} className={`bg-white border-[0.5px] border-[#d0c4e8] border-l-[3px] ${accent} rounded-2xl p-4 flex flex-col gap-1.5`}>
                            <span className={`text-[10px] font-medium uppercase tracking-wide px-2 py-0.5 rounded-full w-fit ${tagCls}`}>{tag}</span>
                            <p className="text-sm font-medium text-neutral-800 leading-snug">{name}</p>
                            <p className="text-xs text-neutral-400">{sub}</p>
                            <div className="flex flex-wrap gap-1 mt-1">
                                {skills.map((s) => (
                                    <span key={s} className="text-[10px] bg-violet-50 text-violet-700 font-medium px-1.5 py-0.5 rounded">
                                        {s}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Banner */}
                <div className="bg-[#1a0e2e] rounded-2xl p-5 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-violet-700 flex items-center justify-center flex-shrink-0">
                        <Wrench size={22} className="text-white" />
                    </div>
                    <p className="text-sm text-violet-200 leading-relaxed">
                        Every branch at VSGOI has a{" "}
                        <span className="text-violet-300 font-medium">dedicated technical training track</span>{" "}
                        — real tools, real software, real workflows — so students don't just learn, they practise industry from college itself.
                    </p>
                </div>
            </section>
            <Footer />
        </div>
    );
}