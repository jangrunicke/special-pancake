import { getTestTable, tenantATestTable } from "@acme/db/schema/test";

import { createTRPCRouter, publicProcedure } from "../trpc";

export const testRouter = createTRPCRouter({
  all: publicProcedure.query(({ ctx }) => {
    return ctx.db
      .select({
        id: tenantATestTable.id,
        name: tenantATestTable.name,
      })
      .from(tenantATestTable);
  }),
  queryTest: publicProcedure.query(async ({ ctx }) => {
    const testTable = getTestTable("tenant_a");

    await ctx.db.insert(testTable).values({
      name: "test",
    });

    const result = ctx.db
      .select({
        id: testTable.id,
        name: testTable.name,
      })
      .from(testTable);

    return result;
  }),
});
