import NextAuth from "next-auth/next";

import { calcLength } from "framer-motion";
import { NEXT_AUTH } from "@/app/lib/auth";
const handler = NextAuth(NEXT_AUTH)


export {handler as GET , handler as Post}













