import { OtpInput } from "react-native-otp-entry";

const OTPIput = () => {
  return (
    <OtpInput
      numberOfDigits={6}
      focusColor="#7d8188"
      focusStickBlinkingDuration={500}
      onTextChange={(text) => console.log(text)}
      onFilled={(text) => console.log(`OTP is ${text}`)}
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
  );
};

export default OTPIput;
