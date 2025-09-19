"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateAppointmentStatus } from "@/app/redux/slice";
import Header from "@/components/DoctorComponents/Header";
import { motion } from "framer-motion";

export default function DoctorAppointments() {
  const dispatch = useDispatch();
  const appointments = useSelector((state) => state.appointments.appointments);

  const handleStatus = (id, status) => {
    dispatch(updateAppointmentStatus({ id, status }));
  };

  // Stats
  const total = appointments.length;
  const confirmed = appointments.filter((a) => a.status === "Confirmed").length;
  const waiting = appointments.filter((a) => a.status === "Waiting").length;
  const denied = appointments.filter((a) => a.status === "Denied").length;

  return (
    <>
      <Header />
      <div className="relative min-h-screen p-10 bg-gradient-to-br from-indigo-100 via-purple-50 to-blue-100">
        <div className="max-w-7xl mx-auto relative z-10">
          <h1 className="text-4xl font-extrabold text-center text-purple-800 mb-12 drop-shadow-md">
            Doctor Dashboard
          </h1>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {[
              { title: "Total", value: total, color: "from-purple-400 to-purple-600" },
              { title: "Confirmed", value: confirmed, color: "from-green-400 to-green-600" },
              { title: "Waiting", value: waiting, color: "from-orange-400 to-orange-600" },
              { title: "Denied", value: denied, color: "from-red-400 to-red-600" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`bg-gradient-to-r ${stat.color} text-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center`}
              >
                <p className="text-sm uppercase tracking-wide">{stat.title}</p>
                <p className="text-3xl font-bold">{stat.value}</p>
              </motion.div>
            ))}
          </div>

          {/* Appointments */}
          {appointments.length === 0 ? (
            <p className="text-gray-600 text-center text-lg mt-20">
              No appointments yet.
            </p>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {appointments.map((appt, index) => (
                <motion.div
                  key={appt.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative bg-white rounded-3xl shadow-xl p-6 border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition"
                >
                  {/* Avatar Circle */}
                  <div className="absolute -top-6 -left-6 w-14 h-14 rounded-full bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center justify-center text-white font-bold shadow-lg">
                    {appt.name.charAt(0)}
                  </div>

                  <h2 className="text-xl font-semibold text-purple-700 mb-2">
                    {appt.name} <span className="text-gray-500">({appt.age} yrs)</span>
                  </h2>
                  <p className="text-gray-600">
                    <span className="font-medium">Doctor:</span> {appt.doctor}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Therapy:</span> {appt.therapy}
                  </p>
                  <p className="text-gray-600">
                    <span className="font-medium">Date:</span> {appt.date}
                  </p>
                  <p className="text-gray-600 mb-3">
                    <span className="font-medium">Time:</span> {appt.time}
                  </p>

                  <p
                    className={`mb-4 font-semibold ${
                      appt.status === "Waiting"
                        ? "text-orange-500"
                        : appt.status === "Confirmed"
                        ? "text-green-600"
                        : "text-red-500"
                    }`}
                  >
                    Status: {appt.status}
                  </p>

                  {appt.status === "Waiting" && (
                    <div className="flex gap-4 mt-2">
                      <button
                        onClick={() => handleStatus(appt.id, "Confirmed")}
                        className="flex-1 py-2 bg-gradient-to-r from-green-400 to-green-600 text-white rounded-xl shadow hover:scale-105 transition"
                      >
                        ✅ Accept
                      </button>
                      <button
                        onClick={() => handleStatus(appt.id, "Denied")}
                        className="flex-1 py-2 bg-gradient-to-r from-red-400 to-red-600 text-white rounded-xl shadow hover:scale-105 transition"
                      >
                        ❌ Deny
                      </button>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
