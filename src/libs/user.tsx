import { Profile, UserJWT } from "@/models/user";
import ky from "ky";
const backendUrl = "http://localhost:5000/api/v1";

export async function userLogIn(email: string, password: string) {
  const response = await fetch(`${backendUrl}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  if (!response.ok) {
    throw new Error("login failed");
  }
  const user = (await response.json()) as UserJWT;
  return user;
}

export async function getUserProfile(token: string) {
  const user = await ky
    .get("auth/me", {
      prefixUrl: backendUrl,
      fetch,
      headers: {
        Authorization: "Bearer " + token,
      },
    })
    .json<{ data: Profile }>();
  return user.data;
}
