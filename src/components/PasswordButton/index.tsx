import EyeClosed from "@icons/EyeClosed.svg";
// import EyeOpen from "@icons/EyeOpen.svg";
import { Sc } from "./style";
import { useState } from "react";

interface PasswordButtonProps {
  showPassword: boolean;
  onPress: () => void;
}

function PasswordButton({ onPress, showPassword }: PasswordButtonProps) {
  return (
    <Sc.Button onPress={onPress}>
      {showPassword ? <EyeClosed fill="red" /> : <EyeClosed />}
    </Sc.Button>
  );
}

export default PasswordButton;
