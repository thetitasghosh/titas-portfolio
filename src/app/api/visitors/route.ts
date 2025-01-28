import { NextResponse } from "next/server";
import { BetaAnalyticsDataClient } from "@google-analytics/data";

// 👇 Setting PropertyId
const propertyId = process.env.GOOGLE_ANALYTICS_PROPERTY_ID;

const analyticsDataClient = new BetaAnalyticsDataClient({
  credentials: {
    client_id: process.env.GOOGLE_CLIENT_ID,
    client_email: process.env.GA_CLIENT_EMAIL,
    client_secret: process.env.GOOGLE_CLIENT_SECRET_ID,
    private_key: process.env.GA_PRIVATE_KEY?.replace(/\n/gm, "\n"), // replacing is necessary
  },
});

export async function GET() {
  try {
    // 👇 Running a simple report
    const [response] = await analyticsDataClient.runRealtimeReport({
      property: `properties/${propertyId}`,
      // dimensions: [{ name: "minutesAgo" }],
      minuteRanges: [
        { name: "0-2 minutes ago", startMinutesAgo: 2, endMinutesAgo: 0 },
      ],
      metrics: [
        {
          name: "activeUsers", // It returns the active users
        },
      ],
    });

    // Extracting activeUsers data
    const activeUsers = response.rows?.[0]?.metricValues?.[0]?.value || "0";

    // Returning only activeUsers
    // return NextResponse.json({ response });
    return NextResponse.json({ activeUsers });
  } catch (error) {
    console.error("Error fetching real-time active users:", error);
    return NextResponse.json(
      { error: "Failed to fetch real-time active Users" },
      { status: 500 },
    );
  }
}
