import { NextRequest } from "next/server";
import { connectDB } from "@/lib/db";
import {Lead} from "@/models/leads.model";
import { apiResponse } from "@/lib/apiResponse";

export async function GET() {
  try {
    await connectDB();
    const leads = await Lead.find().populate("counsler", "id name");
    return apiResponse.success(leads);
  } catch (error) {
    return apiResponse.error("Failed to fetch posts");
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const body = await req.json();
    const lead = await Lead.create(body);
    return apiResponse.success(lead, 201);
  } catch (error: any) {
    return apiResponse.error(error.message, 400);
  }
}
