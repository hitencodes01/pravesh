"use client";

import { useRef } from "react";


interface Company {
    name: string;
    logo: string;
}



const COMPANIES: Company[] = [
    { name: "TCS", logo: "/images/companies/tcs.svg" },
    { name: "Infosys", logo: "/images/companies/infosys.svg" },
    { name: "Wipro", logo: "/images/companies/wipro.svg" },
    { name: "HCL", logo: "/images/companies/hcl.svg" },
    { name: "Accenture", logo: "/images/companies/accenture.svg" },
    { name: "Tech Mahindra", logo: "/images/companies/mahindra.svg" },
    { name: "IBM", logo: "/images/companies/icons8-ibm.svg" },
    // { name: "L&T", logo: "/images/companies/lnt.svg" },
    // { name: "BPCL", logo: "/images/companies/bpcl.svg" },
    { name: "Amazon", logo: "/images/companies/icons8-amazon.svg" },
    { name: "Microsoft", logo: "/images/companies/icons8-microsoft.svg" },
    // { name: "Deloitte", logo: "/images/companies/deloitte.svg" },
    // { name: "KPMG", logo: "/images/companies/kpmg.svg" },
];


export default function PlacementMarquee() {
    const trackRef = useRef<HTMLDivElement>(null);

    const doubled = [...COMPANIES, ...COMPANIES];

    return (
        <section className="w-full overflow-hidden bg-white py-10">
            {/* heading */}
            <div className="mb-8 px-4 text-center">
                <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-blue-600">
                    Our Students Work At
                </p>
                <h2 className="text-2xl font-bold text-slate-800 sm:text-3xl">
                    Top Recruiters
                </h2>
                <p className="mx-auto mt-2 max-w-xl text-sm text-slate-500">
                    150+ companies have hired our graduates — from Fortune 500s to fast-growing startups.
                </p>
            </div>

            {/* marquee track */}
            <div
                className="relative"
                onMouseEnter={() => trackRef.current?.style.setProperty("animation-play-state", "paused")}
                onMouseLeave={() => trackRef.current?.style.setProperty("animation-play-state", "running")}
            >
                {/* left fade */}
                <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent" />
                {/* right fade */}
                <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent" />

                <div
                    ref={trackRef}
                    className="flex w-max gap-6"
                    style={{ animation: "marquee 30s linear infinite" }}
                >
                    {doubled.map((company, i) => (
                        <div
                            key={`${company.name}-${i}`}
                            className="flex h-20 w-40 shrink-0 items-center justify-center rounded-xl border border-slate-100 bg-white px-5 shadow-lg shadow-black transition-shadow hover:shadow-md"
                            title={company.name}
                        >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src={company.logo}
                                alt={company.name}
                                className="max-h-10 w-auto object-contain grayscale transition-all duration-300 hover:grayscale-0"
                                onError={(e) => {
                                    // fallback: show company name as text if logo missing
                                    const parent = (e.target as HTMLImageElement).parentElement;
                                    if (parent) {
                                        (e.target as HTMLImageElement).style.display = "none";
                                        if (!parent.querySelector("span")) {
                                            const span = document.createElement("span");
                                            span.textContent = company.name;
                                            span.className = "text-xs font-semibold text-slate-500 text-center";
                                            parent.appendChild(span);
                                        }
                                    }
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* keyframe */}
            <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
        </section>
    );
}