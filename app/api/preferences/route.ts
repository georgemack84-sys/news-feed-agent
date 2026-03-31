import { NextRequest, NextResponse } from "next/server";

import { getAuthenticatedUser } from "@/lib/auth";
import { getPreferences, savePreferences } from "@/lib/db/queries";
import { normalizePreferenceInput } from "@/lib/preferences";

export async function GET() {
  const user = await getAuthenticatedUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  return NextResponse.json(await getPreferences(user.id));
}

export async function POST(request: NextRequest) {
  const user = await getAuthenticatedUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const input = normalizePreferenceInput(await request.json());
  const preferences = await savePreferences(user.id, input);
  return NextResponse.json(preferences);
}
