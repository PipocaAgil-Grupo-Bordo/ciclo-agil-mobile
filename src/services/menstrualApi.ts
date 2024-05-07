import api from "./api";

const lastPeriod = (body: any, token: string) => {
  const promise = api.post("menstrual-period", body, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return promise;
}

export const menstrualApi = {
  lastPeriod
}