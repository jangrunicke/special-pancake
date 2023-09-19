import { neon, neonConfig } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

import * as post from "./schema/post";
import * as test from "./schema/test";

export const schema = {
  ...post,
  ...test,
};

export * from "drizzle-orm";

const sql = neon(process.env.DATABASE_URL!);
neonConfig.fetchConnectionCache = true;

export const db = drizzle(sql, {
  schema,
});

export type Db = typeof db;

// class TenantClient {
//   private tenantId: string;

//   constructor(tenantId: string) {
//     this.tenantId = tenantId;
//   }

//   query(query: (db: Db) => PgRelationalQuery<unknown>) {
//     const queryBuilder = query(db);
//     return queryBuilder.where({ tenantId: this.tenantId });
//   }

//   // You can add similar methods for update, insert, and delete
// }
