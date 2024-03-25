import OTPInput from "./OTPInput";
import Header from "./Header";
import { StyledCodeRequestContainer, StyledCodeRequestWrapper } from "./style";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/core";
import Buttons from "./Buttons";
import { View } from "react-native";
import { NavigationType } from "../../../types/routeType";

const CodeRequest: React.FC = () => {
  const [otpValue, setOtpValue] = useState<string>();
  const navigation = useNavigation<NavigationType>();

  const { handleSubmit } = useForm();

  const handleOnFilled = () => {
    try {
      console.log(otpValue);
      navigation.navigate("NewPassword");
    } catch (error) {
      console.log(error);
    }
  };

  const handleTextInput = (value: string) => {
    setOtpValue(value);
  };

  const handleResendCode = () => {
    console.log("Resend code button");
  };

  return (
    <StyledCodeRequestContainer nestedScrollEnabled contentContainerStyle={{ flexGrow: 1 }}>
      <StyledCodeRequestWrapper>
        <View>
          <Header />
          <OTPInput
            onTextChange={handleTextInput}
            // @ts-expect-error
            onFilled={handleSubmit(handleOnFilled)}
            resendCode={handleResendCode}
          />
        </View>

        <Buttons onPress={handleSubmit(handleOnFilled)} />
      </StyledCodeRequestWrapper>
    </StyledCodeRequestContainer>
  );
};

export default CodeRequest;
