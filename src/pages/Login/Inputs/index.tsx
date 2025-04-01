import GenericInput from "@components/GenericInput";

import { FormInputsType, InputsProps } from "../type";
import { Sc } from "./style";

function Inputs({ control, errors }: InputsProps) {
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

  return formInputs.map((input) => (
    <Sc.Container key={input.name}>
      <GenericInput
        label={input.label}
        placeholder={input.placeholder}
        name={input.name}
        control={control}
        errors={errors}
        keyboardType={input.keyboard}
        autoComplete={input.autoComplete}
      />
    </Sc.Container>
  ));
}

export default Inputs;
