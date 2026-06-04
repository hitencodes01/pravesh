"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Slide {
    id: number;
    src: string;
    alt: string;
    headline?: string;
    subline?: string;
    cta?: { label: string; href: string };
}

interface HeroSliderProps {
    slides?: Slide[];
    autoplayMs?: number;
    className?: string;
}

const DEFAULT_SLIDES: Slide[] = [
    {
        id: 2,
        src: "/images/pravesh.png",
        alt: "Students in computer lab",
        headline: "Admissions Open 2026–27",
        subline: "B.Tech · MBA · BCA · BBA · ITI · POLYTECHNIC",
        cta: { label: "Apply Now", href: "/admission" },
    },
    {
        id: 1,
        src: "/images/building.jpeg",
        alt: "VSGOI campus — aerial view",
        headline: "Shaping Tomorrow's Engineers",
        subline: "15+ years of academic excellence in technical education",
        cta: { label: "Explore Programs", href: "/courses" },
    },
    {
        id: 3,
        src: "/images/placement/placement1.jpeg",
        alt: "Placement drive at VSGOI",
        headline: "150+ Placement Partners",
        subline: "Top recruiters from IT, core, and emerging tech sectors",
        cta: { label: "View Placements", href: "/placements" },
    },
    {
        id: 4,
        src: "/images/b1.jpg",
        alt: "VSGOI convocation ceremony",
        headline: "Celebrate, Innovate, Lead",
        subline: "A vibrant campus life built for holistic growth",
        cta: { label: "Campus Life", href: "/campus-life" },
    },
];

export default function HeroSlider({
    slides = DEFAULT_SLIDES,
    autoplayMs = 5000,
    className,
}: HeroSliderProps) {
    const [current, setCurrent] = useState(0);
    const [paused, setPaused] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const goTo = useCallback(
        (index: number) => setCurrent((index + slides.length) % slides.length),
        [slides.length]
    );

    const prev = () => goTo(current - 1);
    const next = useCallback(() => goTo(current + 1), [current, goTo]);

    useEffect(() => {
        if (paused) return;
        timerRef.current = setTimeout(next, autoplayMs);
        return () => { if (timerRef.current) clearTimeout(timerRef.current); };
    }, [current, paused, next, autoplayMs]);

    const slide = slides[current];

    return (
        <div
            className={cn("w-full bg-white shadow-2xl shadow-black lg:py-2 sm:px-6 lg:px-24", className)}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            {/* ── outer card ── */}
            <div className="relative flex flex-col md:flex-row md:rounded-2xl overflow-hidden bg-gray-950 shadow-2xl">

                <div className="relative w-full md:w-[45%] aspect-[4/5] shrink-0">
                    {slides.map((s, i) => (
                        <div
                            key={s.id}
                            aria-hidden={i !== current}
                            className={cn(
                                "absolute inset-0 transition-opacity duration-700",
                                i === current ? "opacity-100" : "opacity-0 pointer-events-none"
                            )}
                        >
                            <Image
                                src={s.src}
                                alt={s.alt}
                                fill
                                sizes="(max-width: 768px) 100vw, 45vw"
                                className="object-cover object-center"
                                priority={i === 0}
                            />
                        </div>
                    ))}

                    {/* mobile gradient overlay — text readable on small screens */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent md:hidden" />

                    {/* mobile text overlay */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6 md:hidden">
                        {slide.headline && (
                            <h1
                                key={`mh-${current}`}
                                className="animate-fade-in-up mb-2 text-2xl font-bold leading-tight text-white drop-shadow-md"
                            >
                                {slide.headline}
                            </h1>
                        )}
                        {slide.subline && (
                            <p
                                key={`ms-${current}`}
                                className="animate-fade-in-up mb-4 text-sm text-white/80"
                                style={{ animationDelay: "80ms" }}
                            >
                                {slide.subline}
                            </p>
                        )}
                        {slide.cta && (
                            <Link
                                href={slide.cta.href}
                                className="inline-flex w-fit items-center gap-2 rounded-md bg-amber-500 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-amber-400"
                            >
                                {slide.cta.label}
                                <ChevronRight size={14} aria-hidden />
                            </Link>
                        )}
                        {/* mobile dots */}
                        <div className="mt-4 flex items-center gap-2">
                            {slides.map((s, i) => (
                                <button
                                    key={s.id}
                                    onClick={() => goTo(i)}
                                    aria-label={`Go to slide ${i + 1}`}
                                    className={cn(
                                        "rounded-full transition-all duration-300",
                                        i === current ? "h-2 w-5 bg-amber-400" : "h-2 w-2 bg-white/50"
                                    )}
                                />
                            ))}
                        </div>
                    </div>

                    {/* prev/next arrows — on image for mobile, hidden on md+ */}
                    <button
                        onClick={prev}
                        aria-label="Previous slide"
                        className="absolute left-3 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white transition hover:bg-black/60 md:hidden"
                    >
                        <ChevronLeft size={18} aria-hidden />
                    </button>
                    <button
                        onClick={next}
                        aria-label="Next slide"
                        className="absolute right-3 top-1/2 -translate-y-1/2 flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white transition hover:bg-black/60 md:hidden"
                    >
                        <ChevronRight size={18} aria-hidden />
                    </button>
                </div>

                <div className="hidden md:flex flex-col justify-center flex-1 px-10 lg:px-14 py-12 bg-gradient-to-br from-[#0a1628] via-[#0f2044] to-[#1a3a6e]">

                    {/* slide counter */}
                    <p className="mb-6 text-xs font-medium tracking-widest text-amber-400 uppercase">
                        {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
                    </p>

                    {slide.headline && (
                        <h1
                            key={`dh-${current}`}
                            className="animate-fade-in-up mb-4 text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight text-white"
                        >
                            {slide.headline}
                        </h1>
                    )}

                    {slide.subline && (
                        <p
                            key={`ds-${current}`}
                            className="animate-fade-in-up mb-8 text-sm lg:text-base text-white/60 leading-relaxed"
                            style={{ animationDelay: "80ms" }}
                        >
                            {slide.subline}
                        </p>
                    )}

                    {slide.cta && (
                        <Link
                            href={slide.cta.href}
                            className="inline-flex w-fit items-center gap-2 rounded-md bg-amber-500 px-6 py-3 text-sm font-semibold text-white shadow transition-colors hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber-400"
                        >
                            {slide.cta.label}
                            <ChevronRight size={15} aria-hidden />
                        </Link>
                    )}

                    {/* desktop dots + arrows */}
                    <div className="mt-12 flex items-center gap-4">
                        <button
                            onClick={prev}
                            aria-label="Previous slide"
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/60 transition hover:border-white/50 hover:text-white"
                        >
                            <ChevronLeft size={18} aria-hidden />
                        </button>
                        <button
                            onClick={next}
                            aria-label="Next slide"
                            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/60 transition hover:border-white/50 hover:text-white"
                        >
                            <ChevronRight size={18} aria-hidden />
                        </button>
                        <div className="ml-2 flex items-center gap-2">
                            {slides.map((s, i) => (
                                <button
                                    key={s.id}
                                    role="tab"
                                    aria-selected={i === current}
                                    aria-label={`Go to slide ${i + 1}`}
                                    onClick={() => goTo(i)}
                                    className={cn(
                                        "rounded-full transition-all duration-300",
                                        i === current
                                            ? "h-2 w-6 bg-amber-400"
                                            : "h-2 w-2 bg-white/25 hover:bg-white/50"
                                    )}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── progress bar ── */}
                {!paused && (
                    <div
                        key={current}
                        className="absolute bottom-0 left-0 h-[3px] bg-amber-400"
                        style={{ animation: `progress ${autoplayMs}ms linear forwards` }}
                    />
                )}
            </div>

            <style>{`
                @keyframes progress {
                    from { width: 0% }
                    to   { width: 100% }
                }
                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(14px); }
                    to   { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-up {
                    animation: fade-in-up 0.45s ease both;
                }
            `}</style>
        </div>
    );
}