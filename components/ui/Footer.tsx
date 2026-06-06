import Link from "next/link"

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About VSGOI", href: "/about" },
  { label: "Admissions", href: "/admission" },
  { label: "Placements", href: "/placements" },
  { label: "Campus Life", href: "/campus-life" },
  { label: "Contact Us", href: "/contact" },
]

const programmes = [
  { label: "B.Tech", href: "/academics/BTECH" },
  { label: "MBA", href: "/academics/MBA" },
  { label: "BBA", href: "/academics/BBA" },
  { label: "BCA", href: "/academics/BCA" },
  { label: "ITI", href: "/academics/ITI" },
  { label: "POLYTECHNIC", href: "/academics/POLYTECHNIC" },
]

const importantLinks = [
  { label: "NAAC Accreditation", href: "/naac" },
  { label: "NIRF Rankings", href: "/nirf" },
  { label: "Anti-Ragging Policy", href: "/anti-ragging" },
  { label: "Grievance Redressal", href: "/grievance" },
  { label: "RTI", href: "/rti" },
  { label: "Mandatory Disclosure", href: "/mandatory-disclosure" },
  { label: "Alumni", href: "/alumni" },
  { label: "Careers", href: "/careers" },
]

export default function Footer() {
  return (
    <footer
      aria-label="Site footer"
      className="relative overflow-hidden bg-gradient-to-br from-[#060e1f] via-[#0a1628] to-[#0f2044]"
    >
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-blue-500/10" />
      <div className="pointer-events-none absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-amber-400/10" />

      {/* Top section */}
      <div className="mx-auto max-w-7xl px-6 pt-14 pb-10 lg:px-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[2fr_1fr_1fr_1fr]">

          {/* Brand column */}
          <div className="flex flex-col gap-5">
            <div>
              <h2 className="text-base font-bold text-amber-300 leading-snug sm:text-lg">
                Dr. Virendra Swarup<br />
                Group of Institutions
              </h2>
              <address className="mt-3 not-italic">
                <p className="flex items-start gap-2 text-sm text-slate-400 leading-relaxed">
                  <svg viewBox="0 0 20 20" fill="none" className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-400/60" aria-hidden="true">
                    <path d="M10 2a6 6 0 00-6 6c0 4 6 10 6 10s6-6 6-10a6 6 0 00-6-6z" stroke="currentColor" strokeWidth="1.5" />
                    <circle cx="10" cy="8" r="2" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                  Ragendra Swarup Knowledge City,<br />
                  Unnao, Lucknow–Kanpur Highway,<br />
                  Uttar Pradesh
                </p>
              </address>
            </div>

            {/* Contact */}
            <div className="flex flex-col gap-2">
              <a
                href="tel:+917311105831"
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-amber-300 transition-colors duration-150"
                aria-label="Call us"
              >
                <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4 flex-shrink-0 text-amber-400/60" aria-hidden="true">
                  <path d="M3 3.5A1.5 1.5 0 014.5 2h1.757a1 1 0 01.96.714l.93 3.257a1 1 0 01-.29 1.016L6.6 8.1a11.05 11.05 0 004.3 4.3l1.114-1.257a1 1 0 011.016-.29l3.257.93A1 1 0 0117 12.743V14.5A1.5 1.5 0 0115.5 16C8.044 16 2 9.956 2 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                +91-7311105831
              </a>
              <a
                href="mailto:info@vsgoi.ac.in"
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-amber-300 transition-colors duration-150"
                aria-label="Email us"
              >
                <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4 flex-shrink-0 text-amber-400/60" aria-hidden="true">
                  <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M2 7l8 5 8-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                info@vsgoi.ac.in
              </a>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3" aria-label="Social media links">
              {[
                {
                  label: "Facebook",
                  href: "https://facebook.com/vsgoi.in",
                  icon: (
                    <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                      <path d="M11 10.5h2.5l.5-2.5H11V6.5c0-.7.2-1.5 1.5-1.5H14V2.5S12.8 2 11.6 2C9 2 7.5 3.7 7.5 6.3V8H5v2.5h2.5V18h3.5v-7.5z" />
                    </svg>
                  ),
                },
                {
                  label: "Instagram",
                  href: "https://www.instagram.com/vsgoi_unnao.in",
                  icon: (
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  ),
                },
              ].map((s) => (
                <Link
                  key={s.label}
                  href={s.href}
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${s.label}`}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-700 bg-slate-800/60 text-slate-400 hover:border-amber-400/50 hover:bg-amber-400/10 hover:text-amber-300 transition-all duration-150"
                >
                  {s.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Quick links">
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-widest text-amber-400">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2.5" role="list">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="group flex items-center gap-2 text-sm text-slate-400 hover:text-amber-300 transition-colors duration-150"
                  >
                    <span className="h-px w-3 bg-amber-400/30 transition-all duration-200 group-hover:w-4 group-hover:bg-amber-400" aria-hidden="true" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Programmes */}
          <nav aria-label="Academic programmes">
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-widest text-amber-400">
              Programmes
            </h3>
            <ul className="flex flex-col gap-2.5" role="list">
              {programmes.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="group flex items-center gap-2 text-sm text-slate-400 hover:text-amber-300 transition-colors duration-150"
                  >
                    <span className="h-px w-3 bg-amber-400/30 transition-all duration-200 group-hover:w-4 group-hover:bg-amber-400" aria-hidden="true" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Accreditation badges row */}
        <div className="mt-12 flex flex-wrap items-center gap-3">
          {["AICTE Approved", "UGC Recognized", "NAAC Accredited"].map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-amber-400/20 bg-amber-400/5 px-3 py-1 text-[11px] font-medium tracking-wide text-amber-300/70"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-600/50 to-transparent" />
      </div>

      {/* Bottom bar */}
      <div className="mx-auto max-w-7xl px-6 py-5 lg:px-10">
        <div className="flex flex-col items-center justify-between gap-3 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Dr. Virendra Swarup Group of Institutions. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:justify-end">
            {[
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "Terms of Use", href: "/terms" },
              { label: "Sitemap", href: "/sitemap.ts" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-xs text-slate-500 hover:text-amber-300 transition-colors duration-150"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}