import { apiResponse } from "@/lib/apiResponse";

export async function POST() {
  const response = apiResponse.success({ message: "Logged out successfully" });

  response.cookies.set("refreshToken", "", {
    httpOnly: true,
    maxAge: 0,
    path: "/",
  });

  return response;
}