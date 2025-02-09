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
  const handleBlur = () => setIsFocused(field.value !== ""); // Mantém label acima se já tiver texto

  <Sc.Label isFocused={isFocused || field.value !== ""}>{label}</Sc.Label>;
  // <Sc.Label isFocused={isFocused || field.value !== `${label}`}>{label}</Sc.Label>;

  return (
    <Sc.Container>
      {label && (
        <Sc.Label style={{ zIndex: 999 }} isFocused={!!isFocused}>
          {label}
        </Sc.Label>
      )}
      <Sc.Input
        // style={{ elevation: isFocused ? 4 : 0 }}
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
        style={[
          {
            zIndex: 0,
            borderWidth: 2,
            borderColor: isFocused ? "#194ab4" : "#7e797e", // Azul escuro ao focar, cinza quando desfocado
            borderRadius: 4,
            elevation: isFocused ? 4 : 0, // Simula o "outline" no Android com sombra
            shadowColor: "#194ab4", // Cor azulada para a sombra sem transparência
            shadowOffset: { width: 0, height: 10 },
            shadowOpacity: 1, // Torna a sombra totalmente opaca
            shadowRadius: 6 // Intensidade da sombra no iOS
          }
        ]}
        {...props}
      />
      <Sc.Error>{inputErrors as string}</Sc.Error>
    </Sc.Container>
  );
}

export default GenericInput;
