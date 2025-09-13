import { NextResponse } from "next/server";
import { auth, redirectToSignIn } from "@clerk/nextjs";
import aj from "./lib/arcjet"; // Import Arcjet client

function isProtectedRoute(pathname) {
  return (
    pathname.startsWith("/dashboard") ||
    pathname.startsWith("/account") ||
    pathname.startsWith("/transaction")
  );
}

export default async function middleware(req) {
  // Run Arcjet first
  const decision = await aj.protect(req);
  if (decision.isDenied()) {
    return decision.toResponse();
  }

  // Run Clerk
  const { userId } = auth();
  if (!userId && isProtectedRoute(new URL(req.url).pathname)) {
    return redirectToSignIn({ returnBackUrl: req.url });
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/account/:path*",
    "/transaction/:path*",
    "/(api|trpc)(.*)",
  ],
};
