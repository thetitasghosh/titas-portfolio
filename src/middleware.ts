import { NextRequest, NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

// Initialize Redis client
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

// Function to create a unique user identifier
function getUserId(req: NextRequest) {
  let userId = req.cookies.get("user_id")?.value; // Get existing user ID from cookie

  if (!userId) {
    userId = crypto.randomUUID(); // Generate a new UUID
  }

  return userId;
}

export function middleware(req: NextRequest) {
  const userId = getUserId(req);
  const timestamp = Date.now();

  console.log(`[Middleware] Tracking visitor: ${userId}`);

  queueMicrotask(async () => {
    try {
      await redis.zadd("active_users", { score: timestamp, member: userId });
    } catch (error) {
      console.error("[Middleware] Redis Error:", error);
    }
  });

  return NextResponse.next();
}

// Apply middleware to all pages except API routes & static files
export const config = {
  matcher: "/:path*",
};
