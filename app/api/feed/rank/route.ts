import { NextResponse } from "next/server";

import { getAuthenticatedUser } from "@/lib/auth";
import { rerankExistingFeed } from "@/lib/pipeline";

export async function POST() {
  const user = await getAuthenticatedUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const clusters = await rerankExistingFeed(user.id);
  return NextResponse.json({ clusters });
}
