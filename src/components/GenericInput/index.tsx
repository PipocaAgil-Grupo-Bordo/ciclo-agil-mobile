import React, { useState } from "react";
import { GenericInputProps } from "./type";
import { useController } from "react-hook-form";
import { Masks } from "react-native-mask-input";
import { Sc } from "./style";
import { ColorScheme } from "@styles/globalStyles";

/**
 * Text input with label and error message
 */
function GenericInput({ label, control, name, errors, ...props }: GenericInputProps) {
  const { field } = useController({ control, defaultValue: "", name });
  const inputErrors = errors && errors[name] && errors[name]?.message;
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false); // Mantém label acima se já tiver texto

  <Sc.Label isFocused={isFocused || field.value !== ""}>{label}</Sc.Label>;
  // <Sc.Label isFocused={isFocused || field.value !== `${label}`}>{label}</Sc.Label>;

  return (
    <Sc.Container>
      {label && (
        <Sc.LabelContainer>
          <Sc.LabelBottomContainer></Sc.LabelBottomContainer>
          <Sc.Label style={{ zIndex: 999 }} isFocused={isFocused}>
            {label}
          </Sc.Label>
        </Sc.LabelContainer>
      )}
      <Sc.Input
        onFocus={handleFocus}
        onBlur={handleBlur}
        textAlign="left"
        value={field.value}
        onChangeText={field.onChange}
        placeholderTextColor={ColorScheme.text.tertiary}
        name={name}
        errors={errors}
        isFocused={isFocused}
        mask={name === "birthdate" ? Masks.DATE_DDMMYYYY : undefined}
        secureTextEntry={(name === "password" && true) || (name === "confirmPassword" && true)}
        {...props}
      />
      <Sc.Error>{inputErrors as string}</Sc.Error>
    </Sc.Container>
  );
}

export default GenericInput;
