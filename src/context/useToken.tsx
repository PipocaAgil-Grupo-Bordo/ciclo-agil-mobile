import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";

interface ITokenContext {
  refresh: string | undefined;
  access: string | undefined;
  setRefresh: Dispatch<SetStateAction<string | undefined>>;
  setAccess: Dispatch<SetStateAction<string | undefined>>;
}

export const TokenContext = createContext<ITokenContext | undefined>(undefined);

interface TokenProviderProps {
  children: ReactNode;
}

export function TokenProvider({ children }: TokenProviderProps) {
  const [refresh, setRefresh] = useState<string>();
  const [access, setAccess] = useState<string>();

  return (
    <TokenContext.Provider value={{ refresh, setRefresh, access, setAccess }}>
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
