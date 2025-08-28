import { useNavigation } from "@react-navigation/native";
import { NavigationType } from "@routes/type";
import PasswordIllustrator from "@images/password-illustrator.png";
import GenericButton from "@components/GenericButton";
import { Text } from "react-native";
import { Sc } from "./style";

function SuccessResetPassword() {
  const navigation = useNavigation<NavigationType>();

  return (
    <Sc.Container nestedScrollEnabled contentContainerStyle={{ flexGrow: 1 }}>
      <Sc.Wrapper>
        <Sc.CenterWrapper>
          <Sc.Title>
            <Text>Pronto!</Text>
          </Sc.Title>
          <Sc.PasswordIllustrator source={PasswordIllustrator} />
          <Sc.Text>
            <Text>Senha alterada com sucesso!</Text>
          </Sc.Text>
        </Sc.CenterWrapper>
        <GenericButton state="accent" onPress={() => navigation.navigate("Login")}>
          <Text>Login</Text>
        </GenericButton>
      </Sc.Wrapper>
    </Sc.Container>
  );
}

export default SuccessResetPassword;
