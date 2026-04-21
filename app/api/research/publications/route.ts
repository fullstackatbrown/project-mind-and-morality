import { NextResponse } from "next/server";
import CosmicServices from "@/services/CosmicServices";

const cosmicServices = new CosmicServices();

export async function GET() {
  try {
    const data = await cosmicServices.getResearchTopicsAndPublications();
    if (!data) {
      return NextResponse.json({ error: "Failed to fetch publications" }, { status: 500 });
    }
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
