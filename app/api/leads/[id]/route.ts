import { NextRequest } from "next/server";
import { connectDB } from "@/lib/db";
import {Lead} from "@/models/leads.model";
import { apiResponse } from "@/lib/apiResponse";

type Params = { params: { id: string } };

export async function GET(_: NextRequest, { params }: Params) {
  try {
    await connectDB();
    const lead = await Lead.findById(params.id).populate("counsler", "id name");
    if (!lead) return apiResponse.error("Lead not found", 404);
    return apiResponse.success(lead);
  } catch {
    return apiResponse.error("Invalid ID", 400);
  }
}

export async function PUT(req: NextRequest, { params }: Params) {
  try {
    await connectDB();
    const body = await req.json();
    const post = await Lead.findByIdAndUpdate(params.id, body, {
      new: true,
      runValidators: true,
    });
    if (!post) return apiResponse.error("Post not found", 404);
    return apiResponse.success(post);
  } catch (err: any) {
    return apiResponse.error(err.message, 400);
  }
}

export async function DELETE(_: NextRequest, { params }: Params) {
  try {
    await connectDB();
    const lead = await Lead.findByIdAndDelete(params.id);
    if (!lead) return apiResponse.error("Lead not found", 404);
    return apiResponse.success({ message: "Lead deleted successfully" });
  } catch {
    return apiResponse.error("Invalid ID", 400);
  }
}
