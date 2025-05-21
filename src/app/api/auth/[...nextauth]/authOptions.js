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
      // credentials: {
      //   email: { label: "Email", type: "email" },
      //   password: { label: "Password", type: "password" },
      // },
      async authorize(credentials) {
        // console.log("=========Credentials property=======",credentials);
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
        const { name, email, image:userImage } = user;
        const { provider, providerAccountId } = account;
        const payload = {
          name,
          email,
          image: userImage,
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
    async redirect({ baseUrl }) {
      return baseUrl;
    },
    async jwt({ token, user }) {
      // console.log("user:", user);
      // console.log("token:", token);
      if (user) {
        token.coverPhoto = user.coverPhoto;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.coverPhoto = token.coverPhoto;
      return session;
    },
  },
};
