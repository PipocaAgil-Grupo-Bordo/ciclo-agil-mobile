import { ITokenContext, TokenProviderProps } from "@type/context";
import { createContext, useContext, useState } from "react";

export const TokenContext = createContext<ITokenContext | undefined>(undefined);

export function TokenProvider({ children }: TokenProviderProps) {
  const [refreshToken, setRefreshToken] = useState<string>();
  const [accessToken, setAccessToken] = useState<string>();

  return (
    <TokenContext.Provider value={{ refreshToken, setRefreshToken, accessToken, setAccessToken }}>
      {children}
    </TokenContext.Provider>
  );
}

export function useTokenContext(): ITokenContext {
  const context = useContext(TokenContext);

  if (!context) {
    throw new Error("useTokenContext must be used within a TokenProvider");
  }

  return context;
}
