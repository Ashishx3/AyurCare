"use client";
import Header from "@/components/PatientComponents/Header";
import React from "react";
import { useSelector } from "react-redux";

const PatientAppointmentsPage = () => {
  const appointments = useSelector((state) => state.appointments.appointments);

  if (appointments.length === 0) {
    return (
      <>
   <Header/>

      <p className="text-center text-gray-500 mt-10">You have no appointments yet.</p>
      </>
    );
  }

  return (
    <>
    <Header/>
    <div className="min-h-screen p-8 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <h1 className="text-3xl font-bold text-indigo-700 mb-8 text-center">
        My Appointments
      </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {appointments.map((appt) => (
          <div
            key={appt.id}
            className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-indigo-200 hover:shadow-xl transition"
          >
            <h2 className="text-xl font-semibold text-indigo-700 mb-2">
              {appt.name} ({appt.age} yrs)
            </h2>
            <p className="text-gray-600 mb-1">
              <span className="font-medium">Doctor:</span> {appt.doctor}
            </p>
            <p className="text-gray-600 mb-1">
              <span className="font-medium">Therapy:</span> {appt.therapy}
            </p>
            <p className="text-gray-600 mb-1">
              <span className="font-medium">Date:</span> {appt.date}
            </p>
            <p className="text-gray-600 mb-2">
              <span className="font-medium">Time:</span> {appt.time}
            </p>
            <p className="text-gray-600">
              <span className="font-medium">Status:</span>{" "}
              <span
                className={`font-semibold ${
                  appt.status === "Waiting"
                    ? "text-orange-500"
                    : appt.status === "Confirmed"
                    ? "text-green-600"
                    : "text-red-500"
                }`}
              >
                {appt.status === "Waiting"
                  ? "Waiting for confirmation"
                  : appt.status}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default PatientAppointmentsPage;
