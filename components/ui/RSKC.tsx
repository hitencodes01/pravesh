export default function RSKC() {
    const stats = [
        { value: "50+", label: "Acres Campus" },
        { value: "6+", label: "Programs Offered" },
        { value: "2000+", label: "Students Enrolled" },
        { value: "25+", label: "Years of Excellence" },
    ];

    return (
        <section className=" relative overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#0f2044] to-[#1a3a6e] px-4 py-16 sm:py-20">
            {/* decorative circles */}
                    <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-blue-500/10" />
                    <div className="pointer-events-none absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-amber-400/10" />
            <div className="max-w-7xl mx-auto flex flex-col items-center gap-16">

                {/* ── Hero Block ── */}
                <div className="flex flex-col lg:flex-row gap-10 items-center">

                    {/* Left: Text */}
                    <div className="flex-1 flex flex-col gap-5">
                        <p className="text-blue-600 uppercase tracking-widest text-xs font-bold">
                            About VSGOI
                        </p>
                        <h1 className="text-3xl md:text-5xl font-extrabold text-amber-300 leading-tight">
                            Ragendra Swarup <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">
                                Knowledge City
                            </span>
                        </h1>
                        <div className="h-1 w-16 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500" />
                        <p className="text-white text-base leading-relaxed max-w-xl">
                            Dr. Virendra Swarup Memorial Trust Group of Institutions is situated at
                            Ragendra Swarup Knowledge City (RSKC) — a world-class educational complex
                            spreading over 50 acres of lush green and beautifully landscaped surroundings.
                            Visualized as a world-class center of learning by the Joint Secretary,
                            Board of Management, Dr. Alakhshendra Swarup, who has been a part of
                            renowned institutions including London School of Economics (UK), Lancaster
                            University (UK) and St. Stephen's College, Delhi.
                        </p>
                        <p className="text-white text-base leading-relaxed max-w-xl">
                            The Knowledge City is a self-contained township equipped with in-house
                            facilities to cater to the educational and other needs of every student.
                        </p>
                    </div>

                    {/* Right: Stats card */}
                    <div className="flex-shrink-0 w-full lg:w-80">
                        <div className="bg-white rounded-2xl border-2 border-black shadow-sm p-6 grid grid-cols-2 gap-6">
                            {stats.map((s) => (
                                <div key={s.label} className="flex flex-col items-center text-center gap-1 py-2">
                                    <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-indigo-600">
                                        {s.value}
                                    </span>
                                    <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                                        {s.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── Vision & Mission ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

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
        </section>
    );
}