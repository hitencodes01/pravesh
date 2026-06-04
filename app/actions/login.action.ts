"use server";

import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { LoginSchema } from "@/lib/validation/zod";

export async function loginAction(_prevState: any, formData: FormData) {
    const raw = {
        email: formData.get("email") as string,
        password: formData.get("password") as string,
        role: formData.get("role") as string,
    };

    const parsed = LoginSchema.safeParse(raw);
    if (!parsed.success) {
        return { error: parsed.error.flatten().fieldErrors };
    }

    let redirectPath: string | null = null;

    try {
        const baseUrl =
            process.env.NEXT_PUBLIC_BASE_URL ||
            (process.env.VERCEL_URL
                ? `https://${process.env.VERCEL_URL}`
                : "http://localhost:3000");

        const res = await fetch(`${baseUrl}/api/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(parsed.data),
        });

        const data = await res.json();

        if (!res.ok) {
            return { error: data.message ?? "Invalid email or password." };
        }


        console.log(data)
        const cookieStore = await cookies();
        const rawSetCookie = res.headers.get("set-cookie");

        if (rawSetCookie) {
            const cookiePairs = rawSetCookie.split(/,(?=[^ ])/);
            for (const pair of cookiePairs) {
                const [nameValue] = pair.split(";");
                const eqIndex = nameValue.indexOf("=");
                if (eqIndex === -1) continue;
                const name = nameValue.slice(0, eqIndex).trim();
                const value = nameValue.slice(eqIndex + 1).trim();

                if (name === "accessToken") {
                    cookieStore.set("accessToken", value, {
                        httpOnly: true,
                        secure: process.env.NODE_ENV === "production",
                        sameSite: "strict",
                        maxAge: 15 * 60,
                        path: "/",
                    });
                } else if (name === "refreshToken") {
                    cookieStore.set("refreshToken", value, {
                        httpOnly: true,
                        secure: process.env.NODE_ENV === "production",
                        sameSite: "strict",
                        maxAge: 15 * 24 * 60 * 60,
                        path: "/",
                    });
                }
            }
        }

        redirectPath = `/auth/${data.data.user.role}`;
    } catch (err: any) {
        return { error: err.message ?? "Something went wrong. Please try again." };
    }

    if (redirectPath) redirect(redirectPath);
}