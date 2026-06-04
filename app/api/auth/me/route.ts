import { NextRequest } from "next/server";
import { connectDB } from "@/lib/db";
import { User } from "@/models/user.model";
import { apiResponse } from "@/lib/apiResponse";
import { verifyAccessToken } from "@/lib/jwt";

export async function GET(req: NextRequest) {
  try {
    const token = req.headers.get("authorization")?.split(" ")[1];
    if (!token) return apiResponse.error("Unauthorized", 401);

    const payload = verifyAccessToken(token);

    await connectDB();
    const user = await User.findById(payload.id).select("-password");
    if (!user) return apiResponse.error("User not found", 404);

    return apiResponse.success(user);
  } catch {
    return apiResponse.error("Invalid or expired token", 401);
  }
}