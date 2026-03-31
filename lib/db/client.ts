import { PrismaClient as SqlitePrismaClient } from "@prisma/client";
import { PrismaClient as PostgresPrismaClient } from "@/lib/generated/postgres";

type PrismaClientInstance = SqlitePrismaClient;

declare global {
  var prismaGlobal: PrismaClientInstance | undefined;
}

function isPostgresUrl(url: string | undefined) {
  return Boolean(url && (url.startsWith("postgresql://") || url.startsWith("postgres://")));
}

function createClient(): PrismaClientInstance {
  const log = process.env.NODE_ENV === "development" ? (["error", "warn"] as const) : (["error"] as const);

  if (isPostgresUrl(process.env.DATABASE_URL)) {
    return new PostgresPrismaClient({ log: [...log] }) as unknown as PrismaClientInstance;
  }

  return new SqlitePrismaClient({ log: [...log] });
}

export const prisma = globalThis.prismaGlobal ?? createClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.prismaGlobal = prisma;
}
