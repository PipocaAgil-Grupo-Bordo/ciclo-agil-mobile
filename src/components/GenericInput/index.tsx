import React, { useState } from "react";
import { GenericInputProps } from "./type";
import { useController } from "react-hook-form";
import { Masks } from "react-native-mask-input";
import { Sc } from "./style";
import { ColorScheme } from "@styles/globalStyles";
import { Shadow } from "react-native-shadow-2";

/**
 * Text input with label and error message
 */
function GenericInput({ label, control, name, errors, ...props }: GenericInputProps) {
  const { field } = useController({ control, defaultValue: "", name });
  const inputErrors = errors && errors[name] && errors[name]?.message;
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <Sc.Container>
      {label && (
        <Sc.Label style={{ zIndex: 999 }} isFocused={isFocused}>
          {label}
        </Sc.Label>
      )}
      <Shadow
        disabled={isFocused ? false : true}
        distance={4}
        startColor="#b4d2f8"
        style={{ borderRadius: 5 }}
      >
        <Sc.Input
          onFocus={handleFocus}
          onBlur={handleBlur}
          textAlign="left"
          value={field.value}
          onChangeText={field.onChange}
          placeholderTextColor={ColorScheme.text.tertiary}
          name={name}
          errors={errors}
          mask={name === "birthdate" ? Masks.DATE_DDMMYYYY : undefined}
          secureTextEntry={(name === "password" && true) || (name === "confirmPassword" && true)}
          {...props}
        />
      </Shadow>
      <Sc.Error>{inputErrors as string}</Sc.Error>
    </Sc.Container>
  );
}

export default GenericInput;
