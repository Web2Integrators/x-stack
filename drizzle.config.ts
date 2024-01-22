import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";
dotenv.config({
  path: '.env',
});

export default {
  schema: "./src/drizzle/schema/*",
  driver: "mysql2",
  out: "./drizzle",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL as string,
  },
  strict: true,
} satisfies Config;
