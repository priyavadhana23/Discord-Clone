import { clerkMiddleware } from "@clerk/nextjs/server";

// Use Clerk middleware to protect routes and manage user authentication
export default clerkMiddleware();

export const config = {
  matcher: [
    // Apply the middleware to all routes, skipping Next.js internals and static files
    '/((?!_next|static|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/api/(.*)',  // Match all API routes
    '/trpc/(.*)', // Match all tRPC routes
  ],
};
