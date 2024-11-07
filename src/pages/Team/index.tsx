import { Sc } from "./team.style";
import useBackButtonExit from "@hooks/useBackButtonExit";
import BottomButton from "./BottomButton";
import Header from "./Header";
import Group from "./Group";

function Team() {
  useBackButtonExit();

  return (
    <Sc.Container contentContainerStyle={{ flexGrow: 1 }}>
      <Header />
      <Group />
      <BottomButton />
    </Sc.Container>
  );
}

export default Team;
