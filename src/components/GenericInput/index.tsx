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

      <MaskInput
        textAlign="center"
        value={field.value}
        onChangeText={field.onChange}
        // @ts-expect-error
        name={name}
        errors={errors}
        mask={name === "birthdate" ? Masks.DATE_DDMMYYYY : undefined}
        style={{
          backgroundColor: "#e7ecf4",
          borderRadius: 5,
          padding: 16,
          borderWidth: inputErrors ? 1 : 0,
          borderColor: inputErrors && "#FF0000"
        }}
        secureTextEntry={(name === "password" && true) || (name === "confirmPassword" && true)}
        {...props}
      />

      <StyledInputError>{inputErrors as string}</StyledInputError>
    </StyledContainer>
  );
};

export default GenericInput;
