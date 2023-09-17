import { createTRPCRouter, publicProcedure } from "../trpc";

export const testRouter = createTRPCRouter({
  all: publicProcedure.query(() => {
    // const tenant = "baerlis";
    // return ctx.db
    //   .select(
    //     schema.getTestTable(tenant).id,
    //     schema.getTestTable(tenant).name,
    //     schema.getTestTable(tenant).createdAt,
    //   )
    // .from(schema.getTestTable(tenant));
    // .orderBy(desc(schema.getTestTable(tenant).id));

    // const query = ctx.db.query[schema.getTestTable(tenant).name as keyof typeof ctx.db.query];

    // return query.findMany();

    // const table = schema.getTestTable("kita-baerlis");

    return [
      {
        id: 1,
        name: "test",
      },
    ];
  }),

  // byId: publicProcedure
  //   .input(z.object({ id: z.number() }))
  //   .query(({ ctx, input }) => {
  //     // return ctx.db
  //     //   .select()
  //     //   .from(schema.post)
  //     //   .where(eq(schema.post.id, input.id));

  //     return ctx.db.query.post.findFirst({
  //       where: eq(schema.post.id, input.id),
  //     });
  //   }),

  // create: protectedProcedure
  //   .input(
  //     z.object({
  //       title: z.string().min(1),
  //       content: z.string().min(1),
  //     }),
  //   )
  //   .mutation(({ ctx, input }) => {
  //     return ctx.db.insert(schema.post).values(input);
  //   }),

  // delete: protectedProcedure.input(z.number()).mutation(({ ctx, input }) => {
  //   return ctx.db.delete(schema.post).where(eq(schema.post.id, input));
  // }),
});
