// import * as dotenv from "dotenv";
import type { Config } from "drizzle-kit";

// dotenv.config({
//   path: "../../.env",
// });

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not set");
}

export const tenants = ["baerlis", "sonnenschein"] as const;
export type Tenant = (typeof tenants)[number];

export default {
  schema: "./schema",
  driver: "mysql2",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL,
  },
  tablesFilter: ["baerlis_*", "sonnenschein_*", "shared_*"],
} satisfies Config;
