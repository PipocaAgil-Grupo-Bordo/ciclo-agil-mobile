import React from "react";
import { Sc } from "./style";
import TextBox from "@components/TextBox";
import CycleOverview from "./CycleOverview";

const Home: React.FC = () => {
  return (
    <Sc.Container>
      <TextBox>Tela de ínicio</TextBox>
      <CycleOverview/>
    </Sc.Container>
  );
};

export default Home;
