import TextBox from "@components/TextBox";
import GenericButton from "@components/GenericButton";
import { useNavigation } from "@react-navigation/native";
import { NavigationType } from "@type/routeType";
import { Sc } from "./style";

const CycleDuration: React.FC = () => {
  const navigation = useNavigation<NavigationType>();

  return (
    <Sc.Container nestedScrollEnabled contentContainerStyle={{ flexGrow: 1 }}>
      <Sc.Wrapper>
        <TextBox>cia-59: Tela de duração do ciclo menstrual</TextBox>
      </Sc.Wrapper>
    </Sc.Container>
  );
};

export default CycleDuration;
