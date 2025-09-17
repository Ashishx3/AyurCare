"use client";
import { useSelector } from "react-redux";
export default function AppointmentsList({onCancel }) {

const appointmentData = useSelector((data) => data.appointments.appointments) || [];
// const appointmentData = useSelector((state) => state.appointments);
console.log("Appointments from store:", appointmentData);

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {appointmentData.map((appt) => (
        <div
          key={appt.id}
          className="flex items-center justify-between gap-4 p-5 rounded-2xl bg-white/70 border shadow-lg hover:scale-[1.02] transition"
        >
          {/* Details */}
          <div>
            <p className="font-bold text-lg text-gray-800">
              {appt.date} @ {appt.time}
            </p>
            <p className="text-sm text-gray-600">
              {appt.doctor} • {appt.therapy}
            </p>
            <span
              className={`px-3 py-1 mt-2 inline-block text-xs font-semibold rounded-full 
                ${appt.status === "Confirmed"
                  ? "bg-green-100 text-green-700"
                  : appt.status === "Pending"
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-red-100 text-red-700"
                }`}
            >
              {appt.status}
            </span>
          </div>

          {/* Cancel Button */}
          {appt.status !== "Cancelled" && (
            <button
              onClick={() => onCancel(appt.id)}
              className="px-4 py-2 text-sm bg-red-500 text-white rounded-xl hover:bg-red-600 transition"
            >
              Cancel
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
