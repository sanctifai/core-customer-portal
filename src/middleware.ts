import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
  publicRoutes: ["/", "/login", "/register"],
  ignoredRoutes: ["/api/webhooks(.*)"],
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files
    "/((?!.*\\..*|_next).*)",
    // Optional: Allow access to static files
    "/(api|trpc)(.*)",
  ],
}; 