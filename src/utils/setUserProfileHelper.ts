import authApi from "@services/authApi";
import { userApi } from "@services/userApi";
import { UserData, WhoAmI } from "@type/auth";
import { Dispatch } from "react";

export async function setUserInfo(
  accessToken: string,
  setUserProfile: Dispatch<React.SetStateAction<UserData | undefined>>
) {
  try {
    const axiosResponse = await userApi.getUserProfile(accessToken);
    setUserProfile(axiosResponse.data);
  } catch (error) {}
}

export async function storeWhoAmI(
  accessToken: string,
  setWhoAmI: Dispatch<React.SetStateAction<WhoAmI | undefined>>
) {
  try {
    const axiosResponse = await authApi.whoAmI(accessToken);
    setWhoAmI(axiosResponse.data);
  } catch (error) {}
}
