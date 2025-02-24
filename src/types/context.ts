import { Dispatch, ReactNode, SetStateAction } from "react";

import { UserData, WhoAmI } from "./auth";

export interface ITokenContext {
  refreshToken: string | undefined;
  accessToken: string | undefined;
  setRefreshToken: Dispatch<SetStateAction<string | undefined>>;
  setAccessToken: Dispatch<SetStateAction<string | undefined>>;
  userProfile: UserData | undefined;
  setUserProfile: Dispatch<React.SetStateAction<UserData | undefined>>;
  whoAmI: WhoAmI | undefined;
  setWhoAmI: Dispatch<React.SetStateAction<WhoAmI | undefined>>;
}

export interface TokenProviderProps {
  children: ReactNode;
}

export interface IProfileContext {
  userProfile: string | undefined;
  setUserProfile: Dispatch<SetStateAction<any | undefined>>;
}
