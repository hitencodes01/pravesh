import { NextRequest } from "next/server";
import { connectDB } from "@/lib/db";
import { User } from "@/models/user.model";
import { apiResponse } from "@/lib/apiResponse";
import { LoginSchema } from "@/lib/validation/zod";
import { generateTokens } from "@/lib/jwt";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const body = await req.json();

    const parsed = LoginSchema.safeParse(body);

    if (!parsed.success) {
      return apiResponse.error(parsed.error.flatten().fieldErrors as any, 422);
    }

    const user = await User.findOne({
      email: parsed.data.email,
    });

    if (!user) {
      return apiResponse.error("Invalid email or password", 401);
    }

    const isMatch = await user.comparePassword(parsed.data.password);

    if (!isMatch) {
      return apiResponse.error("Invalid email or password", 401);
    }

    const { accessToken, refreshToken } = generateTokens({
      id: user._id.toString(),
      role: user.role,
    });

    const response = apiResponse.success({
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });

    response.cookies.set("accessToken", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 15 * 60,
      path: "/",
    });

    response.cookies.set("refreshToken", refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 15 * 24 * 60 * 60,
      path: "/",
    });

    return response;
  } catch (err: any) {
    return apiResponse.error(err.message, 400);
  }
}
