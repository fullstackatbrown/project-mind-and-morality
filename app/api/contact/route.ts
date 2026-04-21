import { NextResponse } from "next/server";
import CosmicServices from "@/services/CosmicServices";

const cosmicServices = new CosmicServices();

export async function POST(req: Request) {
  try {
    const { first_name, last_name, email, message } = await req.json();

    if (!first_name || !last_name || !email || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const success = await cosmicServices.submitContactForm({
      first_name,
      last_name,
      email,
      message,
    });

    if (!success) {
      return NextResponse.json({ error: "Failed to submit contact form" }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
