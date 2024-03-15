import React from "react";
import { StyledContainer, StyledInput, StyledInputError, StyledLabel } from "./style";
import { GenericInputProps } from "./type";
import { useController } from "react-hook-form";

/**
 * Generic text input with label and error message to ensure style consistency across components
 */
const GenericInput: React.FC<GenericInputProps> = ({ label, control, name, errors, ...props }) => {
  const { field } = useController({ control, defaultValue: "", name });

  return (
    <StyledContainer>
      {label && <StyledLabel>{label}</StyledLabel>}

      <StyledInput
        textAlign="center"
        value={field.value}
        onChangeText={field.onChange}
        name={name}
        errors={errors}
        secureTextEntry={name === "password" && true}
        {...props}
      />

      <StyledInputError>
        {(errors && errors[name] && errors[name]?.message) as string}
      </StyledInputError>
    </StyledContainer>
  );
};

export default GenericInput;
