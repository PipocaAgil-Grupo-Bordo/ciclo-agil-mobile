import { OtpInput } from "react-native-otp-entry";
import TextBox from "@components/TextBox";
import { OTPInputProps } from "../type";
import { Sc } from "./style";

const OTPIput: React.FC<OTPInputProps> = ({ onTextChange, onFilled, resendCode }) => {
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
            borderColor: "#AFB4BD",
            backgroundColor: "#E7ECF4"
          },
          pinCodeTextStyle: { fontFamily: "Montserrat", fontSize: 26 }
        }}
      />

      <Sc.Button onPress={resendCode}>
        <Sc.Text>
          <TextBox>Reenviar código</TextBox>
        </Sc.Text>
      </Sc.Button>
    </>
  );
};

export default OTPIput;
