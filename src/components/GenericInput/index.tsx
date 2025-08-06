import React, { useState } from "react";
import { GenericInputProps } from "./type";
import { useController, FieldValues } from "react-hook-form";
import { Masks } from "react-native-mask-input";
import { Sc } from "./style";
import { NewColorScheme } from "@styles/globalStyles";
import Feather from "@expo/vector-icons/Feather";

function GenericInput<T extends FieldValues>({
  label,
  control,
  name,
  errors,
  ...props
}: GenericInputProps<T>) {
  const { field } = useController({
    control,
    name,
    defaultValue: undefined
  });

  const inputName = name as string;
  const inputErrors = errors && errors[inputName] && errors[inputName]?.message;
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);
  const isPasswordInput = inputName === "password" || inputName === "confirmPassword";

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Sc.Container>
      {label && (
        <Sc.LabelContainer>
          <Sc.LabelBottomContainer isFocused={isFocused} />
          <Sc.Label>{label}</Sc.Label>
        </Sc.LabelContainer>
      )}
      <Sc.InputWrapper isFocused={isFocused}>
        <Sc.Input
          onFocus={handleFocus}
          onBlur={handleBlur}
          textAlign="left"
          value={field.value}
          onChangeText={field.onChange}
          placeholderTextColor={NewColorScheme.text.tertiary}
          name={inputName}
          id="passwordInput"
          errors={errors}
          isFocused={isFocused}
          mask={inputName === "birthdate" ? Masks.DATE_DDMMYYYY : undefined}
          secureTextEntry={isPasswordInput ? !showPassword : showPassword}
          {...props}
        />
        {isPasswordInput && (
          <Sc.PasswordButtonContainer onPress={toggleShowPassword}>
            <Feather name={showPassword ? "eye-off" : "eye"} size={24} color="#1B1A1B" />
          </Sc.PasswordButtonContainer>
        )}
      </Sc.InputWrapper>
      {inputErrors && <Sc.Error>{inputErrors as string}</Sc.Error>}
    </Sc.Container>
  );
}

export default GenericInput;
