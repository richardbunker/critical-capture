import prisma from "@/lib/prisma";
import { validateUser } from "@/lib/utils";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "Username" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // Get user from db
        const db_user = await prisma.user.findFirst({ where: { username: credentials?.username } });
        if (db_user) {
          return await validateUser(db_user, credentials?.password);
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ credentials }) {
      return true;
    },
    async redirect({ baseUrl }) {
      return baseUrl;
    },
    async session({ session, token, user }) {
      return session;
    },
  },
});

export { handler as GET, handler as POST };
