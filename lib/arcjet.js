import arcjet, { tokenBucket } from "@arcjet/next";

// General rate limiting (dashboard/account/transaction)
export const ajGeneral = arcjet({
  key: process.env.ARCJET_KEY,
  characteristics: ["userId"],
  rules: [
    tokenBucket({
      mode: "LIVE",
      refillRate: 20,   // 20 requests/hour
      interval: 3600,
      capacity: 20,
    }),
  ],
});

// Strict rate limiting (API routes)
export const ajStrict = arcjet({
  key: process.env.ARCJET_KEY,
  characteristics: ["userId"],
  rules: [
    tokenBucket({
      mode: "LIVE",
      refillRate: 5,    // 5 requests/hour
      interval: 3600,
      capacity: 5,
    }),
  ],
});
