import { NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

export async function GET() {
  try {
    const timestamp = Date.now();
    const oneMinuteAgo = timestamp - 60000; // 1 minute in milliseconds

    // Remove sessions older than 1 minute from the sorted set
    await redis.zremrangebyscore("active_sessions", 0, oneMinuteAgo);
    console.log(`[Active Users API] Removed old sessions`);

    // Count the number of active sessions (all members in the sorted set)
    const activeUsers = await redis.zcount("active_sessions", "-inf", "+inf");
    console.log(`[Active Users API] Active Users: ${activeUsers}`);

    return NextResponse.json({ activeUsers });
  } catch (error) {
    console.error("[Active Users API] Redis Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch active users" },
      { status: 500 },
    );
  }
}
