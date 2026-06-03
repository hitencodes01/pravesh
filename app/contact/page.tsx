import Navbar from '@/components/ui/Navbar'
import { Globe, Mail, Phone, MapPin, Clock, ChevronRight, Send } from 'lucide-react'
import Link from 'next/link'

// ─── data ─────────────────────────────────────────────────────────────────────

const contactCards = [
    {
        icon: Mail,
        label: "Email Us",
        value: "info@vsgoi.in",
        href: "mailto:info@vsgoi.in",
        color: "bg-blue-50 text-blue-600",
        border: "border-blue-100",
        hover: "hover:border-blue-300 hover:shadow-blue-100",
    },
    {
        icon: Phone,
        label: "Call Us",
        value: "+91 73111 05831",
        href: "tel:+917311105831",
        color: "bg-amber-50 text-amber-600",
        border: "border-amber-100",
        hover: "hover:border-amber-300 hover:shadow-amber-100",
    },
    {
        icon: Globe,
        label: "Website",
        value: "www.vsgoi.in",
        href: "https://vsgoi.in",
        color: "bg-green-50 text-green-600",
        border: "border-green-100",
        hover: "hover:border-green-300 hover:shadow-green-100",
    },
    {
        icon: MapPin,
        label: "Address",
        value: "Sitapur Road, Lucknow, UP",
        href: "https://maps.google.com/?q=VSGOI+Lucknow",
        color: "bg-purple-50 text-purple-600",
        border: "border-purple-100",
        hover: "hover:border-purple-300 hover:shadow-purple-100",
    },
]

// ─── page ─────────────────────────────────────────────────────────────────────

export default function ContactPage() {
    return (
        <>
            <Navbar />

            <main className="min-h-screen bg-slate-50">

                {/* ── hero strip ── */}
                <section className="relative overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#0f2044] to-[#1a3a6e] px-4 py-16 text-center sm:py-20">
                    {/* decorative circles */}
                    <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-blue-500/10" />
                    <div className="pointer-events-none absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-amber-400/10" />

                    <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-amber-400">
                        Get In Touch
                    </p>
                    <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                        We'd Love to Hear<br className="hidden sm:block" /> From You
                    </h1>
                    <p className="mx-auto mt-4 max-w-lg text-sm text-slate-300 sm:text-base">
                        Have questions about admissions, courses, or campus life?
                        Our team is here to help — reach out any time.
                    </p>
                </section>

                {/* ── contact cards ── */}
                <section className="mx-auto -mt-8 max-w-screen-lg px-4 sm:px-6">
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {contactCards.map(({ icon: Icon, label, value, href, color, border, hover }) => (
                            <Link
                                key={label}
                                href={href}
                                target={href.startsWith("http") ? "_blank" : undefined}
                                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                                className={`group flex flex-col items-center gap-3 rounded-2xl border bg-white p-6 text-center shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-md ${border} ${hover}`}
                            >
                                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${color}`}>
                                    <Icon size={22} aria-hidden />
                                </div>
                                <div>
                                    <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-400">
                                        {label}
                                    </p>
                                    <p className="mt-0.5 text-[13px] font-semibold text-slate-700 group-hover:text-blue-700 transition-colors">
                                        {value}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

                {/* ── map + CTA ── */}
                <section className="mx-auto mt-10 max-w-screen-lg px-4 pb-16 sm:px-6">
                    <div className="grid gap-6 lg:grid-cols-5">

                        {/* map embed */}
                        <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-sm lg:col-span-3">
                            <iframe
                                title="VSGOI Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114292.30308645674!2d80.37122632824261!3d26.467508997813667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c4000c030f663%3A0x84d8250bd5d1cebd!2sDr.%20Virendra%20Swarup%20Memorial%20Trust%20Group%20of%20Institutions!5e0!3m2!1sen!2sin!4v1779786034146!5m2!1sen!2sin"
                                width="100%"
                                height="340"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full"
                            />

                        </div>

                        {/* CTA card */}
                        <div className="flex flex-col justify-between gap-6 lg:col-span-2">

                            {/* query CTA */}
                            <div className="flex flex-col gap-4 rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-700 to-blue-900 p-6 text-white shadow-sm">
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15">
                                    <Send size={18} aria-hidden />
                                </div>
                                <div>
                                    <h2 className="text-lg font-bold">Fill a Query Form</h2>
                                    <p className="mt-1 text-[13px] text-blue-100">
                                        Our team will reach you within <span className="font-semibold text-amber-300">12 hours</span>.
                                    </p>
                                </div>
                                <Link
                                    href="/admission"
                                    className="inline-flex items-center gap-1.5 self-start rounded-lg bg-amber-400 px-4 py-2 text-[13px] font-semibold text-slate-900 transition-colors hover:bg-amber-300"
                                >
                                    Submit Enquiry <ChevronRight size={14} aria-hidden />
                                </Link>
                            </div>

                            {/* office hours */}
                            <div className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                                <div className="flex items-center gap-2 text-slate-700">
                                    <Clock size={16} className="text-blue-600" aria-hidden />
                                    <span className="text-[13px] font-semibold">Office Hours</span>
                                </div>
                                {[
                                    { day: "Mon – Sat", time: "9:00 AM – 5:00 PM" },
                                    { day: "Sunday", time: "Closed" },
                                ].map(({ day, time }) => (
                                    <div key={day} className="flex items-center justify-between border-t border-slate-100 pt-2">
                                        <span className="text-[12px] text-slate-500">{day}</span>
                                        <span className={`text-[12px] font-medium ${time === "Closed" ? "text-red-500" : "text-slate-700"}`}>
                                            {time}
                                        </span>
                                    </div>
                                ))}
                            </div>

                        </div>
                    </div>
                </section>

            </main>
        </>
    )
}