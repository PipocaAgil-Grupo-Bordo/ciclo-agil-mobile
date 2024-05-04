import { ITokens } from "@type/auth";
import * as SecureStore from "expo-secure-store";

const saveToken = async (key: ITokens, value: string) => {
  await SecureStore.setItemAsync(key, value);
};

const getToken = async (key: ITokens) => {
  let token = await SecureStore.getItemAsync(key);
  return token;
};

const deleteToken = async (key: ITokens) => {
  await SecureStore.deleteItemAsync(key);
};

export const secureStore = {
  saveToken,
  getToken,
  deleteToken
};
