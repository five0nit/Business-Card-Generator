import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);

  return NextResponse.json({
    ok: true,
    message: "STL export scaffold endpoint",
    received: body,
    status: "not_implemented",
  });
}
