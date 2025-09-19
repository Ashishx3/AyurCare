"use client"
import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { motion } from "framer-motion";

const COLORS = ["#06b6d4", "#f97316", "#a78bfa", "#34d399", "#f43f5e"];

const initialGraphData = [
  { date: "Day 1", completed: 2, pending: 5 },
  { date: "Day 2", completed: 4, pending: 3 },
  { date: "Day 3", completed: 3, pending: 4 },
  { date: "Day 4", completed: 5, pending: 2 },
  { date: "Day 5", completed: 6, pending: 1 },
];

const initialPieData = [
  { name: "Massage", value: 40 },
  { name: "Panchakarma", value: 25 },
  { name: "Herbal", value: 15 },
  { name: "Yoga", value: 12 },
  { name: "Diet", value: 8 },
];

export default function AyurCareDashboard() {
  const [graphData, setGraphData] = useState(initialGraphData);
  const [pieData, setPieData] = useState(initialPieData);
  const [totalTherapies, setTotalTherapies] = useState(
    initialPieData.reduce((s, p) => s + p.value, 0)
  );

  function handleCompleteTherapy() {
    setGraphData((prev) => {
      const next = [...prev];
      const last = next[next.length - 1];
      const updated = { ...last, completed: last.completed + 1 };
      next[next.length - 1] = updated;
      return next;
    });

    setPieData((prev) => {
      const next = prev.map((p) => ({ ...p }));
      const idx = Math.floor(Math.random() * next.length);
      next[idx].value += 1;
      return next;
    });

    setTotalTherapies((t) => t + 1);
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-slate-50 p-6">
      <div className="max-w-7xl mx-auto">
        <header className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight">AyurCare Dashboard</h1>
            <p className="text-sm text-slate-300">Animated insights • gamified therapy tracker</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleCompleteTherapy}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-teal-400 to-cyan-500 text-slate-900 font-semibold shadow-lg hover:scale-105 transition"
            >
              Complete Therapy +1
            </button>
            <div className="text-right text-sm text-slate-300">
              <div>Powered by</div>
              <div className="font-medium text-white">AyurCare Analytics</div>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div
            className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-4 shadow-2xl border border-slate-700"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <h2 className="text-xl font-semibold mb-2">Therapy progress (last 5 days)</h2>
            <p className="text-xs text-slate-400 mb-4">Scroll to animate. Updates automatically when therapy is completed.</p>

            <div style={{ width: "100%", height: 300 }}>
              <ResponsiveContainer>
                <LineChart data={graphData} margin={{ top: 5, right: 20, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#0f172a" />
                  <XAxis dataKey="date" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="completed" stroke="#06b6d4" strokeWidth={3} activeDot={{ r: 6 }} />
                  <Line type="monotone" dataKey="pending" stroke="#f97316" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2 text-sm text-slate-300">
              <div className="p-3 rounded-lg bg-slate-800/40">Total therapies: <span className="font-semibold text-white">{totalTherapies}</span></div>
              <div className="p-3 rounded-lg bg-slate-800/40">Last update: <span className="font-semibold text-white">Now</span></div>
            </div>
          </motion.div>

          <motion.div
            className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-4 shadow-2xl border border-slate-700 flex flex-col items-center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
          >
            <h2 className="text-xl font-semibold mb-2">Therapy types distribution</h2>
            <p className="text-xs text-slate-400 mb-4">Pie chart has a gentle wheeled rotation and interactive hover.</p>

            <div className="relative w-full flex items-center justify-center" style={{ height: 300 }}>
              <div className="w-64 h-64 rounded-full flex items-center justify-center rotate-wheel">
                <ResponsiveContainer width={250} height={250}>
                  <PieChart>
                    <Pie
                      data={pieData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      outerRadius={90}
                      innerRadius={45}
                      paddingAngle={3}
                      isAnimationActive={true}
                    >
                      {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend verticalAlign="bottom" />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="mt-3 text-sm text-slate-300 w-full">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {pieData.map((p, i) => (
                  <div key={p.name} className="flex items-center gap-3 p-2 rounded-lg bg-slate-800/30">
                    <div className="w-4 h-4 rounded" style={{ background: COLORS[i % COLORS.length] }} />
                    <div className="flex-1">
                      <div className="text-sm font-medium">{p.name}</div>
                      <div className="text-xs text-slate-400">{p.value} sessions</div>
                    </div>
                    <div className="text-sm font-semibold">{Math.round((p.value / totalTherapies) * 100)}%</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <motion.section
          className="mt-8 bg-slate-900/60 rounded-2xl p-6 border border-slate-700 shadow-inner"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          <h3 className="text-lg font-semibold mb-3">Reports & Logs</h3>
          <p className="text-sm text-slate-400 mb-4">Quick glance reports, downloadable summaries, and detailed logs.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-lg bg-slate-800/40">
              <h4 className="font-medium">Daily Summary</h4>
              <p className="text-xs text-slate-300">Completed: {graphData[graphData.length - 1].completed}</p>
              <p className="text-xs text-slate-300">Pending: {graphData[graphData.length - 1].pending}</p>
            </div>

            <div className="p-4 rounded-lg bg-slate-800/40">
              <h4 className="font-medium">Therapy Breakdown</h4>
              <ul className="text-xs text-slate-300 mt-2">
                {pieData.map((p) => (
                  <li key={p.name}>{p.name}: {p.value} sessions</li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-slate-800/40">
              <h4 className="font-medium">Export</h4>
              <p className="text-xs text-slate-300 mt-2">Download as CSV or JSON for ML pipelines.</p>
              <div className="mt-3 flex gap-2">
                <button className="px-3 py-1 rounded bg-slate-700/60 text-sm">Export CSV</button>
                <button className="px-3 py-1 rounded bg-slate-700/60 text-sm">Export JSON</button>
              </div>
            </div>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="text-left text-slate-400 text-xs border-b border-slate-700">
                <tr>
                  <th className="pb-2">Time</th>
                  <th className="pb-2">Event</th>
                  <th className="pb-2">Details</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-800">
                  <td className="py-3">Now</td>
                  <td className="py-3">Therapy completed</td>
                  <td className="py-3">Auto-updated charts and distribution</td>
                </tr>
                <tr className="border-b border-slate-800">
                  <td className="py-3">1 hour ago</td>
                  <td className="py-3">Report exported</td>
                  <td className="py-3">CSV generated for ML</td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.section>

        <footer className="mt-8 text-center text-xs text-slate-400">© {new Date().getFullYear()} AyurCare • Built with ❤️</footer>
      </div>

      <style jsx>{`
        @keyframes wheelRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .rotate-wheel { animation: wheelRotate 20s linear infinite; }
        .rotate-wheel:hover { animation-play-state: paused; transform: scale(1.02); }
      `}</style>
    </div>
  );
}
