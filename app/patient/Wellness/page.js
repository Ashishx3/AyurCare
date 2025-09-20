"use client";
import Header from "@/components/PatientComponents/Header";
import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

// Softer pastel colors
const COLORS = ["#8dd3c7", "#fabebe", "#bebada", "#80b1d3", "#fdb462"];

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

  return (
    <>
    <Header/>
    
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 text-gray-800 p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <header className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-purple-700">AyurCare Analysis</h1>
          <button
            onClick={handleCompleteTherapy}
            className="px-5 py-2 bg-purple-600 text-white rounded-lg shadow-sm hover:bg-purple-700 transition"
          >
            + Complete Therapy
          </button>
        </header>

        {/* Charts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Line chart */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold mb-3 text-purple-700">Therapy Progress</h2>
            <ResponsiveContainer width="100%" height={260}>
              <LineChart data={graphData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="date" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip />
                <Line type="monotone" dataKey="completed" stroke="#8dd3c7" strokeWidth={3} />
                <Line type="monotone" dataKey="pending" stroke="#fabebe" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
            <p className="mt-3 text-sm text-gray-600">
              Total therapies: <span className="font-semibold">{totalTherapies}</span>
            </p>
          </div>

          {/* Pie chart */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold mb-3 text-purple-700">Therapy Types</h2>
            <ResponsiveContainer width="100%" height={260}>
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={90}
                  label
                >
                  {pieData.map((entry, index) => (
                    <Cell key={index} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
