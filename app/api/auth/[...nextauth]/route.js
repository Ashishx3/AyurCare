import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    // Google login
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    // Credentials login (for Doctor / Patient roles)
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
        role: { label: "Role", type: "text" }, // patient or doctor
      },
      async authorize(credentials) {
        // ⚡ For now, bypass DB (hardcoded check)
        if (
          credentials.email === "doctor@test.com" &&
          credentials.password === "123"
        ) {
          return { id: "1", name: "Dr. Strange", email: credentials.email, role: "DOCTOR" };
        }

        if (
          credentials.email === "patient@test.com" &&
          credentials.password === "123"
        ) {
          return { id: "2", name: "John Doe", email: credentials.email, role: "PATIENT" };
        }

        // ❌ Invalid login
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role || "PATIENT"; // default role
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.role = token.role;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
