import React from "react";
import { Sc } from "./style";
import useBackButtonExit from "@hooks/useBackButtonExit";
import UserHeader from "./UserHeader";
import CycleOverview from "./CycleOverview";
import CyclePhase from "./CyclePhase";
import MiniCalendar from "./MiniCalendar";

const Home: React.FC = () => {
  useBackButtonExit();

  return (
    <Sc.Container>
      <UserHeader />
      <MiniCalendar />
      <CyclePhase />
      <CycleOverview />
    </Sc.Container>
  );
};

export default Home;
