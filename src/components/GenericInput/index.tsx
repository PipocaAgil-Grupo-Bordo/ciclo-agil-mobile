import React from "react";
import { GenericInputProps } from "./type";
import { useController } from "react-hook-form";
import { Masks } from "react-native-mask-input";
import { Sc } from "./style";

/**
 * Generic text input with label and error message to ensure style consistency across components
 */
const GenericInput: React.FC<GenericInputProps> = ({ label, control, name, errors, ...props }) => {
  const { field } = useController({ control, defaultValue: "", name });
  const inputErrors = errors && errors[name] && errors[name]?.message;

  return (
    <Sc.Container>
      {label && <Sc.Label>{label}</Sc.Label>}

      <Sc.Input
        textAlign="center"
        value={field.value}
        onChangeText={field.onChange}
        name={name}
        errors={errors}
        mask={name === "birthdate" ? Masks.DATE_DDMMYYYY : undefined}
        secureTextEntry={(name === "password" && true) || (name === "confirmPassword" && true)}
        {...props}
      />

      <Sc.Error>{inputErrors as string}</Sc.Error>
    </Sc.Container>
  );
};

export default GenericInput;
