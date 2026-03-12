import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@unimart/db";
import bcrypt from "bcryptjs";
import NextAuth, { type NextAuthResult } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { z } from "zod";
import { authConfig } from "./auth.config";

export type { Session } from "next-auth";

const result: NextAuthResult = NextAuth({
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
  providers: [
    ...authConfig.providers,
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;

          const user = await db.user.findUnique({
            where: { email },
          });

          if (!user || !user.password) return null;

          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (passwordsMatch) return user;
        }

        return null;
      },
    }),
  ],
});

export const handlers: NextAuthResult["handlers"] = result.handlers;
export const auth: NextAuthResult["auth"] = result.auth;
export const signIn: NextAuthResult["signIn"] = result.signIn;
export const signOut: NextAuthResult["signOut"] = result.signOut;

export { authConfig };
