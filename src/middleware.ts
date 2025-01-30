import { NextRequest, NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

// Initialize Redis client
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

export function middleware(req: NextRequest) {
  const ip = req.ip ?? req.headers.get("x-forwarded-for") ?? "anonymous";
  const timestamp = Date.now();

  console.log(`[Middleware] Tracking visitor: ${ip}`);

  // Store visitor timestamp in Redis Sorted Set
  queueMicrotask(async () => {
    try {
      await redis.zadd("active_users", { score: timestamp, member: ip });

      // Remove users who were last active more than 2 minutes ago
      const twoMinutesAgo = timestamp - 120000;
      await redis.zremrangebyscore("active_users", 0, twoMinutesAgo);

      console.log(`[Middleware] Visitor added to active users: ${ip}`);
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
