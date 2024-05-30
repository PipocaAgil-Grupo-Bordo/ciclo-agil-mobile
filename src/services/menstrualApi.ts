import { ILastPeriod } from "@type/menstrual";
import api from "./api";

const lastPeriod = (body: ILastPeriod, token: string) => {
  const promise = api.post("menstrual-period", body, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return promise;
};

export const menstrualApi = {
  lastPeriod,
};
