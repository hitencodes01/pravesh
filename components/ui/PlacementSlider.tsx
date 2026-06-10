"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface PlacementSlide {
    id: number;
    image: string;
    alt: string;
}

const placements: PlacementSlide[] = [
    { id: 5, image: "/images/placement/p6.jpg", alt: "placement" },
    { id: 1, image: "/images/placement/p7.jpeg", alt: "placement" },
    { id: 2, image: "/images/placement/p2.jpg", alt: "placement" },
    { id: 4, image: "/images/placement/p8.jpeg", alt: "placement" },
    { id: 3, image: "/images/placement/p3.jpg", alt: "placement" },
];

interface PlacementCarouselProps {
    autoplayMs?: number;
    className?: string;
}

export default function PlacementCarousel({
    autoplayMs = 4000,
    className,
}: PlacementCarouselProps) {
    const [current, setCurrent] = useState(0);
    const [paused, setPaused] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const goTo = useCallback(
        (index: number) => {
            setCurrent((index + placements.length) % placements.length);
        },
        []
    );

    const prev = () => goTo(current - 1);

    const next = useCallback(() => {
        goTo(current + 1);
    }, [current, goTo]);

    useEffect(() => {
        if (paused) return;
        timerRef.current = setTimeout(next, autoplayMs);
        return () => {
            if (timerRef.current) clearTimeout(timerRef.current);
        };
    }, [current, paused, next, autoplayMs]);

    if (!placements.length) return null;

    return (
        <section
            className={cn(
                " bg-gray-100",
                className
            )}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
        >
            <div className="w-full md:max-w-xl md:mx-auto md:px-6  lg:max-w-2xl md:py-3">
                <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight text-center">Our Proud Placements</h1>
                <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500" />
                {/* 1:1 Aspect Ratio Container */}
                <div className="relative w-full aspect-square overflow-hidden md:rounded-2xl shadow-2xl shadow-black ">
                    {placements.map((placement, i) => (
                        <div
                            key={placement.id}
                            className={cn(
                                "absolute inset-0 transition-opacity duration-700",
                                i === current
                                    ? "opacity-100"
                                    : "pointer-events-none opacity-0"
                            )}
                        >
                            <Image
                                src={`/pravesh/${placement.image}`}
                                alt={placement.alt}
                                fill
                                priority={i === 0}
                                className="object-cover object-center brightness-110 saturate-105"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r ]" />
                        </div>
                    ))}

                    {/* Navigation */}
                    <button
                        onClick={prev}
                        className="absolute left-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition hover:bg-black/60"
                        aria-label="Previous"
                    >
                        <ChevronLeft size={20} />
                    </button>

                    <button
                        onClick={next}
                        className="absolute right-3 top-1/2 z-20 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur-sm transition hover:bg-black/60"
                        aria-label="Next"
                    >
                        <ChevronRight size={20} />
                    </button>

                    {/* Indicators */}
                    <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
                        {placements.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => goTo(i)}
                                className={cn(
                                    "transition-all duration-300",
                                    i === current
                                        ? "h-2.5 w-8 rounded-full bg-amber-400"
                                        : "h-2.5 w-2.5 rounded-full bg-white/50"
                                )}
                            />
                        ))}
                    </div>

                    {/* Progress Bar */}
                    {!paused && (
                        <div
                            key={current}
                            className="absolute bottom-0 left-0 h-[3px] bg-amber-400 z-20"
                            style={{
                                animation: `progress ${autoplayMs}ms linear forwards`,
                            }}
                        />
                    )}
                </div>
            </div>
            <style>{`
                @keyframes progress {
                    from { width: 0%; }
                    to { width: 100%; }
                }
            `}</style>
        </section>
    );
}