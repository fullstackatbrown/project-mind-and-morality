import { NextResponse } from "next/server";
import CosmicServices from "@/services/CosmicServices";

export const dynamic = "force-dynamic";

export async function GET() {
  const cosmic = new CosmicServices();
  const data = await cosmic.getFamilyInvolvementPage();
  if (!data) {
    return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
  }
  return NextResponse.json(data);
}
