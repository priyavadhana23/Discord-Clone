import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Define the public routes or any custom routes you want to be accessible without authentication
const publicRoutes = createRouteMatcher(['/api/uploadthing']);

// Middleware logic
export default clerkMiddleware((auth, req) => {
  // If it's not a public route, require authentication
  if (!publicRoutes(req)) {
    auth().protect();  // This will handle redirecting to sign-in for unauthenticated users
  }
});

// Config for matching routes
export const config = {
  matcher: [
    // Skip Next.js internals and static files
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};


