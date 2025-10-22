"use client";
import { useRouter } from "next/navigation";
import Header from "@/components/PatientComponents/Header";
import FeatureCard from "@/ui/FeatureCard";
import Footer from "@/components/Footer";

export default function PatientDashboard() {
  const router = useRouter();

  const handleBookAppointment = () => router.push("/patient/appointment");
  const handleProfile = () => router.push("/patient/Profile");
  const handleSchedule = () => router.push("/patient/schedules");
  const handleFeedback = () => router.push("/patient/Feedback");
  const handleWellness = () => router.push("/patient/Wellness");
  

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-100 via-purple-50 to-indigo-200">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <Header />
      </div>

      {/* Main */}
      <main className="flex flex-col gap-12 p-8 pb-24">
        {/* Feature Cards */}
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

        {/* Daily Wellness Tip */}
        <section>
          <h2 className="text-2xl font-bold text-purple-800 mb-4 text-center">
            🌿 Daily Wellness Tip
          </h2>
          <div className="bg-gradient-to-r from-purple-100 to-white p-6 rounded-2xl shadow-md text-center">
            <p className="text-lg text-gray-700">
              Start your day with a glass of warm water infused with turmeric and
              ginger to balance <strong>Kapha dosha</strong> and boost immunity.
            </p>
          </div>
        </section>

        {/* Dosha Insights */}
        <section>
          <h2 className="text-2xl font-bold text-indigo-800 mb-6 text-center">
            ⚖️ Dosha Insights
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {/* Vata */}
            <div className="p-5 rounded-xl bg-gradient-to-br from-purple-50 to-white shadow hover:scale-105 transition">
              <h3 className="text-lg font-semibold text-purple-700 mb-2">
                Vata Dosha
              </h3>
              <p className="text-slate-600 text-sm">
                Governs movement, energy & flexibility.  
                <strong>Tip:</strong> Eat warm, grounding foods.  
                <strong>Cure:</strong> Avoid cold/raw meals, practice yoga.
              </p>
            </div>
            {/* Pitta */}
            <div className="p-5 rounded-xl bg-gradient-to-br from-rose-50 to-white shadow hover:scale-105 transition">
              <h3 className="text-lg font-semibold text-rose-700 mb-2">
                Pitta Dosha
              </h3>
              <p className="text-slate-600 text-sm">
                Controls digestion, metabolism & transformation.  
                <strong>Tip:</strong> Favor cooling foods (cucumber, mint).  
                <strong>Cure:</strong> Avoid spicy/oily food, stay calm.
              </p>
            </div>
            {/* Kapha */}
            <div className="p-5 rounded-xl bg-gradient-to-br from-emerald-50 to-white shadow hover:scale-105 transition">
              <h3 className="text-lg font-semibold text-emerald-700 mb-2">
                Kapha Dosha
              </h3>
              <p className="text-slate-600 text-sm">
                Governs strength, stability & immunity.  
                <strong>Tip:</strong> Stay active, prefer light foods.  
                <strong>Cure:</strong> Avoid heavy dairy, add cardio.
              </p>
            </div>
          </div>
        </section>

        {/* Diet Suggestions */}
        <section>
          <h2 className="text-2xl font-bold text-pink-800 mb-4 text-center">
            🥗 Diet Suggestions
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 text-lg">
            <li>Eat according to your Dosha type.</li>
            <li>Prefer seasonal fruits & freshly cooked meals.</li>
            <li>Avoid excessive junk & packaged food.</li>
          </ul>
        </section>

        {/* Lifestyle & Yoga */}
        <section>
          <h2 className="text-2xl font-bold text-teal-800 mb-4 text-center">
            🧘 Lifestyle & Yoga
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-gradient-to-br from-teal-100 to-white rounded-xl shadow">
              <h3 className="font-semibold">Morning Routine</h3>
              <p className="text-gray-600">
                Start with 10 min of Pranayama + Sun Salutations.
              </p>
            </div>
            <div className="p-6 bg-gradient-to-br from-orange-100 to-white rounded-xl shadow">
              <h3 className="font-semibold">Evening Routine</h3>
              <p className="text-gray-600">
                Light walk + herbal tea to calm your body before sleep.
              </p>
            </div>
          </div>
        </section>

        {/* Remedies */}
        <section>
          <h2 className="text-2xl font-bold text-rose-800 mb-4 text-center">
            🌸 Simple Remedies
          </h2>
          <div className="bg-gradient-to-r from-rose-100 to-white p-6 rounded-2xl shadow-md">
            <p className="text-lg text-gray-700 text-center">
              For mild indigestion: Try ajwain (carom seeds) tea after meals.
            </p>
          </div>
        </section>
      </main>

      {/* SOS Button */}
      <div className="fixed bottom-6 right-6">
        <button
          onClick={() => alert("🚨 Emergency SOS Triggered")}
          className="px-8 py-4 rounded-full bg-gradient-to-r from-rose-500 to-rose-600 text-white font-bold text-lg shadow-xl hover:scale-110 transform transition-all"
        >
          🚨 SOS
        </button>
      </div>
      <Footer/>
    </div>

  );
}
