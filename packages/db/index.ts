import { neon, neonConfig } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

import * as post from "./schema/post";

export const schema = {
  ...post,
  // ...test,
};

export * from "drizzle-orm";

const sql = neon(process.env.DATABASE_URL!);
neonConfig.fetchConnectionCache = true;

export const db = drizzle(sql, {
  schema,
});

// export const db = drizzle(
//   new Client({
//     url: process.env.DATABASE_URL,
//   }).connection(),
//   {
//     schema,
//   },
// );

export type Db = typeof db;
