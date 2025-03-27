"use client";

import { useSearchParams } from "next/navigation";

export default function IndexPage() {
  const searchParams = useSearchParams();
  const subject = searchParams?.get("subject");
  const subjNum = searchParams.get("subjNum");
  const duration = searchParams.get("duration");

  return (
    <div className="space-y-6">
      {subject && (
        <p className="text-3xl text-gray-700">
          <span className="font-semibold">Subject:</span> {subject}
        </p>
      )}
      {subjNum && (
        <p className="text-3xl text-gray-700">
          <span className="font-semibold">Subject Number:</span> {subjNum}
        </p>
      )}
      {duration && (
        <p className="text-3xl text-gray-700">
          <span className="font-semibold">Duration:</span> {duration}
        </p>
      )}
      {!subject && !subjNum && !duration && (
        <p className="text-2xl text-gray-500">No form data submitted yet.</p>
      )}
    </div>
  );
}
