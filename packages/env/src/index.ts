import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

const environment = (process.env.VERCEL_ENV ?? "development") as
  | "development"
  | "preview"
  | "production";

export const env = createEnv({
  client: {
    NEXT_PUBLIC_environment: z.enum([
      "production",
      "staging",
      "preview",
      "development",
    ]),
  },
  server: {
    databaseUrl: z.string().min(1),
  },
  runtimeEnv: {
    NEXT_PUBLIC_environment: environment,
    databaseUrl: process.env.DATABASE_URL,
  },
});
