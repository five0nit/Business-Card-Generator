import { NextResponse } from "next/server";
import { CARD_TEMPLATES } from "@/lib/templates";

export async function GET() {
  return NextResponse.json({
    ok: true,
    templates: CARD_TEMPLATES,
  });
}
