import React from "react";
import { LoginInput } from "./style";
import { Control, FieldErrors, useController } from "react-hook-form";
import { loginObject } from "../../types/loginType";

interface InputProps {
  name: 'email' | 'password';
  control: Control<loginObject>;
  errors: FieldErrors<loginObject>;
}

const Input: React.FC<InputProps> = ({ name, control, errors }) => {
  const { field } = useController({ control, defaultValue: '', name });

  return (
    <LoginInput
      value={field.value}
      onChangeText={field.onChange}
      errors={errors}
      placeholder={errors[`${name}`] && errors[`${name}`]?.message}
      placeholderTextColor="#FF0000"
      textAlign="center"
      name={name}
      secureTextEntry={name === "password" && true}
    />
  );
};

export default Input;
