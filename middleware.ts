import { NextRequest, NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

// Initialize Redis client
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

export async function middleware(req: NextRequest) {
  const ip = req.ip ?? req.headers.get("x-forwarded-for") ?? "anonymous";

  try {
    // Store user visit with a 2-minute expiration
    await redis.set(`visitor:${ip}`, Date.now(), { ex: 120 });
  } catch (error) {
    console.error("Redis Error:", error);
  }

  return NextResponse.next();
}

// Apply middleware only to pages (not API routes)
export const config = {
  matcher: "/:path*",
};
