import loginUsers from "@/actions/auth/loginUsers";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/signin",
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const data = await loginUsers(credentials);
          if (data.user && data.status === "success") {
            return data.user;
          } else {
            return null;
          }
        } catch (error) {
          console.error("Authentication failed", error);
          return null;
        }
      },
    }),
  ],
};
