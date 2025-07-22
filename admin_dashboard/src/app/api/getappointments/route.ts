// app/api/getappointments/route.ts
import { client } from "../../../../sanity/client";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const appointments = await client.fetch(`*[_type == "appointment"] | order(_createdAt desc)`);
    return NextResponse.json(appointments);
  } catch (error) {
    console.error("Sanity fetch failed:", error);
    return NextResponse.json({ error: "Failed to fetch appointments" }, { status: 500 });
  }
}
