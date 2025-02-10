import GenericInput from "@components/GenericInput";
import { FormInputsType, InputsProps } from "../type";
import { useState, useCallback } from "react";

function Inputs({ control, errors }: InputsProps) {
  const [focusedInput, setFocusedInput] = useState<string | null>(null);

  const handleFocus = useCallback((name: string) => {
    setFocusedInput(name);
  }, []);

  const handleBlur = useCallback(() => {
    setFocusedInput(null);
  }, []);

  const formInputs: FormInputsType[] = [
    {
      label: "Email:",
      placeholder: "Digite seu E-mail",
      name: "email",
      keyboard: "email-address",
      autoComplete: "email"
    },
    {
      label: "Senha:",
      placeholder: "Digite sua senha",
      name: "password",
      autoComplete: "password"
    }
  ];

  return formInputs.map((input, i) => (
    <GenericInput
      key={i}
      label={input.label}
      placeholder={input.placeholder}
      name={input.name}
      control={control}
      errors={errors}
      keyboardType={input.keyboard}
      autoComplete={input.autoComplete}
      isFocused={focusedInput === input.name}
      onFocus={() => handleFocus(input.name)}
      onBlur={handleBlur}
    />
  ));
}

export default Inputs;
