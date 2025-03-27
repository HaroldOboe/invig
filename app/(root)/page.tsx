import { Suspense } from "react";
import Clock from "../components/clock";
import IndexPage from "../components/results";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row items-center justify-center p-6 space-y-8 lg:space-y-0 lg:space-x-8">
      {/* Clock Section */}
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg">
        <Clock />
      </div>

      {/* Results Section */}
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">
          Form Results
        </h2>
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
