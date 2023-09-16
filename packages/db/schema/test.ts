import { serial, text } from "drizzle-orm/mysql-core";

import type { Tenant } from "../drizzle.config";
import { tenants } from "../drizzle.config";
import { tenantATableCreator, tenantBTableCreator } from "./_table";

const testColumns = {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
};

export const testA = tenantATableCreator("test", testColumns);
export const testB = tenantBTableCreator("test", testColumns);

export const getTestTable = <TTenant extends Tenant>(tenant: TTenant) => {
  if (tenant === tenants[0]) {
    return testA;
  } else {
    return testB;
  }
};
