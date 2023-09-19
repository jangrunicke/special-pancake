import { pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const contract = pgTable("contract", {
  id: serial("id").primaryKey(),
  title: varchar("name", { length: 256 }).notNull(),
});
