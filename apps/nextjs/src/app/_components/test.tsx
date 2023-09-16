"use client";

import type { RouterOutputs } from "~/utils/api";

export const TestList = () => {
  // const [tests] = api.test.all.useSuspenseQuery();

  // if (tests.length === 0) {
  //   return <div>No tests</div>;
  // }

  return (
    <div className="flex w-full flex-col gap-4">
      {/* {tests.map((t) => {
        return <TestCard key={t.id} test={t} />;
      })} */}
      TestList goes here
    </div>
  );
};

export function TestCard(props: {
  test: RouterOutputs["test"]["all"][number];
}) {
  // const context = api.useContext();
  // const deletetest = api.test.delete.useMutation();

  return (
    <div className="flex flex-row rounded-lg bg-white/10 p-4 transition-all hover:scale-[101%]">
      <div className="flex-grow">
        <h2 className="text-2xl font-bold text-pink-400">{props.test.id}</h2>
        <p className="mt-2 text-sm">{props.test.name}</p>
      </div>
      {/* <div>
        <button
          className="cursor-pointer text-sm font-bold uppercase text-pink-400"
          onClick={async () => {
            await deletetest.mutateAsync(props.test.id);
            await context.test.all.invalidate();
          }}
        >
          Delete
        </button>
      </div> */}
    </div>
  );
}
