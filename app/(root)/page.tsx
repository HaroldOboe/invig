import { Suspense } from "react";
import Clock from "../components/clock";
import IndexPage from "../components/results";

export default function Home() {
  return (
    <div className="h-screen w-screen bg-gray-100 flex flex-col lg:flex-row items-center justify-center p-8 space-y-10 lg:space-y-0 lg:space-x-16 overflow-hidden fixed top-0 left-0">
      {/* Clock Section */}
      <div className="flex items-center justify-center w-full max-w-2xl lg:w-1/2">
        <Clock />
      </div>

      {/* Results Section */}
      <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-10">
        <Suspense
          fallback={
            <p className="text-center text-gray-500">Loading results...</p>
          }
        >
          <IndexPage />
        </Suspense>
      </div>
    </div>
  );
}
