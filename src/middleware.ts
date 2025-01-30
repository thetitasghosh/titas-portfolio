import { NextRequest, NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

// Function to get or generate a unique session ID
function getSessionId(req: NextRequest) {
  let sessionId = req.cookies.get("session_id")?.value;

  if (!sessionId) {
    sessionId = crypto.randomUUID(); // Generate new session ID
  }

  return sessionId;
}

export function middleware(req: NextRequest) {
  const sessionId = getSessionId(req);
  const timestamp = Date.now();

  console.log(`[Middleware] Tracking session: ${sessionId}`);

  queueMicrotask(async () => {
    try {
      // Store session in Redis with a 2-minute expiration
      await redis.set(`active_session:${sessionId}`, timestamp, { ex: 120 });
    } catch (error) {
      console.error("[Middleware] Redis Error:", error);
    }
  });

  // Set session ID in cookie (valid for 2 minutes)
  const res = NextResponse.next();
  res.cookies.set("session_id", sessionId, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 120, // Expires in 2 minutes
  });

  return res;
}

// Apply middleware to all pages except API routes & static files
export const config = {
  matcher: "/:path*",
};
