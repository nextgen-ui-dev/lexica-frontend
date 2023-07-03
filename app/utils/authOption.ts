import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google"

export const authOption: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        }),
    ],
    debug: process.env.NODE_ENV === 'development',
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async jwt({ token, account, session }) {
            if (account) {
                token = Object.assign({}, token, { access_token: account.access_token });
            }
            console.debug(token)
            return token
        },
        async session({ session, token }) {
            if (session) {
                session = Object.assign({}, session, { access_token: token.access_token })
                // console.log(session);
            }
            return session
        }
    },
}