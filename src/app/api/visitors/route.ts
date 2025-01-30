import { NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

// Initialize Redis client
const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

export async function GET() {
  try {
    const activeUsers = await redis.zcount("active_users", "-inf", "+inf");
    return NextResponse.json({ activeUsers });
  } catch (error) {
    console.error("[API] Redis Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch active users" },
      { status: 500 },
    );
  }
}
