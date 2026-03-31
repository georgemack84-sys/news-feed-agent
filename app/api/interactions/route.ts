import { NextRequest, NextResponse } from "next/server";

import { getAuthenticatedUser } from "@/lib/auth";
import { prisma } from "@/lib/db/queries";

export async function POST(request: NextRequest) {
  const user = await getAuthenticatedUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await request.json();
  const interaction = await prisma.interaction.create({
    data: {
      userId: user.id,
      type: body.type ?? "click",
      articleId: body.articleId ?? null,
      clusterId: body.clusterId ?? null,
      metadata: JSON.stringify(body.metadata ?? { note: "P2 stub" }),
    },
  });

  return NextResponse.json({ ok: true, interaction });
}
