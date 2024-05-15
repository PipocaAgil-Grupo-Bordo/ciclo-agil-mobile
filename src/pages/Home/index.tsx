import React from "react";
import { Sc } from "./style";
import useBackButtonExit from "@hooks/useBackButtonExit";
import UserHeader from "./UserHeader";
import CycleOverview from "./CycleOverview";
import CyclePhase from "./CyclePhase";

const Home: React.FC = () => {
  useBackButtonExit();

  return (
    <Sc.Container>
      <UserHeader />
      <CyclePhase />
      <CycleOverview />
    </Sc.Container>
  );
};

export default Home;
