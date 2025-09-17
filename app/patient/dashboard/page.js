"use client";

import { useRouter } from "next/navigation";
import Header from "@/components/PatientComponents/Header";
import { Calendar, Heart } from "lucide-react";
import FeatureCard from "@/ui/FeatureCard";

export default function PatientDashboard() {
  const router = useRouter();

  const handleBookAppointment = () => {
    router.push("/appointment");
  };

  return (
    <div className="flex flex-col gap-8 p-8">
      {/* Header stays on top */}
      <Header />

      {/* Cards row */}
      <div className="flex items-center justify-center flex-wrap gap-6">
        <FeatureCard
          icon={<Calendar size={22} />}
          title="Book Appointment"
          onClick={handleBookAppointment}
          description="AI-powered Ayurvedic doctor matching for your dosha"
          color="green"
        />
        <FeatureCard
          icon={<Heart size={22} />}
          title="Wellness Tips"
          description="Daily curated tips to balance your lifestyle"
          color="pink"
        />
        <FeatureCard
          icon={<Calendar size={22} />}
          title="Track Progress"
          description="Monitor your therapy sessions and improvements"
          color="blue"
        />
      </div>
    </div>
  );
}
