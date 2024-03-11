import React from "react";
import { ErrorMessage, InputContainer, LoginInput } from "./style";
import { Control, FieldErrors, useController } from "react-hook-form";
import { loginObject } from "../../types/loginType";

interface InputProps {
  name: "email" | "password";
  control: Control<loginObject>;
  errors: FieldErrors<loginObject>;
}

const Input: React.FC<InputProps> = ({ name, control, errors }) => {
  const { field } = useController({ control, defaultValue: "", name });

  return (
    <InputContainer>
      <LoginInput
        value={field.value}
        onChangeText={field.onChange}
        errors={errors}
        textAlign="center"
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
