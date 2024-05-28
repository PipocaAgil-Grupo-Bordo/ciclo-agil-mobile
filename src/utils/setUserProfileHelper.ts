import { userApi } from "@services/userApi";
import { UserData } from "@type/auth";
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
