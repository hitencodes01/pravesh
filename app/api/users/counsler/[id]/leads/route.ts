import { NextRequest } from "next/server";
import { connectDB } from "@/lib/db";
import {Counsler} from "@/models/counselor.model";
import {Lead} from "@/models/leads.model";
import { apiResponse } from "@/lib/apiResponse";

type Params = { params: { id: string } };

export async function GET(_: NextRequest, { params }: Params) {
  try {
    await connectDB();

    const counsler = await Counsler.findById(params.id);
    if (!counsler) return apiResponse.error("Counsler not found", 404);

    const leads = await Lead.find({ counsler: params.id });
    return apiResponse.success({
      counsler,
      leads,
      total: leads.length,
    });
  } catch {
    return apiResponse.error("Invalid ID", 400);
  }
}