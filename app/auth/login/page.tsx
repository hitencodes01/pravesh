"use client";

import { useActionState, useState } from "react";
import { loginAction } from "@/actions/login.action";

const initialState = { error: null };

type Role = "admin" | "counsler";

const ROLES: { value: Role; label: string; desc: string; icon: React.ReactNode }[] = [
  {
    value: "admin",
    label: "Admin",
    desc: "Full system access",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5" aria-hidden="true">
        <circle cx="10" cy="7" r="3.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3 17c0-3.314 3.134-6 7-6s7 2.686 7 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14 3l1 1-4 4-2-2 1-1 1 1 3-3z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    value: "counsler",
    label: "Counsellor",
    desc: "Student advisory access",
    icon: (
      <svg viewBox="0 0 20 20" fill="none" className="w-5 h-5" aria-hidden="true">
        <circle cx="10" cy="7" r="3.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3 17c0-3.314 3.134-6 7-6s7 2.686 7 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function LoginPage() {
  const [state, formAction, isPending] = useActionState(loginAction, initialState);
  const [selectedRole, setSelectedRole] = useState<Role>("counsler");

  const fieldError =
    state?.error && typeof state.error === "object" ? state.error : null;
  const globalError =
    state?.error && typeof state.error === "string" ? state.error : null;

  return (
    <div className="min-h-svh flex font-serif bg-[#f5f3ee]">

      {/* ── Left decorative panel (hidden on mobile) ── */}
      <aside
        aria-hidden="true"
        className="relative hidden lg:flex flex-col w-[420px] flex-shrink-0 bg-[#1a2744] text-[#d4b97a] overflow-hidden"
      >
        {/* Dot-grid background */}
        <svg
          viewBox="0 0 400 600"
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 w-full h-full text-[#d4b97a] pointer-events-none"
        >
          {Array.from({ length: 9 }).map((_, col) =>
            Array.from({ length: 13 }).map((_, row) => (
              <circle
                key={`${col}-${row}`}
                cx={col * 50 + 25}
                cy={row * 50 + 25}
                r="1.5"
                fill="currentColor"
                opacity="0.18"
              />
            ))
          )}
        </svg>

        <div className="relative z-10 flex flex-col h-full px-10 py-12">
          {/* Emblem + year */}
          <div className="flex items-center gap-4">
            <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12 text-[#d4b97a] flex-shrink-0">
              <polygon points="24,4 44,14 44,34 24,44 4,34 4,14" stroke="currentColor" strokeWidth="1.5" fill="none" />
              <polygon points="24,10 38,17 38,31 24,38 10,31 10,17" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
              <circle cx="24" cy="24" r="5" stroke="currentColor" strokeWidth="1.5" fill="none" />
              <line x1="24" y1="4" x2="24" y2="19" stroke="currentColor" strokeWidth="1" opacity="0.6" />
              <line x1="24" y1="29" x2="24" y2="44" stroke="currentColor" strokeWidth="1" opacity="0.6" />
              <line x1="4" y1="14" x2="19" y2="21.5" stroke="currentColor" strokeWidth="1" opacity="0.6" />
              <line x1="29" y1="26.5" x2="44" y2="34" stroke="currentColor" strokeWidth="1" opacity="0.6" />
              <line x1="44" y1="14" x2="29" y2="21.5" stroke="currentColor" strokeWidth="1" opacity="0.6" />
              <line x1="19" y1="26.5" x2="4" y2="34" stroke="currentColor" strokeWidth="1" opacity="0.6" />
            </svg>
            <span className="font-mono text-[10px] tracking-[0.18em] text-[#9aafcf] uppercase">
              Est. 1987
            </span>
          </div>

          {/* Main copy */}
          <div className="mt-auto">
            <h1 className="text-4xl font-bold text-[#f0e6cc] leading-tight tracking-tight mb-1">
              Admission Cell
            </h1>
            <p className="font-mono text-[11px] tracking-[0.08em] text-[#9aafcf] uppercase">
              Staff Management Portal
            </p>
            <div className="w-10 h-0.5 bg-[#d4b97a] opacity-60 my-6" />
            <ul className="flex flex-col gap-3">
              {[
                "Manage student applications",
                "Coordinate counselling sessions",
                "Track admission progress",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-[#b8cce0] font-sans">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d4b97a] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-12 text-[11px] text-[#4a5e75] font-sans leading-relaxed">
            Authorised access only. All activity is monitored and logged.
          </p>
        </div>
      </aside>

      {/* ── Right / form area ── */}
      <main className="flex-1 flex items-center justify-center bg-[#f5f3ee] p-6 md:p-10">
        <div className="w-full max-w-[420px]">

          {/* Mobile-only logo */}
          <div className="lg:hidden mb-6 text-[#1a2744]">
            <svg viewBox="0 0 32 32" fill="none" className="w-9 h-9">
              <polygon points="16,2 30,9 30,23 16,30 2,23 2,9" stroke="currentColor" strokeWidth="1.5" fill="none" />
              <circle cx="16" cy="16" r="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
            </svg>
          </div>

          {/* Header */}
          <div className="mb-8">
            <h2 className="text-[2rem] font-bold text-[#1a2744] tracking-tight leading-tight mb-1">
              Welcome back
            </h2>
            <p className="text-sm text-gray-500 font-sans">
              Sign in to your Admission Cell account
            </p>
          </div>

          {/* Global error */}
          {globalError && (
            <div
              role="alert"
              className="flex items-center gap-2.5 bg-red-50 border border-red-200 border-l-[3px] border-l-red-500 rounded-lg px-4 py-3 mb-6 text-sm text-red-800 font-sans"
            >
              <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4 flex-shrink-0" aria-hidden="true">
                <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
                <path d="M8 5v3.5M8 11h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              {globalError}
            </div>
          )}

          <form action={formAction} noValidate className="flex flex-col gap-5">

            {/* Role selector */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[11px] font-semibold text-gray-600 uppercase tracking-widest font-sans">
                Sign in as
              </span>
              {/* Hidden input carries the value */}
              <input type="hidden" name="role" value={selectedRole} />
              <div className="grid grid-cols-2 gap-3">
                {ROLES.map((r) => (
                  <button
                    key={r.value}
                    type="button"
                    onClick={() => setSelectedRole(r.value)}
                    className={[
                      "flex items-center gap-3 px-4 py-3 rounded-xl border-[1.5px] text-left transition-all duration-150 font-sans cursor-pointer",
                      selectedRole === r.value
                        ? "bg-[#1a2744] border-[#1a2744] text-[#f0e6cc]"
                        : "bg-white border-[#d1cfc8] text-gray-700 hover:border-gray-400",
                    ].join(" ")}
                    aria-pressed={selectedRole === r.value}
                  >
                    <span className={selectedRole === r.value ? "text-[#d4b97a]" : "text-gray-400"}>
                      {r.icon}
                    </span>
                    <span>
                      <span className="block text-sm font-semibold leading-tight">{r.label}</span>
                      <span className={`block text-[11px] leading-tight mt-0.5 ${selectedRole === r.value ? "text-[#9aafcf]" : "text-gray-400"}`}>
                        {r.desc}
                      </span>
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-[11px] font-semibold text-gray-600 uppercase tracking-widest font-sans">
                Email address
              </label>
              <div className="relative">
                <svg viewBox="0 0 20 20" fill="none" className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" aria-hidden="true">
                  <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M2 7l8 5 8-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  placeholder="you@institution.edu"
                  aria-describedby={fieldError?.email ? "email-error" : undefined}
                  className={[
                    "w-full h-12 pl-10 pr-4 rounded-xl border-[1.5px] text-[0.95rem] font-sans text-gray-900 bg-white outline-none transition-all duration-150",
                    "placeholder:text-gray-300",
                    "hover:border-gray-400",
                    "focus:border-[#1a2744] focus:ring-2 focus:ring-[#1a2744]/10",
                    fieldError?.email
                      ? "border-red-400 focus:border-red-500 focus:ring-red-100"
                      : "border-[#d1cfc8]",
                  ].join(" ")}
                />
              </div>
              {fieldError?.email && (
                <p id="email-error" className="text-xs text-red-600 font-sans">
                  {fieldError.email[0]}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="password" className="text-[11px] font-semibold text-gray-600 uppercase tracking-widest font-sans">
                Password
              </label>
              <div className="relative">
                <svg viewBox="0 0 20 20" fill="none" className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" aria-hidden="true">
                  <rect x="4" y="8" width="12" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M7 8V6a3 3 0 016 0v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="10" cy="13" r="1.5" fill="currentColor" />
                </svg>
                <input
                  type="password"
                  id="password"
                  name="password"
                  autoComplete="current-password"
                  placeholder="Enter your password"
                  aria-describedby={fieldError?.password ? "password-error" : undefined}
                  className={[
                    "w-full h-12 pl-10 pr-4 rounded-xl border-[1.5px] text-[0.95rem] font-sans text-gray-900 bg-white outline-none transition-all duration-150",
                    "placeholder:text-gray-300",
                    "hover:border-gray-400",
                    "focus:border-[#1a2744] focus:ring-2 focus:ring-[#1a2744]/10",
                    fieldError?.password
                      ? "border-red-400 focus:border-red-500 focus:ring-red-100"
                      : "border-[#d1cfc8]",
                  ].join(" ")}
                />
              </div>
              {fieldError?.password && (
                <p id="password-error" className="text-xs text-red-600 font-sans">
                  {fieldError.password[0]}
                </p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isPending}
              aria-busy={isPending}
              className="mt-1 h-13 w-full flex items-center justify-center gap-2 bg-[#1a2744] hover:bg-[#243760] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed text-[#f0e6cc] text-[0.975rem] font-semibold font-sans tracking-wide rounded-xl transition-all duration-150 cursor-pointer"
            >
              {isPending ? (
                <>
                  <span className="w-4 h-4 rounded-full border-2 border-[#f0e6cc]/30 border-t-[#f0e6cc] animate-spin" aria-hidden="true" />
                  Signing in…
                </>
              ) : (
                <>
                  Sign in
                  <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" aria-hidden="true">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </>
              )}
            </button>
          </form>

          <p className="mt-5 text-center text-[13px] text-gray-400 font-sans">
            Having trouble signing in?{" "}
            <a href="mailto:admin@institution.edu" className="text-[#1a2744] underline underline-offset-2 hover:opacity-70 transition-opacity">
              Contact IT support
            </a>
          </p>
        </div>
      </main>
    </div>
  );
}