import { userApi } from "@services/userApi";
import { UserData } from "@type/auth";
import { AxiosResponse } from "axios";
import { Dispatch } from "react";

export async function setUserInfo(
  accessToken: string,
  setUserProfile: Dispatch<React.SetStateAction<AxiosResponse<UserData, any> | undefined>>
) {
  try {
    setUserProfile(await userApi.getUserProfile(accessToken));
  } catch (error) {}
}
