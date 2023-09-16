import { Client } from "@planetscale/database";
import { drizzle } from "drizzle-orm/planetscale-serverless";

import * as post from "./schema/post";
import * as test from "./schema/test";

export const schema = {
  ...post,
  ...test,
};

export { mySqlTable as tableCreator } from "./schema/_table";

export * from "drizzle-orm";

export const db = drizzle(
  new Client({
    url: process.env.DATABASE_URL,
  }).connection(),
  {
    schema,
  },
);

export type Db = typeof db;
