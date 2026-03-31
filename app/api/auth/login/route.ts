import { NextRequest, NextResponse } from "next/server";

import { authenticateInternalUser, createSession } from "@/lib/auth";

export async function POST(request: NextRequest) {
  const body = (await request.json()) as { username?: string; password?: string };
  const username = body.username?.trim() ?? "";
  const password = body.password?.trim() ?? "";

  if (!username || !password) {
    return NextResponse.json({ error: "Username and password are required." }, { status: 400 });
  }

  const user = await authenticateInternalUser(username, password);
  if (!user) {
    return NextResponse.json({ error: "Invalid credentials." }, { status: 401 });
  }

  await createSession(user.id);
  return NextResponse.json({ ok: true });
}
