"use client";

import { Calendar } from "lucide-react";
import { SessionList } from "@/components/SessionList";

export default function SessionsPage() {
  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="flex items-center text-lg font-semibold text-gray-800">
          <Calendar className="w-5 h-5 mr-2 text-blue-500" />
          Today&apos;s Panchakarma Sessions
        </h2>
        <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          + Schedule
        </button>
      </div>

      {/* Session list */}
      <SessionList />
    </div>
  );
}
