import { ICurrentCycle, ILastPeriod } from "@type/menstrual";
import api from "./api";

const lastPeriod = (body: ILastPeriod, token: string) => {
  const promise = api.post("menstrual-period", body, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
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

export const menstrualApi = {
  lastPeriod,
  currentCycle
};
