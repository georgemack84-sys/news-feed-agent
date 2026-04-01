import { PrismaClient as SqlitePrismaClient } from "@prisma/client";
import { createRequire } from "node:module";

type PrismaClientInstance = SqlitePrismaClient;
type PrismaClientOptions = ConstructorParameters<typeof SqlitePrismaClient>[0];
type PrismaClientConstructor = new (options?: PrismaClientOptions) => PrismaClientInstance;

const runtimeRequire = createRequire(import.meta.url);

declare global {
  var prismaGlobal: PrismaClientInstance | undefined;
}

function isPostgresUrl(url: string | undefined) {
  return Boolean(url && (url.startsWith("postgresql://") || url.startsWith("postgres://")));
}

function loadPostgresClient(): PrismaClientConstructor {
  const moduleName = "../generated/postgres";

  return runtimeRequire(moduleName).PrismaClient as PrismaClientConstructor;
}

function createClient(): PrismaClientInstance {
  const log = process.env.NODE_ENV === "development" ? (["error", "warn"] as const) : (["error"] as const);

  if (isPostgresUrl(process.env.DATABASE_URL)) {
    const PostgresPrismaClient = loadPostgresClient();

    return new PostgresPrismaClient({ log: [...log] });
  }

  return new SqlitePrismaClient({ log: [...log] });
}

export const prisma = globalThis.prismaGlobal ?? createClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.prismaGlobal = prisma;
}
