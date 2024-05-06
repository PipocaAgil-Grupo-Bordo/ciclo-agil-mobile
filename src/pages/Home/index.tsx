import React from "react";
import { Sc } from "./style";
import useBackButtonExit from "@hooks/useBackButtonExit";
import UserHeader from "./UserHeader";
import CycleOverview from "./CycleOverview";

const Home: React.FC = () => {
  useBackButtonExit();

  return (
    <Sc.Container>
      <UserHeader />
      <CycleOverview/>
    </Sc.Container>
  );
};

export default Home;
