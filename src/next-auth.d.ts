import NextAuth from "next-auth";
import { UserJWT } from "./models/user";

declare module "next-auth" {
  interface Session {
    user: UserJWT;
  }
}
