import GenericInput from "@components/GenericInput";
import { FormInputsType, InputsProps } from "../type";

function Inputs({ control, errors }: InputsProps) {
  const formInputs: FormInputsType[] = [
    {
      label: "Email:",
      name: "email",
      keyboard: "email-address",
      autoComplete: "email"
    },
    {
      label: "Senha:",
      name: "password",
      autoComplete: "password"
    }
  ];

  return formInputs.map((input, i) => (
    <GenericInput
      key={i}
      label={input.label}
      name={input.name}
      control={control}
      errors={errors}
      keyboardType={input.keyboard}
      autoComplete={input.autoComplete} />
  ));
}

export default Inputs;
