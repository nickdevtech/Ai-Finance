import { NextResponse } from "next/server";
import { auth, redirectToSignIn } from "@clerk/nextjs";
import { ajGeneral, ajStrict } from "./lib/arcjet";

function isProtectedRoute(pathname) {
  return (
    pathname.startsWith("/dashboard") ||
    pathname.startsWith("/account") ||
    pathname.startsWith("/transaction")
  );
}

export default async function middleware(req) {
  const pathname = new URL(req.url).pathname;

  // Pick Arcjet config based on route
  const ajClient = pathname.startsWith("/api") ? ajStrict : ajGeneral;

  // Arcjet check
  const decision = await ajClient.protect(req);
  if (decision.isDenied()) {
    return decision.toResponse();
  }

  // Clerk protection (only for certain routes)
  const { userId } = auth();
  if (!userId && isProtectedRoute(pathname)) {
    return redirectToSignIn({ returnBackUrl: req.url });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/account/:path*",
    "/transaction/:path*",
    "/api/:path*",
  ],
};
