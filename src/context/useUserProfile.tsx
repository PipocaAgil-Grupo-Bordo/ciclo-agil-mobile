import { IProfileContext, TokenProviderProps } from "@type/context";
import { createContext, useContext, useState } from "react";

export const ProfileContext = createContext<IProfileContext | undefined>(undefined);

export const ProfileProvider: React.FC<TokenProviderProps> = ({ children }) => {
  const [userProfile, setUserProfile] = useState<string>();

  return (
    <ProfileContext.Provider value={{ userProfile, setUserProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfileContext = () => {
  const context = useContext(ProfileContext);

  if (!context) {
    throw new Error("useProfileContext must be used within a ProfileProvider");
  }

  return context;
};
