import { registerObject } from "@type/auth";
import api from "./api";

function signUpUser(body: Omit<registerObject, "confirmEmail" | "confirmPassword">) {
  const promise = api.post("/users", body);
  return promise;
}

export const userApi = {
  signUpUser
};
