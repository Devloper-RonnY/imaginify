import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Define public routes
const isPublicRoute = createRouteMatcher([
  '/', 
  '/api/webhooks/clerk', 
  '/api/webhooks/stripe',
]);

export default clerkMiddleware(async (auth, request) => {
  // Check if the request is for a public route
  if (!isPublicRoute(request)) {
    // Protect non-public routes
    await auth.protect();
  }
});

export const config = {
  matcher: [
    // Match routes excluding static files and Next.js internals
    '/((?!.*\\..*|_next).*)', 
    '/', 
    '/(api|trpc)(.*)',
  ],
};
