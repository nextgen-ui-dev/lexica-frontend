import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import useOnboardingModal from "../hooks/useOnboardingModal";

export const authOption: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user, account, profile }) {
      console.debug("user: ", user);
      // TODO: Hit be to register user
      return true;
    },
    async jwt({ token, account, session, user }) {
      return {
        ...token,
        ...user,
      };
    },
    async session({ session, token }) {
      if (session) {
        session = Object.assign({}, session, {
          access_token: token.access_token,
          id: token.id,
        });
      }
      return session;
    },
  },
};
