import React from "react";
import { ErrorMessage, InputContainer, LoginInput } from "./style";
import { Control, FieldErrors, useController } from "react-hook-form";
import { loginObject } from "../../types/loginType";
import { KeyboardType } from "react-native";

interface InputProps {
  name: "email" | "password";
  control: Control<loginObject>;
  errors: FieldErrors<loginObject>;
  keyboardType?: KeyboardType
}

const Input: React.FC<InputProps> = ({ name, control, errors, keyboardType }) => {
  const { field } = useController({ control, defaultValue: "", name });

  return (
    <InputContainer>
      <LoginInput
        value={field.value}
        onChangeText={field.onChange}
        errors={errors}
        textAlign="center"
        keyboardType={keyboardType}
        name={name}
        secureTextEntry={name === "password" && true}
      />
      <ErrorMessage>
        {errors && errors[`${name}`] && errors[`${name}`]?.message}
      </ErrorMessage>
    </InputContainer>
  );
};

export default Input;
