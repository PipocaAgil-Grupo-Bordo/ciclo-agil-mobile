import { NewColorScheme } from "@styles/globalStyles";
import { Text } from "react-native";
import { OtpInput } from "react-native-otp-entry";

import { Palette } from "@styles/palette";
import { OTPInputProps } from "../type";
import { Sc } from "./style";

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
            marginTop: 16
          },
          pinCodeContainerStyle: {
            width: 48,
            height: 56,
            borderRadius: 8,
            borderColor: Palette.neutralGray[500],
            backgroundColor: NewColorScheme.background.white
          },
          pinCodeTextStyle: { fontFamily: "Montserrat", fontSize: 26 }
        }}
      />

      <Sc.Button onPress={resendCode}>
        <Text>
          <Sc.Text>Reenviar código</Sc.Text>
        </Text>
      </Sc.Button>
    </>
  );
}

export default OTPIput;
