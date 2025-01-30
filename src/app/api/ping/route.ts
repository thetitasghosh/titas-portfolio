import { NextRequest, NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

export async function POST(req: NextRequest) {
  const sessionId = req.cookies.get("session_id")?.value;

  if (!sessionId)
    return NextResponse.json(
      { error: "No session ID found in cookies" },
      { status: 400 },
    );

  const timestamp = Date.now();

  try {
    // Update session timestamp in Redis to keep it alive
    await redis.set(`active_session:${sessionId}`, timestamp, { ex: 60 });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[Ping API] Redis Error:", error);
    return NextResponse.json(
      { error: "Failed to update heartbeat" },
      { status: 500 },
    );
  }
}
