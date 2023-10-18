export type UserJWT = {
  id: string;
  name: string;
  email: string;
  token: string;
};

export type Profile = {
  id: string;
  name: string;
  email: string;
  tel: string;
  role: "user" | "admin";
  createdAt: string;
};
