import React, { useState } from "react";
import { GenericInputProps } from "./type";
import { useController } from "react-hook-form";
import { Masks } from "react-native-mask-input";
import { Sc } from "./style";
import { NewColorScheme } from "@styles/globalStyles";
import PasswordButton from "@components/PasswordButton";

function GenericInput({ label, control, name, errors, ...props }: GenericInputProps) {
  const { field } = useController({ control, defaultValue: "", name });
  const inputErrors = errors && errors[name] && errors[name]?.message;
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

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
          name={name}
          errors={errors}
          isFocused={isFocused}
          mask={name === "birthdate" ? Masks.DATE_DDMMYYYY : undefined}
          secureTextEntry={name === "password" ? !showPassword : false} // ✅ Usando o estado global
          {...props}
        />
      </Sc.InputWrapper>
      {name === "password" && (
        <Sc.ButtonPassowrdIcon>
          <PasswordButton showPassword={showPassword} onPress={toggleShowPassword} />
        </Sc.ButtonPassowrdIcon>
      )}
      <Sc.Error>{inputErrors as string}</Sc.Error>
    </Sc.Container>
  );
}

export default GenericInput;
