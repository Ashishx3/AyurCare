  "use client";

  import { useEffect, useState } from "react";
  import { Calendar, Clock, User, UserCircle2, CheckCircle } from "lucide-react";
  import { useDispatch } from "react-redux";
  import { addAppointment } from "@/app/redux/slice";
  import { useRouter } from "next/navigation";

  export default function AppointmentForm() {
    const [form, setform] = useState({
      name: "",
      age: "",
      doctor: "",
      date: "",
      time: "",
      therapy: "",
    });
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const dispatch = useDispatch();

    const doctors = ["Dr. Sharma", "Dr. Iyer", "Dr. Mehta"];
    const therapies = [
      "🌿 Panchakarma",
      "💆 Ayurvedic Massage",
      "🧘 Detox",
      "✨ Rejuvenation",
    ];

    const handleChange = (e) => {
      const { name, value } = e.target;
      if (name === "age" && value === "") {
        setform({ ...form, [name]: "" });
      } else {
        setform({ ...form, [name]: value });
      }
    };
    
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setLoading(true);
       console.log("Dispatching appointment:", form)
      dispatch(addAppointment(form));

      // Show loader for 2s before redirect
      setTimeout(() => {
        router.push("/patient/dashboard");
      }, 2000);
    };

    const Input = ({ icon: Icon, value, onChange, ...props }) => (
      <div className="flex items-center bg-white/80 border border-purple-200 rounded-xl px-3 shadow-sm focus-within:ring-2 focus-within:ring-purple-400 transition">
        {Icon && <Icon className="w-5 h-5 text-purple-400" />}
        <input
          {...props}
          value={value}
          onChange={onChange}
          className="w-full bg-transparent px-3 py-3 outline-none text-gray-700 placeholder-gray-400"
        />
      </div>
    );

    if (loading) {
      return (
        <div className="flex flex-col items-center justify-center h-full text-center p-10">
          <CheckCircle className="w-16 h-16 text-purple-600 animate-bounce mb-4" />
          <h2 className="text-2xl font-bold text-purple-700">
            Appointment Scheduled Successfully!
          </h2>
          <p className="text-gray-500 mt-2">
            Redirecting you to your dashboard...
          </p>
          <div className="mt-6 w-12 h-12 border-4 border-purple-300 border-t-purple-600 rounded-full animate-spin"></div>
        </div>
      );
    }

    return (
      <form
        onSubmit={handleSubmit}
        className="space-y-6 animate-fadeInUp bg-gradient-to-br from-purple-50 via-white to-indigo-50 p-8 rounded-2xl shadow-lg"
      >
        <h2 className="text-3xl font-bold text-center text-purple-700">
          Book Appointment
        </h2>
        <p className="text-gray-500 text-center">
          Fill in details to schedule your Ayurvedic therapy 🌿
        </p>

        <Input
          icon={User}
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <Input
          icon={UserCircle2}
          type="number"
          name="age"
          placeholder="Age"
          value={form.age}
          onChange={handleChange}
          required
        />

        <select
          name="doctor"
          value={form.doctor}
          onChange={handleChange}
          required
          className="w-full bg-white/80 border border-purple-200 px-3 py-3 rounded-xl shadow-sm text-gray-700 focus:ring-2 focus:ring-purple-400 transition"
        >
          <option value="">-- Choose Doctor --</option>
          {doctors.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>

        <div className="grid grid-cols-2 gap-4">
          <Input
            icon={Calendar}
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
          />
          <Input
            icon={Clock}
            type="time"
            name="time"
            value={form.time}
            onChange={handleChange}
            required
          />
        </div>

        <select
          name="therapy"
          value={form.therapy}
          onChange={handleChange}
          required
          className="w-full bg-white/80 border border-purple-200 px-3 py-3 rounded-xl shadow-sm text-gray-700 focus:ring-2 focus:ring-purple-400 transition"
        >
          <option value="">-- Choose Therapy --</option>
          {therapies.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>

        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold rounded-xl shadow-md hover:scale-[1.02] active:scale-[0.98] transition"
        >
          Submit & Schedule
        </button>
      </form>
    );
  }
