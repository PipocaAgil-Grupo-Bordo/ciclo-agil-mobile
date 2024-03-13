import React from "react";
import { StyledInput } from "./style";
import { TextInputProps } from "react-native";

interface GenericInputProps extends TextInputProps {}

const GenericInput: React.FC<GenericInputProps> = ({ ...rest }) => {
  return <StyledInput {...rest} />;
};

export default GenericInput;
