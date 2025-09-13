import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";
import StatsCard from "@/components/StatsCard";
import SessionList from "@/components/SessionList";
import PatientProgress from "@/components/PatientProgress";
import QuickActions from "@/components/QuickActions";
import AssistantWidget from "@/components/AssistantWidget";
import { Users, Activity, Clock, Percent } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <Sidebar />
      <Topbar />

      <main className="ml-60 mt-20 p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Section */}
        <div className="lg:col-span-2 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <StatsCard title="Active Patients" value="120" icon={Users} />
            <StatsCard title="Today’s Sessions" value="15" icon={Activity} />
            <StatsCard title="Success Rate" value="92%" icon={Percent} />
            <StatsCard title="Avg Session Time" value="45m" icon={Clock} />
          </div>

          <SessionList />
          <PatientProgress />
          <QuickActions />
        </div>

        {/* Right Section */}
        <div className="space-y-6">
          <AssistantWidget />
        </div>
      </main>
    </div>
  );
}
