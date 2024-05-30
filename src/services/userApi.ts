import { RegisterFields, UserData } from "@type/auth";
import api from "./api";
import { AxiosResponse } from "axios";
import { ICurrentCycle } from "@type/menstrual";

const signUpUser = (body: Omit<RegisterFields, "confirmEmail" | "confirmPassword">) => {
  const promise = api.post("/users", body);
  return promise;
}

export const userApi = {
  signUpUser
};
