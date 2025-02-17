import GenericInput from "@components/GenericInput";
import { FormInputsType, InputsProps } from "../type";
import { Sc } from "./style";
import PasswordButton from "@components/PasswordButton";
import { useState } from "react";

function Inputs({ control, errors }: InputsProps) {
  const [showPassword, setShowPassword] = useState<boolean>(false);
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

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return formInputs.map((input) => (
    <Sc.Container key={input.name}>
      <GenericInput
        secureTextEntry={input.name === "password" ? !showPassword : false}
        label={input.label}
        placeholder={input.placeholder}
        name={input.name}
        control={control}
        errors={errors}
        keyboardType={input.keyboard}
        autoComplete={input.autoComplete}
      />
      {input.name === "password" ? (
        <Sc.ButtonContainer>
          <PasswordButton showPassword={showPassword} onPress={toggleShowPassword} />
        </Sc.ButtonContainer>
      ) : null}
    </Sc.Container>
  ));
}

export default Inputs;
