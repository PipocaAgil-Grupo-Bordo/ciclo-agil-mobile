import React from "react";
import { Sc } from "./style";
import useBackButtonExit from "@hooks/useBackButtonExit";
import UserHeader from "./UserHeader";

const Home: React.FC = () => {
  useBackButtonExit();

  return (
    <Sc.Container>
      <UserHeader />
    </Sc.Container>
  );
};

export default Home;
