import { mysqlTableCreator } from "drizzle-orm/mysql-core";

import { tenants } from "../drizzle.config";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const mySqlTable = mysqlTableCreator((name) => `shared_${name}`);
// export const mySqlTable = mysqlTableCreator((name) => name);

const [tenantA, tenantB] = tenants;

export const tenantATableCreator = mysqlTableCreator(
  (name) => `${tenantA}_${name}`,
);
export const tenantBTableCreator = mysqlTableCreator(
  (name) => `${tenantB}_${name}`,
);
