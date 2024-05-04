import { AxiosResponse } from "axios";
import { secureStore } from "./secureStore";

/**
 * Ensure the tokens are stored in a context as well as secureStore from expo
 *
 * @param response - Authentication promise
 * @param setAccessToken - Update the access token
 * @param setRefreshToken - Update the refresh token
 */
const fetchTokens = async (
  response: AxiosResponse,
  setAccessToken: (accessToken: string) => void,
  setRefreshToken: (refreshToken: string) => void
) => {
  const accessToken = response.data.token.accessToken;
  const refreshToken = response.data.token.refreshToken;

  setAccessToken(accessToken);
  setRefreshToken(refreshToken);

  await secureStore.saveToken("accessToken", accessToken);
  await secureStore.saveToken("refreshToken", refreshToken);
};

export const tokenAuth = {
  fetchTokens
};
