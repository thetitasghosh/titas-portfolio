import { NextRequest, NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

// Function to get or generate a unique session ID
function getSessionId(req: NextRequest) {
  let sessionId = req.cookies.get("session_id")?.value; // Check if session ID exists in cookies

  if (!sessionId) {
    sessionId = crypto.randomUUID(); // Generate new session ID if not found
  }

  return sessionId;
}

export function middleware(req: NextRequest) {
  const sessionId = getSessionId(req); // Get session ID from cookie (or generate if none)
  const timestamp = Date.now();

  console.log(`[Middleware] Tracking session: ${sessionId}`);

  // Add a log for when session ID is being stored in Redis
  queueMicrotask(async () => {
    try {
      // Add session to a sorted set with current timestamp
      await redis.zadd("active_sessions", {
        score: timestamp,
        member: sessionId,
      });
      console.log(`[Middleware] Stored session in Redis: ${sessionId}`);
    } catch (error) {
      console.error("[Middleware] Redis Error:", error);
    }
  });

  // Set the session ID in cookie (valid for 1 minute)
  const res = NextResponse.next();
  res.cookies.set("session_id", sessionId, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60, // Expires in 1 minute
  });

  return res;
}

// Apply middleware to all pages except API routes & static files
export const config = {
  matcher: "/:path*",
};
