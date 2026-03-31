import crypto from "node:crypto";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { hashSecret, prisma } from "@/lib/db/queries";

const SESSION_COOKIE = "news-feed-agent-session";
const SESSION_TTL_MS = 1000 * 60 * 60 * 24 * 14;

function createRawSessionToken() {
  return crypto.randomBytes(32).toString("hex");
}

export async function createSession(userId: string) {
  const rawToken = createRawSessionToken();
  const tokenHash = hashSecret(rawToken);
  const expiresAt = new Date(Date.now() + SESSION_TTL_MS);

  await prisma.session.create({
    data: {
      userId,
      tokenHash,
      expiresAt,
    },
  });

  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, rawToken, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    expires: expiresAt,
  });
}

export async function clearSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE)?.value;
  if (token) {
    await prisma.session.deleteMany({
      where: {
        tokenHash: hashSecret(token),
      },
    });
  }

  cookieStore.delete(SESSION_COOKIE);
}

export async function getAuthenticatedUser() {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE)?.value;
  if (!token) {
    return null;
  }

  const session = await prisma.session.findUnique({
    where: {
      tokenHash: hashSecret(token),
    },
    include: {
      user: true,
    },
  });

  if (!session || session.expiresAt <= new Date()) {
    cookieStore.delete(SESSION_COOKIE);
    if (session) {
      await prisma.session.delete({ where: { tokenHash: session.tokenHash } });
    }
    return null;
  }

  return session.user;
}

export async function requireAuthenticatedUser() {
  const user = await getAuthenticatedUser();
  if (!user) {
    redirect("/login");
  }

  return user;
}

export async function authenticateInternalUser(username: string, password: string) {
  const user = await prisma.user.findUnique({
    where: { username },
  });

  if (!user || user.passwordHash !== hashSecret(password)) {
    return null;
  }

  return user;
}
