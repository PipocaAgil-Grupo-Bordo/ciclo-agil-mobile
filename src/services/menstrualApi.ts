import { AxiosResponse } from "axios";
import { UserData } from "@type/auth";
import instance from "./api";
import { ICreateMenstrualPeriodDateResponse } from "@type/menstrual";

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

async function createPeriodDate(
  cycleData: { date: string },
  token: string
): Promise<AxiosResponse<ICreateMenstrualPeriodDateResponse>> {
  const promise = instance.post("menstrual-period/date", cycleData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  });

  return promise;
}

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

async function deletePeriodDate(id: number, token: string): Promise<AxiosResponse<{ code: string }>> {
  const promise = instance.delete(`menstrual-period/date/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return promise;
}

export const menstrualApi = {
  updateCurrentCycle,
  createPeriodDate,
  getMenstrualPeriods,
  getLastMenstrualPeriod,
  deletePeriodDate
};
