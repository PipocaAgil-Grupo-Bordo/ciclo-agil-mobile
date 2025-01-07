import React, { useEffect } from "react";
import PageContainer from "../../components/PageContainer";
import useBackButtonExit from "@hooks/useBackButtonExit";
import UserHeader from "./UserHeader";
import CycleOverview from "./CycleOverview";
import CyclePhase from "./CyclePhase";
import MiniCalendar from "./MiniCalendar";
import { useTokenContext } from "@context/useUserToken";
import { setUserInfo, storeWhoAmI } from "@utils/setUserProfileHelper";

function Home() {
  useBackButtonExit();
  const { accessToken, setUserProfile, userProfile, whoAmI, setWhoAmI } = useTokenContext();

  useEffect(() => {
    if (accessToken) {
      setUserInfo(accessToken, setUserProfile);
      storeWhoAmI(accessToken, setWhoAmI);
    }
  }, [accessToken]);

  return (
    <PageContainer>
      <UserHeader whoAmI={whoAmI} />
      <MiniCalendar />
      <CyclePhase />
      <CycleOverview userProfile={userProfile} />
    </PageContainer>
  );
}

export default Home;
