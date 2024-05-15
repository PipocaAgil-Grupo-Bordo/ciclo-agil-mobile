import { Dispatch, ReactNode, SetStateAction } from "react";
import { UserData } from "./auth";
import { AxiosResponse } from "axios";

export interface ITokenContext {
  refreshToken: string | undefined;
  accessToken: string | undefined;
  setRefreshToken: Dispatch<SetStateAction<string | undefined>>;
  setAccessToken: Dispatch<SetStateAction<string | undefined>>;
  userProfile: AxiosResponse<UserData, any> | undefined;
}

export interface TokenProviderProps {
  children: ReactNode;
}

export interface IProfileContext {
  userProfile: string | undefined;
  setUserProfile: Dispatch<SetStateAction<any | undefined>>;
}
