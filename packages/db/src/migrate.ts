import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";

import { env } from "@repo/env";

const databaseUrl = env.databaseDirectUrl;

const databaseConnection = drizzle(
  postgres(databaseUrl, { ssl: "require", max: 1 }),
);

const main = async () => {
  try {
    await migrate(databaseConnection, { migrationsFolder: "migrations" });
    /* eslint-disable-next-line no-console */
    console.log("Migration complete");
  } catch (error) {
    /* eslint-disable-next-line no-console */
    console.log(error);
  }
  process.exit(0);
};

/* eslint-disable @typescript-eslint/no-empty-function */
main()
  .then(() => {})
  .catch(() => {});
