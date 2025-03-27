"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const [subject, setSubject] = useState("");
  const [subjNum, setSubjNum] = useState("");
  const [duration, setDuration] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(
      `/?subject=${encodeURIComponent(subject)}&subjNum=${encodeURIComponent(
        subjNum
      )}&duration=${encodeURIComponent(duration)}`
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Admin Form
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700"
            >
              Subject Description
            </label>
            <input
              id="subject"
              type="text"
              placeholder="Enter subject description"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subjNum"
              className="block text-sm font-medium text-gray-700"
            >
              Subject Number
            </label>
            <input
              id="subjNum"
              type="text"
              placeholder="Enter subject number"
              value={subjNum}
              onChange={(e) => setSubjNum(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
              required
            />
          </div>
          <div>
            <label
              htmlFor="duration"
              className="block text-sm font-medium text-gray-700"
            >
              Duration
            </label>
            <input
              id="duration"
              type="text"
              placeholder="Enter duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-medium py-2 px-4 rounded-md shadow hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Page;
