"use server";

import { connectDB } from "@/lib/db";          
import { Lead } from "@/models/leads.model";     
import { revalidatePath } from "next/cache";


export interface AdmissionFormState {
  success: boolean;
  message: string;
  errors?: Partial<Record<string, string>>;
}

export interface AdmissionFormData {
  fullName: string;
  contact: string;
  email?: string;
  board: "CBSE" | "UP";
  interestedCourse: "BBA" | "BCA" | "MBA" | "BTECH" | "ITI" | "POLYTECHNIC";
  percentage10?: string;
  percentage12?: string;
  scoreCardType?: "JEE" | "JEECUP" | "CUET";
  scoreCardScore?: string;
}


function validate(data: AdmissionFormData): Partial<Record<string, string>> {
  const errors: Partial<Record<string, string>> = {};

  if (!data.fullName?.trim())
    errors.fullName = "Full name is required.";

  if (!data.contact?.trim())
    errors.contact = "Contact number is required.";
  else if (!/^[6-9]\d{9}$/.test(data.contact.trim()))
    errors.contact = "Enter a valid 10-digit Indian mobile number.";

  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
    errors.email = "Enter a valid email address.";

  if (!data.board)
    errors.board = "Please select your board.";

  if (!data.interestedCourse)
    errors.interestedCourse = "Please select a course.";

  if (data.percentage10 && (isNaN(Number(data.percentage10)) || Number(data.percentage10) > 100))
    errors.percentage10 = "Enter a valid percentage (0–100).";

  if (data.percentage12 && (isNaN(Number(data.percentage12)) || Number(data.percentage12) > 100))
    errors.percentage12 = "Enter a valid percentage (0–100).";

  return errors;
}


export async function submitAdmissionForm(
  _prevState: AdmissionFormState,
  formData: FormData
): Promise<AdmissionFormState> {
  const data: AdmissionFormData = {
    fullName:        (formData.get("fullName")        as string) ?? "",
    contact:         (formData.get("contact")         as string) ?? "",
    email:           (formData.get("email")           as string) || undefined,
    board:           (formData.get("board")           as "CBSE" | "UP"),
    interestedCourse:(formData.get("interestedCourse")as AdmissionFormData["interestedCourse"]),
    percentage10:    (formData.get("percentage10")    as string) || undefined,
    percentage12:    (formData.get("percentage12")    as string) || undefined,
    scoreCardType:   (formData.get("scoreCardType")   as AdmissionFormData["scoreCardType"]) || undefined,
    scoreCardScore:  (formData.get("scoreCardScore")  as string) || undefined,
  };

  // client-side-style validation on the server
  const errors = validate(data);
  if (Object.keys(errors).length > 0) {
    return { success: false, message: "Please fix the errors below.", errors };
  }

  try {
    await connectDB();

    await Lead.create({
      fullName:        data.fullName.trim(),
      contact:         data.contact.trim(),
      email:           data.email?.trim(),
      board:           data.board,
      interestedCourse:data.interestedCourse,
      percentage10:    data.percentage10,
      percentage12:    data.percentage12,
      ...(data.scoreCardType && {
        scoreCard: {
          type:  data.scoreCardType,
          score: data.scoreCardScore ?? "",
        },
      }),
      status: "query",
    });

    revalidatePath("/admission");

    return {
      success: true,
      message: "Thank you! Our counsellor will contact you shortly.",
    };
  } catch (error: any) {
    if (error?.code === 11000) {
      return {
        success: false,
        message: "This contact number is already registered.",
        errors: { contact: "Already registered. We will get in touch soon." },
      };
    }
    return {
      success: false,
      message: error?.message ?? "Something went wrong. Please try again.",
    };
  }
}