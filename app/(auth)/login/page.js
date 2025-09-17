"use client"
import { useState, useEffect } from "react"
import { useForm } from "react-hook-form"
import { useSession, signIn, signOut } from "next-auth/react"
import { FaGoogle } from "react-icons/fa"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"

export default function Login() {
  const { data: session } = useSession()
  const router = useRouter()
  const [role, setRole] = useState("PATIENT") // default role

  // Redirect based on role
  useEffect(() => {
    if (session) {
      const timer = setTimeout(() => {
        if (session.user.role === "DOCTOR") {
          router.push("/doctor/dashboard")
        } else {
          router.push("/patient/dashboard")
        }
      }, 1500)
      return () => clearTimeout(timer)
    }
  }, [session, router])

  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = async (data) => {
    await signIn("credentials", {
      email: data.email,
      password: data.password,
      role,
      redirect: false,
    })
  }

  // Random Ayurveda quotes
  const [randomQuote, setRandomQuote] = useState("")
  useEffect(() => {
    const quotes = [
      "Ayurveda is not just about adding years to life, but adding life to years.",
      "Balance is the essence of health; Ayurveda teaches us how to find it.",
      "Food is medicine, and lifestyle is therapy – that’s Ayurveda.",
      "Health is harmony of body, mind, and spirit – Ayurveda aligns them all.",
      "Ancient roots, modern healing – that’s the power of Ayurveda."
    ]
    setRandomQuote(quotes[Math.floor(Math.random() * quotes.length)])
  }, [])

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-green-100 via-white to-green-200 px-6">
      {/* Left side */}
      <div className="flex-1 flex flex-col justify-center items-center p-8">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 0.9 } }}
          className="max-w-md text-center"
        >
          <h1 className="text-5xl font-extrabold mb-6 text-green-800">AyurCare Login</h1>
          <p className="text-lg text-gray-700 mb-6 italic">“{randomQuote}”</p>
        </motion.div>
      </div>

      {/* Right side */}
      <div className="flex-1 flex items-center justify-center p-8">
        <motion.div
          className="bg-white/70 backdrop-blur-md border border-white/40 rounded-2xl shadow-2xl p-10 w-full max-w-md text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }}
        >
          {session ? (
            <>
              <h2 className="text-2xl font-bold mb-4 text-green-800">Welcome, {session.user.name}</h2>
              <p className="text-gray-600 text-sm mb-6">Redirecting to dashboard...</p>
              <motion.button
                onClick={() => signOut()}
                className="cursor-pointer bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-2 rounded-lg font-semibold shadow-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Sign Out
              </motion.button>
            </>
          ) : (
            <>
              <h2 className="text-3xl font-bold mb-6 text-green-900">Sign In</h2>
              <p className="text-gray-600 mb-6">Login with email or Google</p>

              {/* Credentials Login */}
              <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 mb-6">
                <div className="text-left">
                  <label className="block text-gray-700 font-medium mb-1">Email</label>
                  <input
                    type="email"
                    {...register("email", { required: "Email is required" })}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>

                <div className="text-left">
                  <label className="block text-gray-700 font-medium mb-1">Password</label>
                  <input
                    type="password"
                    {...register("password", { required: "Password is required" })}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                  />
                  {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                </div>

                {/* Role Selector */}
                <div className="text-left">
                  <label className="block text-gray-700 font-medium mb-1">Role</label>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                  >
                    <option value="PATIENT">Patient</option>
                    <option value="DOCTOR">Doctor</option>
                  </select>
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-2 rounded-lg font-medium shadow-md hover:from-green-700 hover:to-green-800 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Sign in with Email
                </motion.button>
              </form>

              {/* Google Sign-In */}
              <motion.button
                onClick={() => signIn("google")}
                className="w-full flex items-center justify-center gap-2 bg-red-500 text-white py-2 px-4 rounded-lg font-medium shadow-md hover:bg-red-600 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaGoogle /> Sign in with Google
              </motion.button>
            </>
          )}
        </motion.div>
      </div>
    </div>
  )
}
