import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";

export default function Vision() {
    return (
        <div>
            <Navbar />
            <div className="relative overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#0f2044] to-[#1a3a6e] px-4 py-16 sm:py-20 ">
                <h1 className="text-2xl md:text-4xl text-amber-400 text-center font-extrabold mb-5">Our Vision & Mission</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-blue-500/10" />
                    <div className="pointer-events-none absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-amber-400/10" />
                    {/* Vision */}
                    <div className="group relative bg-white rounded-2xl border border-gray-100 p-8 flex flex-col gap-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                        <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Label pill */}
                        <div className="flex items-center gap-3">
                            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-blue-50 text-blue-600 border border-blue-100">
                                Our Vision
                            </span>
                        </div>

                        <h2 className="text-2xl font-extrabold text-gray-900">
                            World-Class Academic Excellence
                        </h2>

                        <p className="text-gray-500 text-sm leading-relaxed">
                            To be a truly world-class institution of academic excellence with total
                            commitment to quality education, research, consultancy services, training,
                            ethics and human values — with a holistic concern for society and environment.
                        </p>
                    </div>

                    {/* Mission */}
                    <div className="group relative bg-white rounded-2xl border border-gray-100 p-8 flex flex-col gap-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden">
                        <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl bg-gradient-to-r from-indigo-500 to-violet-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Label pill */}
                        <div className="flex items-center gap-3">
                            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-indigo-50 text-indigo-600 border border-indigo-100">
                                Our Mission
                            </span>
                        </div>

                        <h2 className="text-2xl font-extrabold text-gray-900">
                            Globally Competent Leaders
                        </h2>

                        <p className="text-gray-500 text-sm leading-relaxed">
                            To nurture, develop and produce globally competent technocrats and business
                            leaders with a strong desire to excel as professionals and improve the quality
                            of human life, society and the environment.
                        </p>

                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}
