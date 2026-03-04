import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);

  return NextResponse.json({
    ok: true,
    message: "Render pipeline scaffold endpoint",
    received: body,
    renderOutput: {
      version: 1,
      geometry: [],
      validations: [],
    },
  });
}
