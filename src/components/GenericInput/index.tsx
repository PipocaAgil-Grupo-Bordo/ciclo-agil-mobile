import React from "react";
import { StyledContainer, StyledInput, StyledInputError, StyledLabel } from "./style";
import { GenericInputProps } from "./type";
import { useController } from "react-hook-form";
import MaskInput, { Masks } from "react-native-mask-input";

/**
 * Generic text input with label and error message to ensure style consistency across components
 */
const GenericInput: React.FC<GenericInputProps> = ({ label, control, name, errors, ...props }) => {
  const { field } = useController({ control, defaultValue: "", name });
  const inputErrors = errors && errors[name] && errors[name]?.message;

  return (
    <StyledContainer>
      {label && <StyledLabel>{label}</StyledLabel>}

      <StyledInput
        textAlign="center"
        value={field.value}
        onChangeText={field.onChange}
        name={name}
        errors={errors}
        mask={name === "birthdate" ? Masks.DATE_DDMMYYYY : undefined}
        secureTextEntry={(name === "password" && true) || (name === "confirmPassword" && true)}
        {...props}
      />

      <StyledInputError>{inputErrors as string}</StyledInputError>
    </StyledContainer>
  );
};

export default GenericInput;
