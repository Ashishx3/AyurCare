"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";
import Header from "@/components/DoctorComponents/Header";
import NotificationsPanel from "@/components/DoctorComponents/NotificationsPanel";
import AppointmentsList from "@/components/PatientComponents/AppointmentsList";

export default function DoctorDashboard() {
  const { data: session } = useSession();
  const handleCancel = (id) => {
      setAppointments((prev) =>
        prev.map((appt) =>
          appt.id === id ? { ...appt, status: "Cancelled" } : appt
        )
      );
    };


  const [notifications] = useState([
    { id: 1, text: "Reminder: Tomorrow's appointments need confirmation" },
    { id: 2, text: "New patient requests received" },
  ]);

  
 
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-pink-100 flex flex-col font-sans">
      <Header />

      <main className="flex flex-1 p-8 gap-8">
        <div className="flex-1 space-y-6">
          <div className="bg-white/60 backdrop-blur-lg shadow-xl rounded-3xl p-6 border hover:shadow-2xl transition">
            <h2 className="text-xl font-semibold mb-5 text-slate-800">
              Appointments
            </h2>
           
            <AppointmentsList onCancel={handleCancel} />
            
          </div>
        </div>

        <NotificationsPanel notifications={notifications} />
      </main>
    </div>
  );
}
