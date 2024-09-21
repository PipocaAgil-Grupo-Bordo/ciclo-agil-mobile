import { ILastPeriod } from "@type/menstrual";
import api from "./api";
import { AxiosResponse } from "axios";
import { UserData } from "@type/auth";
import instance from "./api";

function lastPeriod(body: ILastPeriod, token: string) {
  const promise = api.post("menstrual-period", body, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return promise;
}

/**
 * Update the user's menstrual cycle
 *
 * @param isMenstrualCycleRegular - Whether it is regular (true) or irregular (false)
 * @param menstrualCycleDuration - The duration based on the currenct cycle
 * @param token - The user token
 */
async function updateCurrentCycle(
  cycleData: { isMenstrualCycleRegular: boolean; menstrualCycleDuration: number },
  token: string
): Promise<AxiosResponse<UserData>> {
  const promise = instance.patch("profile", cycleData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  });

  return promise;
}


/**
 * Create a Period Date
 *
 * @param date - date of the period
 * @param token - The user token
 */
async function createPeriodDate(
  cycleData: { date: string },
  token: string
): Promise<AxiosResponse<UserData>> {
  const promise = instance.post("menstrual-period/date", cycleData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  });

  return promise;
}

/**
 * Get Menstrual Periods
 *
 * @param year - The year for which the periods are retrieved
 * @param month - (optional) The month for which the periods are retrieved
 * @param token - The user token
 */
async function getMenstrualPeriods(
  year: number,
  token: string,
  month?: number

): Promise<AxiosResponse<any>> {
  // Define the query parameters
  const params = month ? { year, month } : { year };

  const promise = instance.get("menstrual-period", {
    headers: {
      Authorization: `Bearer ${token}`
    },
    params
  });

  return promise;
}

/**
 * Get the last Menstrual Period
 *
 * @param token - The user token
 */
async function getLastMenstrualPeriod(
  token: string
): Promise<AxiosResponse<any>> {
  const promise = instance.get("menstrual-period/last", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return promise;
}

export const menstrualApi = {
  lastPeriod,
  updateCurrentCycle,
  createPeriodDate,
  getMenstrualPeriods,
  getLastMenstrualPeriod
};
