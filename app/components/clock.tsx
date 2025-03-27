"use client";

import { useState, useEffect } from "react";

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center p-12 bg-white rounded-lg shadow-2xl">
        <div className="text-6xl font-bold text-gray-800 mb-6">
          {time.toLocaleDateString()}
        </div>
        <div className="text-9xl font-extrabold text-blue-600">
          {time.toLocaleTimeString()}
        </div>
      </div>
    </div>
  );
}
