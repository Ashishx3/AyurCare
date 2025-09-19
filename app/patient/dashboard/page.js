
"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/PatientComponents/Header";
import FeatureCard from "@/ui/FeatureCard";

export default function PatientDashboard() {
  const router = useRouter();

  const handleBookAppointment = () => {
    router.push("/patient/appointment");
  };
  const handleProfile = () => {
    router.push("/patient/profile");
  };
  const handleSchedule = () => {
    router.push("/patient/schedules");
  };
  const handleFeedback = () => {
    router.push("/patient/Feedback");
  };
  const handleWellness = () => {
    router.push("/patient/Wellness");
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-50 via-white to-indigo-100">
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <Header />
      </div>

      <main className="flex flex-col gap-8 p-8">
        <div className="flex items-center justify-center flex-wrap gap-6">
          <FeatureCard
            imgSrc="/patientdashboard/calendar.png"
            title="Book Appointment"
            onClick={handleBookAppointment}
            description="AI-powered Ayurvedic doctor matching for your dosha"
            color="purple"
          />
          <FeatureCard
            imgSrc="/patientdashboard/person.png"
            title="Manage Profile"
            onClick={handleProfile}
            description="Update your ayurvedic health constitution and preferences"
            color="pink"
          />
          <FeatureCard
            imgSrc="/patientdashboard/schedule.png"
            title="My Schedule"
            onClick={handleSchedule}
            description="View your panchakarma and consultation appointments"
            color="indigo"
          />
          <FeatureCard
            imgSrc="/patientdashboard/heart.png"
            title="Wellness Tracking"
             onClick={handleWellness}
            description="Monitor your Dosha Balance & Holistic Wellness Journey"
            color="violet"
          />
          <FeatureCard
            imgSrc="/patientdashboard/feedback.png"
            title="Feedback"
            onClick={handleFeedback}
            description="Share your experience and help us improve"
            color="rose"
          />
        </div>
      </main>
    </div>
  );
}
