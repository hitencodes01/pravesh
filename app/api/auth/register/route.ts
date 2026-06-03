import { NextRequest } from "next/server";
import { connectDB } from "@/lib/db";
import {User} from "@/models/user.model";
import { apiResponse } from "@/lib/apiResponse";
import { RegisterSchema } from "@/lib/validation/zod";
import { generateTokens } from "@/lib/jwt";

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const body = await req.json();

    // Validate
    const parsed = RegisterSchema.safeParse(body);
    if (!parsed.success) {
      return apiResponse.error(parsed.error.flatten().fieldErrors as any, 422);
    }

    // Check if already exists
    const existing = await User.findOne({ email: parsed.data.email });
    if (existing) return apiResponse.error("Email already registered", 409);

    const user = await User.create(parsed.data);
    const { accessToken, refreshToken } = generateTokens({
      id: user._id.toString(),
      role: user.role,
    });

    const response = apiResponse.success(
      {
        user: { id: user._id, name: user.name, email: user.email, role: user.role },
        accessToken,
      },
      201
    );

    // Set refresh token in httpOnly cookie
    response.cookies.set("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 15 * 24 * 60 * 60, // 7 days
      path: "/",
    });

    return response;
  } catch (err: any) {
    return apiResponse.error(err.message, 400);
  }
}