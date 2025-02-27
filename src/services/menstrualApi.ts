import { ICreateMenstrualPeriodDateResponse, ILastPeriod, IMenstrualPeriod } from "@type/menstrual";
import { AxiosResponse } from "axios";

import api from "./api";

async function createPeriodDate(
  cycleData: { date: string },
  token: string
): Promise<AxiosResponse<ICreateMenstrualPeriodDateResponse>> {
  const promise = api.post("menstrual-periods/dates", cycleData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    }
  });

  return promise;
}

async function getMenstrualPeriods({
  year,
  month,
  token
}: {
  year?: number;
  month?: number;
  token: string;
}): Promise<AxiosResponse<IMenstrualPeriod[]>> {
  // Define the query parameters
  const params = year && month ? { year, month } : year ? { year } : null;

  const promise = api.get("menstrual-periods", {
    headers: {
      Authorization: `Bearer ${token}`
    },
    params
  });

  return promise;
}

async function getLastMenstrualPeriod(token: string): Promise<AxiosResponse<ILastPeriod>> {
  const promise = api.get("menstrual-periods/last", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return promise;
}

async function deletePeriodDate(
  id: number,
  token: string
): Promise<AxiosResponse<{ code: string }>> {
  const promise = api.delete(`menstrual-periods/dates/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  return promise;
}

export const menstrualApi = {
  createPeriodDate,
  getMenstrualPeriods,
  getLastMenstrualPeriod,
  deletePeriodDate
};
