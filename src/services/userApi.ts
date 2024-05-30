import { RegisterFields } from "@type/auth";
import api from "./api";
import { ICurrentCycle } from "@type/menstrual";

const signUpUser = (body: Omit<RegisterFields, "confirmEmail" | "confirmPassword">) => {
  const promise = api.post("/users", body);
  return promise;
};

const currentCycle = (body: ICurrentCycle, token: string) => {
  const promise = api.patch("profile", body, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return promise;
};

export const userApi = {
  signUpUser,
  currentCycle
};
