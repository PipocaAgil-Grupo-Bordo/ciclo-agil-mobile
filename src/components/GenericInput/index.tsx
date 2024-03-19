import React from "react";
import { StyledContainer, StyledInput, StyledLabelWrapper } from "./style";
import { GenericInputProps } from "./type";
import { useController } from "react-hook-form";
import TextBox from "../TextBox";

/**
 * Generic text input with label and error message to ensure style consistency across components
 */
const GenericInput: React.FC<GenericInputProps> = ({ label, control, name, errors, ...props }) => {
  const { field } = useController({ control, defaultValue: "", name });

  return (
    <StyledContainer>
      {label && (
        <StyledLabelWrapper>
          <TextBox size="sm" color="neutral-blue--900">
            {label}
          </TextBox>
        </StyledLabelWrapper>
      )}

      <StyledInput
        textAlign="center"
        value={field.value}
        onChangeText={field.onChange}
        name={name}
        errors={errors}
        secureTextEntry={name === "password" && true}
        {...props}
      />

      <TextBox size="sm" color="danger--500">
        {(errors && errors[name] && errors[name]?.message) as string}
      </TextBox>
    </StyledContainer>
  );
};

export default GenericInput;
