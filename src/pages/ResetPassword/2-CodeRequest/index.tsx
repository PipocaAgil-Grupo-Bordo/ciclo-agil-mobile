import { useState } from "react";

import Header from "@components/Header";
import { useNavigation } from "@react-navigation/core";
import { useRoute } from "@react-navigation/native";
import { CodeRequestRouteParam, NavigationType } from "@routes/type";
import authApi from "@services/authApi";
import { handleRedefinitionCodeValidation } from "@utils/submitHelper";
import { AxiosError } from "axios";
import { View } from "react-native";

import Buttons from "./Buttons";
import Confirmation from "./Confirmation";
import OTPInput from "./OTPInput";
import { Sc } from "./style";

function CodeRequest() {
  const [otpValue, setOtpValue] = useState<string>();
  const [codeValidationInfo, setCodeValidationInfo] = useState({ message: "", type: "" });
  const navigation = useNavigation<NavigationType>();
  const route = useRoute();
  const email = (route.params as CodeRequestRouteParam)?.email;

  function handleTextInput(value: string) {
    setOtpValue(value);
  }

  async function handleResendCode() {
    const resetBody = { email };
    try {
      await authApi.requestPasswordResetCode(resetBody);
      setCodeValidationInfo({
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
  }

  return (
    <Sc.Container nestedScrollEnabled contentContainerStyle={{ flexGrow: 1 }}>
      <Sc.Wrapper>
        <View>
          <Header title="Redefinir senha" />
          <Confirmation />
          <OTPInput onTextChange={handleTextInput} resendCode={handleResendCode} />
          <Sc.CodeValidationMessage type={codeValidationInfo.type as "successful" | "unsuccessful"}>
            {codeValidationInfo.message}
          </Sc.CodeValidationMessage>
        </View>

        <Buttons
          onPress={() =>
            handleRedefinitionCodeValidation(otpValue, navigation, email, setCodeValidationInfo)
          }
        />
      </Sc.Wrapper>
    </Sc.Container>
  );
}

export default CodeRequest;
