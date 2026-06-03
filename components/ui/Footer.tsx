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

export default  function Footer() {
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
                href="tel:+915122345678"
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-amber-300 transition-colors duration-150"
                aria-label="Call us"
              >
                <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4 flex-shrink-0 text-amber-400/60" aria-hidden="true">
                  <path d="M3 3.5A1.5 1.5 0 014.5 2h1.757a1 1 0 01.96.714l.93 3.257a1 1 0 01-.29 1.016L6.6 8.1a11.05 11.05 0 004.3 4.3l1.114-1.257a1 1 0 011.016-.29l3.257.93A1 1 0 0117 12.743V14.5A1.5 1.5 0 0115.5 16C8.044 16 2 9.956 2 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                +91 512 234 5678
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
                // {
                //   label: "YouTube",
                //   href: "https://youtube.com/vsgoi",
                //   icon: (
                //     <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                //       <path d="M17.5 6.5s-.2-1.3-.8-1.9c-.7-.8-1.6-.8-2-.8C12.5 3.6 10 3.6 10 3.6s-2.5 0-4.7.2c-.4 0-1.3 0-2 .8C2.7 5.2 2.5 6.5 2.5 6.5S2.3 8 2.3 9.5v1.4c0 1.5.2 3 .2 3s.2 1.3.8 1.9c.7.8 1.7.7 2.2.8C6.9 16.7 10 16.7 10 16.7s2.5 0 4.7-.3c.4 0 1.3 0 2-.8.6-.6.8-1.9.8-1.9s.2-1.5.2-3V9.5c0-1.5-.2-3-.2-3zM8.4 12.7V7.3l5.4 2.7-5.4 2.7z" />
                //     </svg>
                //   ),
                // },
                {
                  label: "LinkedIn",
                  href: "https://linkedin.com/school/vsgoi",
                  icon: (
                    <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4" aria-hidden="true">
                      <path d="M5 3.5A1.5 1.5 0 113.5 5 1.5 1.5 0 015 3.5zM4 7h2v9H4zm5 0h1.9v1.2h.1A2.2 2.2 0 0113 7c2.1 0 2.5 1.4 2.5 3.2V16H14v-5.3c0-.8 0-1.9-1.1-1.9s-1.4.9-1.4 1.8V16H9z" />
                    </svg>
                  ),
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow us on ${s.label}`}
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-700 bg-slate-800/60 text-slate-400 hover:border-amber-400/50 hover:bg-amber-400/10 hover:text-amber-300 transition-all duration-150"
                >
                  {s.icon}
                </a>
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
              { label: "Sitemap", href: "/sitemap.xml" },
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