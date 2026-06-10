"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const keywords = [
  "VSGOI",
  "VSGOI Kanpur",
  "VSGOI Group of Institutions",
  "Vikramajit Singh Sanatan Dharma Group of Institutions",
  "best college in Kanpur",
  "engineering college in Kanpur",
  "management college in Kanpur",
  "polytechnic college in Kanpur",
  "ITI college in Kanpur",
  "AKTU affiliated college",
  "BTEUP affiliated college",
  "NCVT approved ITI",
  "private college in Uttar Pradesh",
  "college admissions 2026",
  "placement focused college",
  "higher education Kanpur",
  "CMS Kanpur",
  "College of Management Studies",
  "CMS VSGOI",
  "BCA college in Kanpur",
  "BBA college in Kanpur",
  "MBA college in Kanpur",
  "best management college in Kanpur",
  "best BCA college in Kanpur",
  "best MBA college in Kanpur",
  "AKTU affiliated management college",
  "business administration college",
  "computer applications college",
  "management education Uttar Pradesh",
  "college admissions Kanpur",
  "professional courses Kanpur",
  "BTech",
  "B.Tech admission",
  "B.Tech college in Kanpur",
  "Computer Science Engineering",
  "Artificial Intelligence Engineering",
  "Mechanical Engineering",
  "Civil Engineering",
  "Electrical Engineering",
  "engineering admission 2026",
  "AKTU BTech",
  "JEE Main admission",
  "engineering placements",
  "engineering degree Uttar Pradesh",
  "Polytechnic",
  "Diploma Engineering",
  "Polytechnic admission",
  "Diploma college Kanpur",
  "Mechanical Diploma",
  "Civil Diploma",
  "Electrical Diploma",
  "Computer Science Diploma",
  "BTEUP Polytechnic",
  "JEECUP admission",
  "Diploma engineering Uttar Pradesh",
  "BCA",
  "Bachelor of Computer Applications",
  "BCA admission",
  "best BCA college in Kanpur",
  "computer applications degree",
  "software development course",
  "IT degree Kanpur",
  "computer science after 12th",
  "BCA placements",
  "BCA AKTU",
  "BBA",
  "Bachelor of Business Administration",
  "BBA admission",
  "business management course",
  "best BBA college in Kanpur",
  "management studies",
  "business administration degree",
  "BBA placements",
  "management education",
  "MBA",
  "Master of Business Administration",
  "MBA admission",
  "best MBA college in Kanpur",
  "MBA AKTU",
  "finance specialization",
  "marketing specialization",
  "human resource management",
  "business leadership",
  "management placements",
  "postgraduate management degree"
];


interface NavChild {
  label: string;
  href: string;
}


interface NavGroup {
  heading: string;
  children: NavChild[];
}

interface NavItem {
  label: string;
  href?: string;
  groups?: NavGroup[];
  children?: NavChild[]; // single-column dropdown
}

const NAV_ITEMS: NavItem[] = [
  {
    label: "Home",
    href: "/"
  }, {
    label: "About Us",
    groups: [
      {
        heading: "Institution",
        children: [
          { label: "About VSGOI", href: "/about" },
          { label: "Vision & Mission", href: "/vision" },
          { label: "AICTE Approvals", href: "/aicte" },
        ],
      },
      {
        heading: "Leadership",
        children: [
          { label: "Secretary", href: "/secretary" },
        ],
      },
    ],
  },
  {
    label: "Academics",
    groups: [
      {
        heading: "Programs",
        children: [
          { label: "B.Tech", href: "/BTECH" },
          { label: "MBA", href: "/MBA" },
          { label: "BBA", href: "/BBA" },
          { label: "BCA", href: "/BCA" },
          { label: "ITI", href: "/ITI" },
          { label: "POLYTECHNIC", href: "/POLYTECHNIC" },
        ],
      },
      {
        heading: "More",
        children: [
          { label: "Guest Lectures", href: "/guest-lectures" },
          { label: "Industrial Visits", href: "/industry-visits" },
          { label: "Technical Training", href: "/technical-training" },
        ],
      },
    ],
  },
  {
    label: "Admission",
    children: [
      { label: "Admission Procedure", href: "/procedure" },
      { label: "E-Brochure", href: "/brochure" },
      { label: "AICTE Scholarship Schemes", href: "/scholarships" },
    ],
  },
  {
    label: "Placements",
    href: "/placement"
  },
  {
    label: "Campus Life",
    groups: [
      {
        heading: "Facilities",
        children: [
          { label: "Infrastructure", href: "/facilities" },
        ],
      },
      {
        heading: "Happenings",
        children: [
          { label: "Events & Activities", href: "/events" },
          { label: "Clubs", href: "/clubs" },
          { label: "Media Coverage", href: "/media" },
        ],
      },
    ],
  },
  { label: "Contact Us", href: "/contact" },
];


function DesktopDropdown({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const show = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setOpen(true);
  };
  const hide = () => {
    timerRef.current = setTimeout(() => setOpen(false), 120);
  };

  useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current); }, []);

  const hasGroups = !!item.groups;
  const cols = item.groups?.length ?? 1;

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={show}
      onMouseLeave={hide}
    >
      <button
        className={cn(
          "flex items-center gap-1 px-3 py-2 text-[13.5px] font-medium text-slate-700 transition-colors hover:text-blue-700",
          open && "text-blue-700"
        )}
        aria-expanded={open}
        aria-haspopup="true"
      >
        {item.label}
        <ChevronDown
          size={13}
          className={cn("transition-transform duration-200", open && "rotate-180")}
          aria-hidden
        />
      </button>

      {open && (
        <div
          className={cn(
            "absolute left-0 top-full z-50 mt-1 rounded-lg border border-slate-100 bg-white shadow-xl ",
            hasGroups ? "min-w-[480px]" : "min-w-[220px]"
          )}
          onMouseEnter={show}
          onMouseLeave={hide}
        >
          {/* triangle pointer */}
          <div className="absolute -top-2 left-6 h-3 w-3 rotate-45 border-l border-t border-slate-100 bg-white" />

          {hasGroups ? (
            <div
              className="grid gap-0 p-4"
              style={{ gridTemplateColumns: `repeat(${cols}, minmax(140px, 1fr))` }}
            >
              {item.groups!.map((g) => (
                <div key={g.heading} className="px-2">
                  <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                    {g.heading}
                  </p>
                  <ul className="space-y-0.5">
                    {g.children.map((c) => (
                      <li key={c.href}>
                        <Link
                          href={c.href}
                          className="block rounded px-2 py-1.5 text-[13px] text-slate-600 transition-colors hover:bg-blue-50 hover:text-blue-700"
                          onClick={() => setOpen(false)}
                        >
                          {c.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ) : (
            <ul className="p-2">
              {item.children!.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="block rounded px-3 py-2 text-[13px] text-slate-600 transition-colors hover:bg-blue-50 hover:text-blue-700"
                    onClick={() => setOpen(false)}
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

// ─── mobile accordion item ────────────────────────────────────────────────────

function MobileAccordion({ item, onClose }: { item: NavItem; onClose: () => void }) {
  const [open, setOpen] = useState(false);
  const allChildren: NavChild[] = item.groups
    ? item.groups.flatMap((g) => g.children)
    : item.children ?? [];
  const hasChildren = allChildren.length > 0;

  if (!hasChildren) {
    return (
      <Link
        href={item.href!}
        onClick={onClose}
        className="flex items-center justify-between border-b border-slate-100 px-5 py-3.5 text-[14px] font-medium text-slate-700"
      >
        {item.label}
        <ChevronRight size={15} className="text-slate-400" aria-hidden />
      </Link>
    );
  }

  return (
    <div className="border-b border-slate-100">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between px-5 py-3.5 text-[14px] font-medium text-slate-700"
        aria-expanded={open}
      >
        {item.label}
        <ChevronDown
          size={15}
          className={cn("text-slate-400 transition-transform duration-200", open && "rotate-180")}
          aria-hidden
        />
      </button>

      {open && (
        <div className="bg-slate-50 px-5 pb-3 pt-1">
          {item.groups ? (
            item.groups.map((g) => (
              <div key={g.heading} className="mb-3">
                <p className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-slate-400">
                  {g.heading}
                </p>
                <ul className="space-y-0.5">
                  {g.children.map((c) => (
                    <li key={c.href}>
                      <Link
                        href={c.href}
                        onClick={onClose}
                        className="block rounded px-2 py-1.5 text-[13px] text-slate-600 hover:text-blue-700"
                      >
                        {c.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))
          ) : (
            <ul className="space-y-0.5">
              {item.children!.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    onClick={onClose}
                    className="block rounded px-2 py-1.5 text-[13px] text-slate-600 hover:text-blue-700"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

// ─── main navbar ──────────────────────────────────────────────────────────────

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // lock body scroll when mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-40 w-full bg-white transition-shadow duration-300 border-b-2 border-black",
          scrolled && "shadow-md"
        )}
      >
        <div className="mx-auto flex max-w-screen-xl items-center justify-between px-4 py-2 lg:px-6">
          {/* ── logo ── */}
          <Link href="/" className="shrink-0" aria-label="VSGOI home">
            <Image
              src="/pravesh/images/vsgoi.jpg"
              alt="VSGOI logo"
              width={160}
              height={52}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* ── desktop nav ── */}
          <nav aria-label="Main navigation" className="hidden items-center gap-0 lg:flex">
            {NAV_ITEMS.map((item) =>
              item.href && !item.children && !item.groups ? (
                <Link
                  key={item.label}
                  href={item.href}
                  className="px-3 py-2 text-[13.5px] font-medium text-slate-700 transition-colors hover:text-blue-700"
                >
                  {item.label}
                </Link>
              ) : (
                <DesktopDropdown key={item.label} item={item} />
              )
            )}
          </nav>

          {/* ── CTA + hamburger ── */}
          <div className="flex items-center gap-3">
            <Link
              href="/admission"
              className="hidden rounded-md bg-blue-700 px-4 py-2 text-[13px] font-semibold text-white transition-colors hover:bg-blue-800 sm:inline-flex"
            >
              Apply Now
            </Link>

            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="flex h-9 w-9 items-center justify-center rounded-md text-slate-600 hover:bg-slate-100 lg:hidden"
            >
              <Menu size={22} aria-hidden />
            </button>
          </div>
        </div>
      </header>

      {/* ── mobile drawer ── */}
      {/* backdrop */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden",
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={() => setMobileOpen(false)}
        aria-hidden
      />

      {/* drawer panel */}
      <div
        className={cn(
          "fixed right-0 top-0 z-50 flex h-full w-[300px] flex-col bg-white shadow-2xl transition-transform duration-300 lg:hidden",
          mobileOpen ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        {/* drawer header */}
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
          <Link href="/" onClick={() => setMobileOpen(false)}>
            <Image
              src="/pravesh/images/vsgoi.jpg"
              alt="VSGOI logo"
              width={120}
              height={40}
              className="h-10 w-auto object-contain"
            />
          </Link>
          <button
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            className="flex h-8 w-8 items-center justify-center rounded-md text-slate-500 hover:bg-slate-100"
          >
            <X size={20} aria-hidden />
          </button>
        </div>

        {/* drawer links */}
        <nav className="flex-1 overflow-y-auto" aria-label="Mobile navigation">
          {NAV_ITEMS.map((item) => (
            <MobileAccordion
              key={item.label}
              item={item}
              onClose={() => setMobileOpen(false)}
            />
          ))}
        </nav>

        {/* drawer footer CTA */}
        <div className="border-t border-slate-100 p-5">
          <Link
            href="/admission"
            onClick={() => setMobileOpen(false)}
            className="block w-full rounded-md bg-blue-700 py-2.5 text-center text-[14px] font-semibold text-white transition-colors hover:bg-blue-800"
          >
            Enquire Now
          </Link>
        </div>
      </div>
    </>
  );
}