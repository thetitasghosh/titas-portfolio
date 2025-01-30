import { NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

export async function GET() {
  try {
    const keys = await redis.keys("active_session:*"); // Get all active session keys
    const activeUsers = keys.length; // Count unique active users

    return NextResponse.json({ activeUsers });
  } catch (error) {
    console.error("[Active Users API] Redis Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch active users" },
      { status: 500 },
    );
  }
}
