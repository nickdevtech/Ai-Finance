import arcjet, { tokenBucket } from "@arcjet/next";

// Use DRY_RUN locally so you don’t get blocked while testing
const mode = process.env.NODE_ENV === "production" ? "LIVE" : "DRY_RUN";

// General rate limiting (dashboard/account/transaction)
export const ajGeneral = arcjet({
  key: process.env.ARCJET_KEY,
  // Use both Clerk userId (when logged in) and IP (for guests)
  characteristics: ["userId", "ip"],
  rules: [
    tokenBucket({
      mode,
      refillRate: 20,   // 20 requests per hour
      interval: 3600,   // seconds (1 hour)
      capacity: 20,     // max burst
    }),
  ],
});

// Strict rate limiting (API routes)
export const ajStrict = arcjet({
  key: process.env.ARCJET_KEY,
  characteristics: ["userId", "ip"],
  rules: [
    tokenBucket({
      mode,
      refillRate: 5,    // 5 requests per hour
      interval: 3600,
      capacity: 5,
    }),
  ],
});
