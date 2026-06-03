import { NextRequest, NextResponse } from "next/server";
import { verifyAccessToken } from "@/lib/jwt";

const PUBLIC_ROUTES = [
  "/api/auth/login",
  "/api/auth/register",
  "/api/auth/refresh",
];

export function middleware(req: NextRequest) {
  const isPublic = PUBLIC_ROUTES.some((route) =>
    req.nextUrl.pathname.startsWith(route)
  );

  if (isPublic) {
    return NextResponse.next();
  }

  const token = req.cookies.get("accessToken")?.value;

  if (!token) {
    return NextResponse.json(
      {
        success: false,
        error: "Unauthorized",
      },
      {
        status: 401,
      }
    );
  }

  try {
    const payload = verifyAccessToken(token);

    const requestHeaders = new Headers(req.headers);

    requestHeaders.set("x-user-id", payload.id);
    requestHeaders.set("x-user-role", payload.role);

    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        error: "Invalid or expired token",
      },
      {
        status: 401,
      }
    );
  }
}

export const config = {
  matcher: ["/api/:path*"],
};