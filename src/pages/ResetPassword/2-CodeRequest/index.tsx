import OTPInput from "./OTPInput";
import Header from "./Header";
import { StyledCodeRequestContainer } from "./style";
import { useState } from "react";

const CodeRequest: React.FC = () => {
  const [otpValue, setOtpValue] = useState<string>("");
  const [disabled, setDisabled] = useState<boolean>(false);


  return (
    <StyledCodeRequestContainer>
      <Header />

      <OTPInput />
    </StyledCodeRequestContainer>
  );
};

export default CodeRequest;
