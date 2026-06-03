export default function Banner() {
    return (
        <div className="w-full relative overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#0f2044] to-[#1a3a6e] text-white">
            <div className="max-w-7xl mx-auto px-4 py-2.5 flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-4">

                {/* Left — Institution name + affiliation stacked */}
                <div className="flex flex-col items-center sm:items-start gap-0.5 text-center sm:text-left">
                    <span className="text-sm sm:text-base md:text-2xl font-extrabold tracking-tight leading-snug whitespace-nowrap">
                        Dr. Virendra Swarup Group of Institutions
                    </span>
                    <span className="text-[10px] text-white font-medium whitespace-nowrap tracking-wide">
                        Approved by AICTE &amp; Affiliated to AKTU / CSJMU / BTE / NCVT / SCVT
                    </span>
                </div>

                {/* Divider — visible only on mobile between the two rows */}
                <span className="block sm:hidden h-px w-16 bg-white/20 rounded-full" />

                {/* Right — Location */}
                <div className="flex items-center gap-2 text-xs md:text-xl text-blue-100 font-bold whitespace-nowrap">
                    Ragendra Swarup Knowledge City, Kanpur–Lucknow Highway
                </div>

            </div>
        </div>
    );
}