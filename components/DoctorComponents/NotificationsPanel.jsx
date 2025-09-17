"use client";
export default function NotificationsPanel({ notifications }) {
  return (
    <aside className="w-80 bg-white/70 backdrop-blur-xl border border-white/50 rounded-3xl shadow-xl p-6">
      <h2 className="text-lg font-semibold mb-5 text-slate-800">🔔 Notifications</h2>
      <ul className="space-y-4">
        {notifications.map((note) => (
          <li
            key={note.id}
            className="p-4 rounded-2xl bg-gradient-to-r from-pink-50 to-indigo-50 text-sm shadow hover:shadow-lg transition"
          >
            {note.text}
          </li>
        ))}
      </ul>
    </aside>
  );
}
