import { NextResponse } from "next/server";

import { getAuthenticatedUser } from "@/lib/auth";
import { getFeedResponse } from "@/lib/db/queries";

export async function GET() {
  const user = await getAuthenticatedUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const feed = await getFeedResponse(user.id);
  return NextResponse.json(feed);
}
