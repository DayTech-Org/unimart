import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@unimart/db";
import NextAuth, { type NextAuthResult } from "next-auth";
import { authConfig } from "./auth.config";

export type { Session } from "next-auth";

const result: NextAuthResult = NextAuth({
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});

export const handlers: NextAuthResult["handlers"] = result.handlers;
export const auth: NextAuthResult["auth"] = result.auth;
export const signIn: NextAuthResult["signIn"] = result.signIn;
export const signOut: NextAuthResult["signOut"] = result.signOut;

export { authConfig };
