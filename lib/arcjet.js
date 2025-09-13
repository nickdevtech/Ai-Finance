import arcjet, { tokenBucket } from "@arcjet/next";

// Setup Arcjet client with rate limiting
const aj = arcjet({
  key: process.env.ARCJET_KEY,
  characteristics: ["userId"], // Track per Clerk user
  rules: [
    tokenBucket({
      mode: "LIVE",
      refillRate: 10,   // 10 requests
      interval: 3600,   // per hour
      capacity: 10,     // burst capacity
    }),
  ],
});

export default aj;
