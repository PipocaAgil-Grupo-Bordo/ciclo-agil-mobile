import * as yup from "yup";

export function isValidEmail(value: string | undefined) {
  // Email validation
  const emailRegex = /^(?!.*@.*@)[\wçÇ\-.']+@[a-zA-Z]+(?:\.[a-zA-Z]{2,})+$/g;

  // Ensure value is not empty and matches the email regex
  return !!value && emailRegex.test(value);
}

export const emailSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .required("O email não pode ser vazio")
    .test("is-email", "Digite um email válido", (value) => isValidEmail(value))
    .transform((value) => (value ? value.toLowerCase() : value))
});
