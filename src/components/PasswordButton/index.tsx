import EyeClosed from "@icons/EyeClosed.svg";
import EyeOpen from "@icons/EyeOpen.svg";
import { Sc } from "./style";

interface PasswordButtonProps {
  showPassword: boolean;
  onPress: () => void;
}

function PasswordButton({ onPress, showPassword }: PasswordButtonProps) {
  return <Sc.Button onPress={onPress}>{showPassword ? <EyeOpen /> : <EyeClosed />}</Sc.Button>;
}

export default PasswordButton;
