"use client";
import { useRouter } from "next/navigation";
import Header from "@/components/DoctorComponents/Header";
import FeatureCard from "@/ui/FeatureCard";

export default function DoctorDashboard() {
  const router = useRouter();

  const handleAppointments = () => router.push("/doctor/appointments");
  const handleSchedule = () => router.push("/doctor/schedules");
  const handlePatients = () => router.push("/doctor/patients");
  const handleFeedback = () => router.push("/doctor/feedback");

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-100 via-indigo-50 to-indigo-200">
      {/* Sticky Header */}
      <div className="sticky top-0 z-50 bg-white/10 backdrop-blur-xl shadow-lg border-b border-white/30">
        <Header />
      </div>

      {/* Main Content */}
      <main className="flex flex-col gap-10 p-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-center  bg-clip-text text-black animate-text">
          Welcome, Doctor!
        </h1>

        <div className="flex items-center justify-center flex-wrap gap-8">
          <FeatureCard
            imgSrc="/doctordashboard/appointments.png"
            title="My Appointments"
            onClick={handleAppointments}
            description="View all upcoming patient appointments"
            color="purple"
            glass
          />

          <FeatureCard
            imgSrc="/doctordashboard/schedule.png"
            title="Manage Schedule"
            onClick={handleSchedule}
            description="Set or update your consultation and therapy timings"
            color="indigo"
            glass
          />

         

          <FeatureCard
            imgSrc="/doctordashboard/feedback.png"
            title="Feedback"
            onClick={handleFeedback}
            description="Check feedback from patients to improve service"
            color="rose"
            glass
          />
        </div>
      </main>
    </div>
  );
}
