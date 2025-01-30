import { NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

export async function GET() {
  try {
    const timestamp = Date.now();
    const twoMinutesAgo = timestamp - 60000; // 2 minutes in milliseconds

    // Remove sessions that haven't been updated in the last 2 minutes
    await redis.zremrangebyscore("active_sessions", 0, twoMinutesAgo);

    // Count the number of active sessions
    const activeUsers = await redis.zcount("active_sessions", "-inf", "+inf");

    return NextResponse.json({ activeUsers });
  } catch (error) {
    console.error("[Active Users API] Redis Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch active users" },
      { status: 500 },
    );
  }
}
