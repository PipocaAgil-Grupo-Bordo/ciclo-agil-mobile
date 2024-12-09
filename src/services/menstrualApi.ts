import { AxiosResponse } from "axios";
import api from "./api";
import { ICreateMenstrualPeriodDateResponse } from "@type/menstrual";

async function createPeriodDate(
  cycleData: { date: string },
  token: string
): Promise<AxiosResponse<ICreateMenstrualPeriodDateResponse>> {
  const promise = api.post("menstrual-period/date", cycleData, {
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
}): Promise<AxiosResponse<any>> {
  // Define the query parameters
  const params = year && month ? { year, month } : year ? { year } : null;

  const promise = api.get("menstrual-period", {
    headers: {
      Authorization: `Bearer ${token}`
    },
    params
  });

  return promise;
}

async function getLastMenstrualPeriod(token: string): Promise<AxiosResponse<any>> {
  const promise = api.get("menstrual-period/last", {
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
  const promise = api.delete(`menstrual-period/date/${id}`, {
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
