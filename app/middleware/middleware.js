import { NextResponse } from "next/server";

// In-memory store for rate limiting
const rateLimit = new Map();

// Rate limit configuration
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour in milliseconds
const MAX_REQUESTS = 5; // Maximum requests per window

// interface RateLimitInfo {
//   count: number;
//   timestamp: number;
// }

export async function middleware(request) {
  if (request.nextUrl.pathname === "/api/send-email") {
    // Get client IP address
    const forwardedFor = request.headers.get("x-forwarded-for");
    const clientIp = forwardedFor
      ? forwardedFor.split(",")[0]
      : request.headers.get("x-real-ip") ?? "127.0.0.1";

    const now = Date.now();

    // Clean up old entries
    for (const [key, value] of rateLimit.entries()) {
      if (now - value.timestamp > RATE_LIMIT_WINDOW) {
        rateLimit.delete(key);
      }
    }

    const rateLimitInfo = rateLimit.get(clientIp) || {
      count: 0,
      timestamp: now,
    };

    // Reset count if window has passed
    if (now - rateLimitInfo.timestamp > RATE_LIMIT_WINDOW) {
      rateLimitInfo.count = 0;
      rateLimitInfo.timestamp = now;
    }

    rateLimitInfo.count++;
    rateLimit.set(clientIp, rateLimitInfo);

    // Calculate remaining time in the window
    const timeRemaining = Math.ceil(
      (RATE_LIMIT_WINDOW - (now - rateLimitInfo.timestamp)) / 1000
    );

    // Set rate limit headers
    const response = NextResponse.next();
    response.headers.set("X-RateLimit-Limit", MAX_REQUESTS.toString());
    response.headers.set(
      "X-RateLimit-Remaining",
      Math.max(0, MAX_REQUESTS - rateLimitInfo.count).toString()
    );
    response.headers.set("X-RateLimit-Reset", timeRemaining.toString());

    if (rateLimitInfo.count > MAX_REQUESTS) {
      return new NextResponse(
        JSON.stringify({
          error: "Too many requests",
          retryAfter: timeRemaining,
        }),
        {
          status: 429,
          headers: {
            "Content-Type": "application/json",
            "Retry-After": timeRemaining.toString(),
            "X-RateLimit-Limit": MAX_REQUESTS.toString(),
            "X-RateLimit-Remaining": "0",
            "X-RateLimit-Reset": timeRemaining.toString(),
          },
        }
      );
    }

    return response;
  }

  return NextResponse.next();
}

// Add config to specify which paths to run middleware on
export const config = {
  matcher: ["/api/send-email"],
};
