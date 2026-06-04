"use client";

import { useActionState, useEffect, useRef } from "react";
import { submitAdmissionForm, type AdmissionFormState } from "../actions/admission.action";
import { cn } from "@/lib/utils";
import { CheckCircle, AlertCircle, Loader2, GraduationCap } from "lucide-react";

import { useRouter } from "next/navigation";
import Navbar from "@/components/ui/Navbar";

// ─── initial state ────────────────────────────────────────────────────────────

const INITIAL_STATE: AdmissionFormState = {
    success: false,
    message: "",
    errors: {},
};

// ─── small helpers ────────────────────────────────────────────────────────────

function Field({
    label,
    required,
    error,
    children,
}: {
    label: string;
    required?: boolean;
    error?: string;
    children: React.ReactNode;
}) {
    return (
        <div className="flex flex-col gap-1">
            <label className="text-[13px] font-medium text-slate-700">
                {label}
                {required && <span className="ml-0.5 text-red-500">*</span>}
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

// ─── page ─────────────────────────────────────────────────────────────────────

export default function AdmissionPage() {
    const [state, action, isPending] = useActionState(submitAdmissionForm, INITIAL_STATE);
    const formRef = useRef<HTMLFormElement>(null);
    const router = useRouter()

    // reset form on success
    useEffect(() => {
        if (state.success) {
            formRef.current?.reset()
            router.push("/")
        };
    }, [state.success]);

    const e = state.errors ?? {};

    return (

        <div>
            <Navbar />
            <main className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#0f2044] to-[#1a3a6e] py-12 px-4">
                <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-blue-500/10" />
                <div className="pointer-events-none absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-amber-400/10" />
                <div className="mx-auto max-w-2xl">

                    {/* ── heading ── */}
                    <div className="mb-8 text-center">
                        <div className="mb-3 inline-flex h-10 w-24 items-center justify-center rounded-xl">
                            <img src="/images/vsgoi.jpg" alt="" />
                        </div>
                        <h1 className="text-2xl font-bold mb-2  uppercase tracking-widest text-amber-400 sm:text-3xl">
                            Admission Enquiry
                        </h1>
                        <p className="mt-1.5 text-sm bg-white rounded-2xl py-2 font-bold text-slate-500">
                            Fill the form below and our counsellor will reach out to you.
                        </p>
                    </div>

                    {/* ── global success / error banner ── */}
                    {state.message && (
                        <div
                            className={cn(
                                "mb-6 flex items-start gap-3 rounded-xl border px-4 py-3 text-sm",
                                state.success
                                    ? "border-green-200 bg-green-50 text-green-800"
                                    : "border-red-200 bg-red-50 text-red-700"
                            )}
                            role="alert"
                        >
                            {state.success
                                ? <CheckCircle size={18} className="mt-0.5 shrink-0 text-green-600" aria-hidden />
                                : <AlertCircle size={18} className="mt-0.5 shrink-0 text-red-500" aria-hidden />
                            }
                            {state.message}
                        </div>
                    )}

                    {/* ── form card ── */}
                    <form
                        ref={formRef}
                        action={action}
                        noValidate
                        className="rounded-2xl border-2  border-blue-500 bg-white px-6 py-8 shadow-sm sm:px-8 shadow-blue-500"
                    >
                        {/* ── section: personal ── */}
                        <p className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-slate-400">
                            Personal Details
                        </p>
                        <div className="mb-6 grid gap-4 sm:grid-cols-2">
                            <Field label="Full Name" required error={e.fullName}>
                                <Input
                                    name="fullName"
                                    placeholder="e.g. Rahul Sharma"
                                    autoComplete="name"
                                    disabled={isPending}
                                />
                            </Field>

                            <Field label="Mobile Number" required error={e.contact}>
                                <Input
                                    name="contact"
                                    type="tel"
                                    placeholder="10-digit number"
                                    maxLength={10}
                                    autoComplete="tel"
                                    disabled={isPending}
                                />
                            </Field>

                            <Field label="Email Address" error={e.email} >
                                <Input
                                    name="email"
                                    type="email"
                                    placeholder="optional"
                                    autoComplete="email"
                                    disabled={isPending}
                                />
                            </Field>
                        </div>

                        {/* ── section: academic ── */}
                        <p className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-slate-400">
                            Academic Details
                        </p>
                        <div className="mb-6 grid gap-4 sm:grid-cols-2">
                            <Field label="Board" required error={e.board}>
                                <Select name="board" defaultValue="" disabled={isPending}>
                                    <option value="" disabled>Select board</option>
                                    <option value="CBSE">CBSE</option>
                                    <option value="UP">UP Board</option>
                                </Select>
                            </Field>

                            <Field label="Interested Course" required error={e.interestedCourse}>
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

                            <Field label="10th Percentage" error={e.percentage10}>
                                <Input
                                    name="percentage10"
                                    type="number"
                                    min="0"
                                    max="100"
                                    step="0.01"
                                    placeholder="e.g. 75.5"
                                    disabled={isPending}
                                />
                            </Field>

                            <Field label="12th Percentage" error={e.percentage12}>
                                <Input
                                    name="percentage12"
                                    type="number"
                                    min="0"
                                    max="100"
                                    step="0.01"
                                    placeholder="e.g. 68.0"
                                    disabled={isPending}
                                />
                            </Field>
                        </div>

                        {/* ── section: entrance exam ── */}
                        <p className="mb-4 text-[11px] font-semibold uppercase tracking-widest text-slate-400">
                            Entrance Exam  <span className="normal-case tracking-normal text-slate-400">(optional)</span>
                        </p>
                        <div className="mb-8 grid gap-4 sm:grid-cols-2">
                            <Field label="Score Card Type" error={e.scoreCardType}>
                                <Select name="scoreCardType" defaultValue="" disabled={isPending}>
                                    <option value="">None</option>
                                    <option value="JEE">JEE</option>
                                    <option value="JEECUP">JEECUP</option>
                                    <option value="CUET">CUET</option>
                                </Select>
                            </Field>

                            <Field label="Score / Rank" error={e.scoreCardScore}>
                                <Input
                                    name="scoreCardScore"
                                    placeholder="e.g. 85 or AIR 12000"
                                    disabled={isPending}
                                />
                            </Field>
                        </div>

                        {/* ── submit ── */}
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
                                <>
                                    <Loader2 size={16} className="animate-spin" aria-hidden />
                                    Submitting…
                                </>
                            ) : (
                                "Submit Enquiry"
                            )}
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