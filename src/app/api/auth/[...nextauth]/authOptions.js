import loginUsers from "@/actions/auth/loginUsers";
import socialProviderUsers from "@/actions/auth/socialProviderUsers";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

export const authOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/signin",
  },
  providers: [
    // =================Email and Password Authentication======================
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
    // =========Google Authentication=============
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ==============Facebook Authentication=========
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      console.log("==========users from signin callbacks==========", user);
      if (account) {
        const { name, email, image } = user;
        const { provider, providerAccountId } = account;
        const payload = {
          name,
          email,
          photo: image,
          provider,
          providerAccountId,
          role: "user",
          password: null,
          coverPhoto: "",
        };
        const valid = await socialProviderUsers(payload);
        if (valid.status === "failed") {
          return false;
        }
      }
      return true;
    },
    async jwt({ token, user }) {
      token.user = user;
      return token;
    },
    async session({ session, token }) {
      session = token.user;
      return session;
    },
    async redirect({ baseUrl }) {
      return baseUrl;
    },
  },
};
