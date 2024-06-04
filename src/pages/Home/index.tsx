import React, { useEffect } from "react";
import { Sc } from "./style";
import useBackButtonExit from "@hooks/useBackButtonExit";
import UserHeader from "./UserHeader";
import CycleOverview from "./CycleOverview";
import CyclePhase from "./CyclePhase";
import MiniCalendar from "./MiniCalendar";
import { useTokenContext } from "@context/useUserToken";
import { setUserInfo } from "@utils/setUserProfileHelper";

const Home: React.FC = () => {
  useBackButtonExit();
  const { accessToken, setUserProfile, userProfile } = useTokenContext();
  useEffect(() => {
    if (accessToken) {
      setUserInfo(accessToken, setUserProfile);
    }
  }, [accessToken]);
  return (
    <Sc.Container>
      <UserHeader />
      <MiniCalendar />
      <CyclePhase />
      <CycleOverview userProfile={userProfile} />
    </Sc.Container>
  );
};

export default Home;
