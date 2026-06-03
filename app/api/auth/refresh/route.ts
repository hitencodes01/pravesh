import { NextRequest } from "next/server";
import { apiResponse } from "@/lib/apiResponse";
import { verifyRefreshToken, generateTokens } from "@/lib/jwt";

export async function POST(req: NextRequest) {
  try {
    const refreshToken = req.cookies.get("refreshToken")?.value;
    if (!refreshToken) return apiResponse.error("No refresh token", 401);

    const payload = verifyRefreshToken(refreshToken);
    const { accessToken, refreshToken: newRefreshToken } = generateTokens({
      id: payload.id,
      role: payload.role,
    });

    const response = apiResponse.success({ accessToken });

    // Rotate refresh token
    response.cookies.set("refreshToken", newRefreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60,
      path: "/",
    });

    return response;
  } catch {
    return apiResponse.error("Invalid or expired refresh token", 401);
  }
}