import { NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

// Initialize Redis client
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

export async function GET() {
  try {
    // Get all active visitors (keys starting with "visitor:")
    const keys = await redis.keys("visitor:*");

    return NextResponse.json({ activeUsers: keys.length });
  } catch (error) {
    console.error("Redis Fetch Error:", error);
    return NextResponse.json({ activeUsers: 0 }, { status: 500 });
  }
}
