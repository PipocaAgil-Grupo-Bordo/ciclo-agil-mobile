import React from "react";
import { Sc } from "./style";
import useBackButtonExit from "@hooks/useBackButtonExit";
import UserHeader from "./UserHeader";
import CycleOverview from "./CycleOverview";
import CyclePhase from "./CyclePhase";
import { useTokenContext } from "@context/useUserToken";
import { userApi } from "@services/userApi";
import { useProfileContext } from "@context/useUserProfile";

const Home: React.FC = () => {
  useBackButtonExit();
  const { accessToken } = useTokenContext();
  const { setUserProfile } = useProfileContext();
  async () => {
    try {
      setUserProfile(accessToken && (await userApi.getUserProfile(accessToken)));
    } catch (error) {}
  };
  return (
    <Sc.Container>
      <UserHeader />
      <CyclePhase />
      <CycleOverview />
    </Sc.Container>
  );
};

export default Home;
