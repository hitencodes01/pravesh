"use client";

// just to add in github

import { useState, useRef } from "react";
import { cn } from "../../lib/utils";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/ui/Navbar";

const SHEET_URL = "https://script.google.com/macros/s/AKfycbwIweKEQNAzgkjOj83yqM_hFlS1xt9VVTA7wVLJTSNlLKyp2qFhrNaLeptfE7OszLY1/exec";

function Field({ label, required, error, children }: {
    label: string; required?: boolean; error?: string; children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col gap-1">
            <label className="text-[13px] font-medium text-slate-700">
                {label}{required && <span className="ml-0.5 text-red-500">*</span>}
            </label>
            {children}
            {error && (
                <p className="flex items-center gap-1 text-[11px] text-red-500">
                    <AlertCircle size={11} aria-hidden /> {error}
                </p>
            )}
        </div>
    );
}

function Input({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input
            className={cn(
                "h-10 rounded-lg border border-slate-200 bg-white px-3 text-[13px] text-slate-800 outline-none placeholder:text-slate-400",
                "transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-100",
                "disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400",
                className
            )}
            {...props}
        />
    );
}

function Select({ className, ...props }: React.SelectHTMLAttributes<HTMLSelectElement>) {
    return (
        <select
            className={cn(
                "h-10 rounded-lg border border-slate-200 bg-white px-3 text-[13px] text-slate-800 outline-none",
                "transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-100",
                "disabled:cursor-not-allowed disabled:bg-slate-50",
                className
            )}
            {...props}
        />
    );
}

export default function AdmissionPage() {
    const [isPending, setIsPending] = useState(false);
    const [status, setStatus] = useState<{ success: boolean; message: string } | null>(null);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const formRef = useRef<HTMLFormElement>(null);
    const router = useRouter();

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const fd = new FormData(e.currentTarget);

        const fullName = fd.get("fullName")?.toString().trim() ?? "";
        const contact = fd.get("contact")?.toString().trim() ?? "";
        const email = fd.get("email")?.toString().trim() ?? "";
        const board = fd.get("board")?.toString() ?? "";
        const interestedCourse = fd.get("interestedCourse")?.toString() ?? "";

        // ── validation ──
        const errs: Record<string, string> = {};
        if (!fullName) errs.fullName = "Full name is required.";
        if (!/^\d{10}$/.test(contact)) errs.contact = "Enter a valid 10-digit number.";
        if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "Enter a valid email.";
        if (!board) errs.board = "Please select a board.";
        if (!interestedCourse) errs.interestedCourse = "Please select a course.";

        if (Object.keys(errs).length > 0) {
            setErrors(errs);
            return;
        }

        setErrors({});
        setIsPending(true);

        try {
            const payload = {
                fullName, contact, email, board, interestedCourse,
                submittedAt: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
            };

            await fetch(SHEET_URL, {
                method: "POST",
                mode: "no-cors",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });
            setStatus({ success: true, message: "Enquiry submitted! Our counsellor will contact you soon." });
            formRef.current?.reset();
            setTimeout(() => router.push("/"), 2000);
        } catch (err) {
            console.error(err);
            setStatus({ success: false, message: "Server error. Please try again later." });
        } finally {
            setIsPending(false);
        }
    }

    return (
        <div>
            <Navbar />
            <main className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#0f2044] to-[#1a3a6e] py-12 px-4">
                <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-blue-500/10" />
                <div className="pointer-events-none absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-amber-400/10" />

                <div className="mx-auto max-w-xl">
                    {/* heading */}
                    <div className="mb-8 text-center">
                        <div className="mb-3 inline-flex h-8 w-20 items-center justify-center  overflow-hidden">
                            <img src="/images/vsgoi.jpg" alt="VSGOI Logo" className="h-full w-full object-cover" />
                        </div>
                        <h1 className="text-2xl font-bold uppercase tracking-widest text-amber-400 sm:text-3xl">
                            Admission Enquiry
                        </h1>
                        <p className="mt-2 text-sm bg-white/10 backdrop-blur rounded-xl py-2 px-4 text-slate-300">
                            Fill the form below and our counsellor will reach out to you.
                        </p>
                    </div>

                    {/* banner */}
                    {status && (
                        <div
                            className={cn(
                                "mb-6 flex items-start gap-3 rounded-xl border px-4 py-3 text-sm",
                                status.success
                                    ? "border-green-200 bg-green-50 text-green-800"
                                    : "border-red-200 bg-red-50 text-red-700"
                            )}
                            role="alert"
                        >
                            {status.success
                                ? <CheckCircle size={18} className="mt-0.5 shrink-0 text-green-600" />
                                : <AlertCircle size={18} className="mt-0.5 shrink-0 text-red-500" />
                            }
                            {status.message}
                        </div>
                    )}

                    {/* form */}
                    <form
                        ref={formRef}
                        onSubmit={handleSubmit}
                        noValidate
                        className="rounded-2xl border-2 border-blue-500 bg-white px-6 py-8 shadow-lg shadow-blue-500/20 sm:px-8"
                    >
                        <div className="grid gap-5">
                            <Field label="Full Name" required error={errors.fullName}>
                                <Input name="fullName" placeholder="e.g. Rahul Sharma" autoComplete="name" disabled={isPending} />
                            </Field>

                            <div className="grid gap-4 sm:grid-cols-2">
                                <Field label="Mobile Number" required error={errors.contact}>
                                    <Input name="contact" type="tel" placeholder="10-digit number" maxLength={10} disabled={isPending} />
                                </Field>
                                <Field label="Email Address" error={errors.email}>
                                    <Input name="email" type="email" placeholder="optional" autoComplete="email" disabled={isPending} />
                                </Field>
                            </div>

                            <div className="grid gap-4 sm:grid-cols-2">
                                <Field label="Board" required error={errors.board}>
                                    <Select name="board" defaultValue="" disabled={isPending}>
                                        <option value="" disabled>Select board</option>
                                        <option value="CBSE">CBSE</option>
                                        <option value="UP">UP Board</option>
                                    </Select>
                                </Field>
                                <Field label="Interested Course" required error={errors.interestedCourse}>
                                    <Select name="interestedCourse" defaultValue="" disabled={isPending}>
                                        <option value="" disabled>Select course</option>
                                        <option value="BTECH">B.Tech</option>
                                        <option value="BCA">BCA</option>
                                        <option value="BBA">BBA</option>
                                        <option value="MBA">MBA</option>
                                        <option value="POLYTECHNIC">Polytechnic</option>
                                        <option value="ITI">ITI</option>
                                    </Select>
                                </Field>
                            </div>
                        </div>

                        <div className="my-6 border-t border-slate-100" />

                        <button
                            type="submit"
                            disabled={isPending}
                            className={cn(
                                "flex w-full items-center justify-center gap-2 rounded-xl bg-blue-700 py-3 text-[14px] font-semibold text-white",
                                "transition-colors hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500",
                                "disabled:cursor-not-allowed disabled:bg-blue-400"
                            )}
                        >
                            {isPending ? (
                                <><Loader2 size={16} className="animate-spin" />Submitting…</>
                            ) : "Submit Enquiry"}
                        </button>

                        <p className="mt-4 text-center text-[11px] text-slate-400">
                            By submitting you agree to be contacted by a VSGOI counsellor.
                        </p>
                    </form>
                </div>
            </main>
        </div>
    );
}