import { NextResponse } from "next/server";
import CosmicServices from "@/services/CosmicServices";

export async function GET() {
  const cosmic = new CosmicServices();
  const homePage = await cosmic.getHomePage();
  if (!homePage) {
    return NextResponse.json({ error: "Home page not loaded" }, { status: 500 });
  }
  return NextResponse.json(homePage);
}
