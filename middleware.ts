import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Define public routes
const isPublicRoute = createRouteMatcher([
  "/", 
  "/api/webhooks/clerk", 
  "/api/webhooks/stripe",
]);

export default clerkMiddleware((auth, req) => {
  // Skip Clerk authentication for public routes
  if (isPublicRoute(req)) {
    return NextResponse.next(); // Use NextResponse.next() for public routes
  }

  // For protected routes, Clerk handles authentication
  return null; // Allow Clerk middleware to handle the request
});

export const config = {
  matcher: [
    "/((?!.*\\..*|_next).*)", // Match all routes except static files and Next.js internals
    "/", 
    "/(api|trpc)(.*)",
  ],
};
