import { Suspense } from "react";

import { TestList } from "./_components/test";

export const runtime = "edge";

export default function HomePage() {
  return (
    <main className="flex h-screen flex-col items-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
      <div className="container mt-12 flex flex-col items-center justify-center gap-4 py-8">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          Create <span className="text-pink-400">T3</span> Turbo
        </h1>

        <div className="h-[40vh] w-full max-w-2xl overflow-y-scroll">
          <Suspense
            fallback={<div className="flex w-full flex-col gap-4">Loading</div>}
          >
            <TestList />
          </Suspense>
        </div>
      </div>
    </main>
  );
}
