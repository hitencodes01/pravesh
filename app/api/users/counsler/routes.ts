import { NextRequest } from "next/server";
import { connectDB } from "@/lib/db";
import { apiResponse } from "@/lib/apiResponse";
import { User } from "@/models/user.model";

export async function GET() {
  try {
    await connectDB();
    const counslers = await User.find({
      role : "counsler"
    });
    return apiResponse.success(counslers);
  } catch (error) {
    return apiResponse.error("Failed to fetch counslers");
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const body = await req.json();
    const counsler = await User.create({...body , role : "counsler"});
    return apiResponse.success(counsler, 201);
  } catch (error: any) {
    return apiResponse.error(error.message, 400);
  }
}
