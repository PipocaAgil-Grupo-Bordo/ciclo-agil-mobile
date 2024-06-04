import { ILastPeriod } from "@type/menstrual";
import api from "./api";
import { AxiosResponse } from "axios";
import { UserData } from "@type/auth";
import instance from "./api";

const lastPeriod = (body: ILastPeriod, token: string) => {
  const promise = api.post("menstrual-period", body, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return promise;
};

/**
 * Update the user's menstrual cycle
 *
 * @param isMenstrualCycleRegular - Whether it is regular (true) or irregular (false)
 * @param menstrualCycleDuration - The duration based on the currenct cycle
 * @param token - The user token
 */
const updateCurrentCycle = async (
  cycleData: { isMenstrualCycleRegular: boolean; menstrualCycleDuration: number },
  token: string
): Promise<AxiosResponse<UserData>> => {
  const promise = instance.patch("profile", cycleData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  });

  return promise;
};
export const menstrualApi = {
  lastPeriod,
  updateCurrentCycle
};
