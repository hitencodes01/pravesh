import { NextRequest } from "next/server";
import { connectDB } from "@/lib/db";
import {Counsler} from "@/models/counselor.model";
import {Lead} from "@/models/leads.model";
import { apiResponse } from "@/lib/apiResponse";

type Params = { params: { id: string } };

// POST /api/counslers/:id/assign  body: { leadId: string }
export async function POST(req: NextRequest, { params }: Params) {
  try {
    await connectDB();

    const { leadId } = await req.json();
    if (!leadId) return apiResponse.error("leadId is required", 400);

    const counsler = await Counsler.findById(params.id);
    if (!counsler) return apiResponse.error("Counsler not found", 404);

    const lead = await Lead.findById(leadId);
    if (!lead) return apiResponse.error("Lead not found", 404);

    lead.counsler = params.id as any;
    await lead.save();

    return apiResponse.success({
      message: `Lead assigned to ${counsler.name}`,
      lead,
    });
  } catch (err: any) {
    return apiResponse.error(err.message, 400);
  }
}

// DELETE /api/counslers/:id/assign  body: { leadId: string }
export async function DELETE(req: NextRequest, { params }: Params) {
  try {
    await connectDB();

    const { leadId } = await req.json();
    if (!leadId) return apiResponse.error("leadId is required", 400);

    const lead = await Lead.findById(leadId);
    if (!lead) return apiResponse.error("Lead not found", 404);

    // Make sure the lead actually belongs to this counsler
    if (lead.counsler?.toString() !== params.id) {
      return apiResponse.error("Lead is not assigned to this counsler", 400);
    }

    await Lead.findByIdAndUpdate(leadId, { $unset: { counsler: "" } });

    return apiResponse.success({ message: "Lead unassigned successfully" });
  } catch (err: any) {
    return apiResponse.error(err.message, 400);
  }
}