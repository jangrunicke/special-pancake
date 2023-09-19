// import { serial, text } from "drizzle-orm/pg-core";

import { pgSchema, pgTable, serial, text } from "drizzle-orm/pg-core";

// const testColumns = {
//   id: serial("id").primaryKey(),
//   name: text("name").notNull(),
// };

// export const testA = tenantATableCreator("test", testColumns);
// export const testB = tenantBTableCreator("test", testColumns);

// export const getTestTable = <TTenant extends Tenant>(tenant: TTenant) => {
//   if (tenant === tenants[0]) {
//     return testA;
//   } else {
//     return testB;
//   }
// };

const testColumns = {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
};

export const createTestTable = <TSchema extends string>(
  schemaName: TSchema,
) => {
  return pgSchema(schemaName).table("test", testColumns);
};

const tenants = ["tenant_a", "tenant_b"] as const;
export type Tenant = (typeof tenants)[number];

export const blabla = pgTable("test", testColumns);
// export const testTenantA = createTestTable("tenant_a"); -> passiert nichts
// export const testTenantB = createTestTable("tenant_b");-> passiert nichts
export const tenantASchema = pgSchema("tenant_a");
export const tenantBSchema = pgSchema("tenant_b");
// expot cosnt

export const getTestTable = <TSchema extends string>(schemaName: TSchema) => {
  return pgSchema(schemaName).table("test", testColumns);
};

export const tenantATestTable = getTestTable("tenant_a");

export const tenantBTestTable = pgSchema("tenant_b");

// export const tenantATestTable = createTestTable("tenant_a");
