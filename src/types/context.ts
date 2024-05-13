import { Dispatch, ReactNode, SetStateAction } from "react";

export interface ITokenContext {
  refreshToken: string | undefined;
  accessToken: string | undefined;
  setRefreshToken: Dispatch<SetStateAction<string | undefined>>;
  setAccessToken: Dispatch<SetStateAction<string | undefined>>;
}

export interface TokenProviderProps {
  children: ReactNode;
}

export interface IProfileContext {
  userProfile: string | undefined;
  setUserProfile: Dispatch<SetStateAction< any | undefined>>;
}
