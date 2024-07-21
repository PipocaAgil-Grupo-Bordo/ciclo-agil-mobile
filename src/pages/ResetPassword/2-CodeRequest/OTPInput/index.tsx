import { OtpInput } from "react-native-otp-entry";
import { OTPInputProps } from "../type";
import { Sc } from "./style";
import { ColorScheme } from "@styles/globalStyles";

function OTPIput({ onTextChange, onFilled, resendCode }: OTPInputProps) {
  return (
    <>
      <OtpInput
        numberOfDigits={6}
        focusColor="#7d8188"
        focusStickBlinkingDuration={500}
        onTextChange={onTextChange}
        autoFocus={false}
        onFilled={onFilled}
        theme={{
          containerStyle: {
            marginTop: 46
          },
          pinCodeContainerStyle: {
            width: 45,
            height: 48,
            borderRadius: 8,
            borderColor: ColorScheme.border.primary,
            backgroundColor: ColorScheme.background.secondary
          },
          pinCodeTextStyle: { fontFamily: "Montserrat", fontSize: 26 }
        }}
      />

      <Sc.Button onPress={resendCode}>
        <Sc.Text>Reenviar código</Sc.Text>
      </Sc.Button>
    </>
  );
}

export default OTPIput;
