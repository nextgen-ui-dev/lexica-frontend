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
        async jwt({ token, account, session, user }) {
            // console.debug(token)
            return {
                ...token,
                ...user,
            }
        },
        async session({ session, token }) {
            // console.debug('this id: ', token.id)
            if (session) {
                session = Object.assign({}, session, { access_token: token.access_token, id: token.id })
            }
            // console.debug(session)
            return session
        }
    },
}