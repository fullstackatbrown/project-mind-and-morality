import { NextResponse } from "next/server";
import CosmicServices from "@/services/CosmicServices";

export async function GET() {
    const cosmic = new CosmicServices();
    const data = await cosmic.getStudentInvolvementPage();
    if (!data) {
        return NextResponse.json({ error: "Failed to fetch data" }, { status: 500 });
    }
    return NextResponse.json(data)

    
    
}