import React, { useEffect } from "react";

import { useTokenContext } from "@context/useUserToken";
import useBackButtonExit from "@hooks/useBackButtonExit";
import { setUserInfo, storeWhoAmI } from "@utils/setUserProfileHelper";

import CycleOverview from "./CycleOverview";
import CyclePhase from "./CyclePhase";
import HomeTopBackground from "./HomeTopBackground";
import MiniCalendar from "./MiniCalendar";
import { Sc } from "./style";
import UserHeader from "./UserHeader";
import PageContainer from "../../components/PageContainer";

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
    <PageContainer style={{ paddingTop: 0, paddingRight: 0, paddingBottom: 0, paddingLeft: 0 }}>
      <HomeTopBackground />
      <Sc.Container>
        <UserHeader whoAmI={whoAmI} />
        <MiniCalendar />
        <CyclePhase />
        <CycleOverview userProfile={userProfile} />
      </Sc.Container>
    </PageContainer>
  );
}

export default Home;
