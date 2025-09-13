export default function SessionList({ sessions = [], updateStatus }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 border border-blue-100">
      <h2 className="text-lg font-semibold text-blue-800 mb-4">Upcoming Sessions</h2>
      {sessions.length === 0 ? (
        <p className="text-gray-500 text-sm">No sessions scheduled.</p>
      ) : (
        <div className="space-y-4">
          {sessions.map((session) => (
            <div
              key={session.id}
              className="flex items-center justify-between bg-blue-50 hover:bg-blue-100 transition-all p-4 rounded-xl"
            >
              <div>
                <p className="font-medium text-gray-800">{session.patient}</p>
                <p className="text-sm text-gray-500">
                  {session.therapy} • {session.date} at {session.time}
                </p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => updateStatus(session.id, "rescheduled")}
                  className="px-3 py-1 text-xs rounded-lg bg-blue-200 text-blue-800 hover:bg-blue-300 transition-all"
                >
                  Reschedule
                </button>

                <button
                  onClick={() =>
                    updateStatus(
                      session.id,
                      session.status === "completed" ? "scheduled" : "completed"
                    )
                  }
                  className={`px-3 py-1 text-xs rounded-lg transition-all ${
                    session.status === "completed"
                      ? "bg-orange-200 text-orange-800 hover:bg-orange-300"
                      : "bg-green-200 text-green-800 hover:bg-green-300"
                  }`}
                >
                  {session.status === "completed" ? "Completed" : "Check-In"}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
