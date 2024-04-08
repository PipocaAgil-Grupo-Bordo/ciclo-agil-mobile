import OTPInput from "./OTPInput";
import Header from "./Header";
import { useState } from "react";
import { useNavigation } from "@react-navigation/core";
import Buttons from "./Buttons";
import { View } from "react-native";
import { CodeRequestRouteParam, NavigationType } from "@type/routeType";
import { useRoute } from "@react-navigation/native";
import { handleRedefinitionCodeValidation } from "@utils/submitHelper";
import authApi from "@services/authApi";
import { AxiosError } from "axios";
import { Sc } from "./style";

const CodeRequest: React.FC = () => {
  const [otpValue, setOtpValue] = useState<string>();
  const [informationAboutCodeValidation, setInfo] = useState({ message: "", type: "" });
  const navigation = useNavigation<NavigationType>();
  const route = useRoute();
  const email = (route.params as CodeRequestRouteParam)?.email;

  const handleTextInput = (value: string) => {
    setOtpValue(value);
  };

  const handleResendCode = async () => {
    const resetBody = { email };
    try {
      await authApi.requestPasswordResetCode(resetBody);
      setInfo({
        ...informationAboutCodeValidation,
        message: "Código reenviado. Verifique a sua caixa de entrada.",
        type: "successful"
      });
    } catch (error) {
      const axiosError = error as AxiosError;

      // In case user somehow manages to get to this screen without a valid email
      if (axiosError.response && axiosError.response.status === 404) {
        alert("Email não encontrado. Tente novamente");
        return navigation.navigate("EmailRequest");
      }

      // Should server go down
      alert("Algo deu errado, tente novamente!");
    }
  };

  return (
    <Sc.Container nestedScrollEnabled contentContainerStyle={{ flexGrow: 1 }}>
      <Sc.Wrapper>
        <View>
          <Header />
          <OTPInput onTextChange={handleTextInput} resendCode={handleResendCode} />
          <Sc.CodeValidationMessage type={informationAboutCodeValidation.type}>
            {informationAboutCodeValidation.message}
          </Sc.CodeValidationMessage>
        </View>

        <Buttons
          onPress={() =>
            handleRedefinitionCodeValidation(
              otpValue,
              navigation,
              email,
              setInfo,
              informationAboutCodeValidation
            )
          }
        />
      </Sc.Wrapper>
    </Sc.Container>
  );
};

export default CodeRequest;
