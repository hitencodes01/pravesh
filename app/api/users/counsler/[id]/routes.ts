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
    return apiResponse.success(counsler);
  } catch {
    return apiResponse.error("Invalid ID", 400);
  }
}

export async function PUT(req: NextRequest, { params }: Params) {
  try {
    await connectDB();
    const body = await req.json();
    const counsler = await Counsler.findByIdAndUpdate(params.id, body, {
      new: true,
      runValidators: true,
    });
    if (!counsler) return apiResponse.error("Counsler not found", 404);
    return apiResponse.success(counsler);
  } catch (err: any) {
    return apiResponse.error(err.message, 400);
  }
}

export async function DELETE(_: NextRequest, { params }: Params) {
  try {
    await connectDB();

    const counsler = await Counsler.findById(params.id);
    if (!counsler) return apiResponse.error("Counsler not found", 404);

    // Unassign counsler from all their leads before deleting
    await Lead.updateMany(
      { counsler: params.id },
      { $unset: { counsler: "" } }
    );

    await counsler.deleteOne();
    return apiResponse.success({ message: "Counsler deleted successfully" });
  } catch {
    return apiResponse.error("Invalid ID", 400);
  }
}