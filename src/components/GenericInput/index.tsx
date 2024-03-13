import React from "react";
import { StyledInput } from "./style";
import { TextInputProps } from "react-native";

interface GenericInputProps extends TextInputProps {}

/**
 * Generic text input to ensure style consistency across components
 *
 * If you need to style it further, you can import just the styleSheet like so:
 * import StyledInput from "./path";
 * export const AnotherInput = styled(StyledInput)` // rest of the styles `
 */
const GenericInput: React.FC<GenericInputProps> = ({ ...rest }) => {
  return <StyledInput {...rest} />;
};

export default GenericInput;
