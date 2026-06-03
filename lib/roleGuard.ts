import { NextRequest } from "next/server";
import { apiResponse } from "./apiResponse";

export function requireRole(req: NextRequest, ...roles: string[]) {
  const role = req.headers.get("x-user-role");
  if (!roles.includes(role ?? "")) {
    return apiResponse.error("Forbidden", 403);
  }
  return null; // null means allowed
}