import { AxiosResponse } from "axios";
import { secureStore } from "./secureStore";

const fetchTokens = async (
  response: AxiosResponse,
  setAccess: (accessToken: string) => void,
  setRefresh: (refreshToken: string) => void
) => {
  const accessToken = response.data.token.accessToken;
  const refreshToken = response.data.token.refreshToken;

  setAccess(accessToken);
  setRefresh(refreshToken);

  await secureStore.saveToken({ key: "accessToken", value: accessToken });
  await secureStore.saveToken({ key: "refreshToken", value: refreshToken });
};

export const tokenAuth = {
  fetchTokens
};
