import GenericInput from "@components/GenericInput";
import { FormInputsType, InputsProps } from "../type";

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
    />
  ));
}

export default Inputs;
