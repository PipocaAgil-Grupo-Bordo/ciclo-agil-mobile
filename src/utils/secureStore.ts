import { ISaveToken, ITokens } from "@type/auth";
import * as SecureStore from "expo-secure-store";

async function saveToken({ key, value }: ISaveToken) {
  await SecureStore.setItemAsync(key, value);
}

async function getToken(key: ITokens) {
  let token = await SecureStore.getItemAsync(key);
  return token;
}

async function deleteToken(key: ITokens) {
  await SecureStore.deleteItemAsync(key);
}

export const secureStore = {
  saveToken,
  getToken,
  deleteToken
};
