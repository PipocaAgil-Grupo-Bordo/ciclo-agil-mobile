import React from "react";
import { GenericInputProps } from "./type";
import { useController } from "react-hook-form";
import { Masks } from "react-native-mask-input";
import { Sc } from "./style";
import { Palette } from "@styles/palette";
import { NewColorScheme } from "@styles/globalStyles";

/**
 * Text input with label and error message
 */
function GenericInput({ label, control, name, errors, ...props }: GenericInputProps) {
  const { field } = useController({ control, defaultValue: "", name });
  const inputErrors = errors && errors[name] && errors[name]?.message;

  return (
    <Sc.Container>
      <Sc.LabelWrapper
        colors={[NewColorScheme.background.white, Palette.info[100]]}
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0 }}
      >
        {label && <Sc.Label>{label}</Sc.Label>}
      </Sc.LabelWrapper>

      <Sc.Input
        textAlign="left"
        value={field.value}
        onChangeText={field.onChange}
        placeholderTextColor={NewColorScheme.text.tertiary}
        name={name}
        errors={errors}
        mask={name === "birthdate" ? Masks.DATE_DDMMYYYY : undefined}
        secureTextEntry={(name === "password" && true) || (name === "confirmPassword" && true)}
        {...props}
      />

      <Sc.Error>{inputErrors as string}</Sc.Error>
    </Sc.Container>
  );
}

export default GenericInput;
