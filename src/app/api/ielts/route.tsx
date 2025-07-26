
import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(
    "https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course?lang=en",
    {
      headers: {
        "X-TENMS-SOURCE-PLATFORM": "web",
        Accept: "application/json",
      },
      cache: "no-store", // optional: always fetch fresh data
    }
  );

  if (!res.ok) {
    return NextResponse.json(
      { error: "Failed to fetch IELTS course data" },
      { status: res.status }
    );
  }

  const data = await res.json();
  return NextResponse.json(data.data);
}
