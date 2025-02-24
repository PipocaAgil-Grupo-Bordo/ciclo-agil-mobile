import { Dispatch } from "react";

import authApi from "@services/authApi";
import { userApi } from "@services/userApi";
import { UserData, WhoAmI } from "@type/auth";

export async function setUserInfo(
  accessToken: string,
  setUserProfile: Dispatch<React.SetStateAction<UserData | undefined>>
) {
  const axiosResponse = await userApi.getUserProfile(accessToken);
  setUserProfile(axiosResponse.data);
}

export async function storeWhoAmI(
  accessToken: string,
  setWhoAmI: Dispatch<React.SetStateAction<WhoAmI | undefined>>
) {
  const axiosResponse = await authApi.whoAmI(accessToken);
  setWhoAmI(axiosResponse.data);
}
