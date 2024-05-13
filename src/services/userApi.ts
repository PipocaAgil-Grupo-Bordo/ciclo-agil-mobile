import { RegisterFields } from "@type/auth";
import api from "./api";

function signUpUser(body: Omit<RegisterFields, "confirmEmail" | "confirmPassword">) {
  const promise = api.post("/users", body);
  return promise;
}

function getUserProfile(token: String) {
  const promise = api.get("/profile", { headers: { Authorization: `Bearer ${token}` } });
  return promise;
}

export const userApi = {
  signUpUser,
  getUserProfile
};
