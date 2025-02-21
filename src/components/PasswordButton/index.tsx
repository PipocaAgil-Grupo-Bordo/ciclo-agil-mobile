import EyeClosed from "@icons/EyeClosed.svg";
import EyeOpen from "@icons/EyeOpen.svg";
import { Sc } from "./style";
import { IPasswordButtonProps } from "./type";

function PasswordButton({ onPress, showPassword }: IPasswordButtonProps) {
  return <Sc.Button onPress={onPress}>{showPassword ? <EyeOpen /> : <EyeClosed />}</Sc.Button>;
}

export default PasswordButton;
