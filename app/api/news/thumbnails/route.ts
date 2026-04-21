import { NextResponse } from "next/server";
import CosmicServices from "@/services/CosmicServices";

const cosmicServices = new CosmicServices();

// GET /api/news/thumbnails?limit=15&page=0
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const limit = parseInt(searchParams.get("limit") || "15", 10);
  const page = parseInt(searchParams.get("page") || "0", 10);
  try {
    const thumbnails = await cosmicServices.getNewsPostThumbnails(limit, page);
    return NextResponse.json({ thumbnails });
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch news thumbnails" }, { status: 500 });
  }
}
