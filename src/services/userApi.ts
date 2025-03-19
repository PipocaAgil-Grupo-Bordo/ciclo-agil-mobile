import { RegisterFields, UserData } from "@type/auth";
import { AxiosResponse } from "axios";

import api from "./api";

function signUpUser(body: Omit<RegisterFields, "confirmEmail" | "confirmPassword">) {
  const promise = api.post("/users", body);
  return promise;
}

function getUserProfile(token: string): Promise<AxiosResponse<UserData>> {
  const promise = api.get("/profiles/my-profile", {
    headers: { Authorization: `Bearer ${token}` }
  });
  return promise;
}

async function updateUserProfile(
  data: {
    isMenstrualCycleRegular?: boolean;
    menstrualCycleDuration?: number;
    initialPeriodDate?: string;
  },
  token: string
): Promise<AxiosResponse<UserData>> {
  const promise = api.patch("/profiles", data, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  });

  return promise;
}

export const userApi = {
  signUpUser,
  getUserProfile,
  updateUserProfile
};
