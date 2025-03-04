import { AxiosResponse } from "axios";

import { secureStore } from "./secureStoreHelper";

/**
 * Ensure the tokens are stored in a context as well as secureStore from expo
 *
 * @param response - Authentication promise
 * @param setAccessToken - Update the access token
 * @param setRefreshToken - Update the refresh token
 */
async function fetchTokens(
  response: AxiosResponse,
  setAccessToken: (accessToken: string) => void,
  setRefreshToken: (refreshToken: string) => void
) {
  const accessToken = response.data.token.accessToken;
  const refreshToken = response.data.token.refreshToken;

  setAccessToken(accessToken);
  setRefreshToken(refreshToken);

  await secureStore.saveToken("accessToken", accessToken);
  await secureStore.saveToken("refreshToken", refreshToken);
}

/**
 * Ensure tokens are deleted from both secureStore and context for a proper log out
 *
 * @param setAccessToken - Delete the access token
 * @param setRefreshToken - Delete the refresh token
 */
async function deleteTokens(
  setAccessToken: (accessToken: string | undefined) => void,
  setRefreshToken: (refreshToken: string | undefined) => void
) {
  await secureStore.deleteToken("accessToken");
  await secureStore.deleteToken("refreshToken");

  setAccessToken(undefined);
  setRefreshToken(undefined);
}

export const tokenAuth = {
  fetchTokens,
  deleteTokens
};
