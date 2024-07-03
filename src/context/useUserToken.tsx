import { UserData, WhoAmI } from "@type/auth";
import { ITokenContext, TokenProviderProps } from "@type/context";
import { createContext, useContext, useState } from "react";

export const TokenContext = createContext<ITokenContext | undefined>(undefined);

export const TokenProvider: React.FC<TokenProviderProps> = ({ children }) => {
  const [refreshToken, setRefreshToken] = useState<string>();
  const [accessToken, setAccessToken] = useState<string>();
  const [userProfile, setUserProfile] = useState<UserData>();
  const [whoAmI, setWhoAmI] = useState<WhoAmI>();

  return (
    <TokenContext.Provider
      value={{
        refreshToken,
        setRefreshToken,
        accessToken,
        setAccessToken,
        userProfile,
        setUserProfile,
        whoAmI,
        setWhoAmI
      }}
    >
      {children}
    </TokenContext.Provider>
  );
};

export const useTokenContext = () => {
  const context = useContext(TokenContext);

  if (!context) {
    throw new Error("useTokenContext must be used within a TokenProvider");
  }

  return context;
};
