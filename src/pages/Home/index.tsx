import React from "react";
import { Sc } from "./style";
import TextBox from "@components/TextBox";
import useBackButtonExit from "@hooks/useBackButtonExit";

const Home: React.FC = () => {
  useBackButtonExit();

  return (
    <Sc.Container>
      <TextBox>Tela de ínicio</TextBox>
    </Sc.Container>
  );
};

export default Home;
