import { AxiosResponse } from "axios";
import { secureStore } from "./secureStore";

/**
 * Ensure the tokens are stored in a context as well as secureStore from expo
 *
 * @param response - Authentication promise
 * @param setAccess - Update the access token
 * @param setRefresh - Update the refresh token
 */
const fetchTokens = async (
  response: AxiosResponse,
  setAccess: (accessToken: string) => void,
  setRefresh: (refreshToken: string) => void
) => {
  const accessToken = response.data.token.accessToken;
  const refreshToken = response.data.token.refreshToken;

  setAccess(accessToken);
  setRefresh(refreshToken);

  await secureStore.saveToken("accessToken", accessToken);
  await secureStore.saveToken("refreshToken", refreshToken);
};

export const tokenAuth = {
  fetchTokens
};
