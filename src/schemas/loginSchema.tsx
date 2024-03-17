import * as yup from "yup";

// Ensure email always follow the same pattern
const isValidEmail = (value: string | undefined) => {
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Ensure valeu is not empty and matches the email regex
  return !!value && emailRegex.test(value.toLowerCase());
};

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required("O email não pode ser vazio")
    .test("is-email", "Digite um email válido", (value) => isValidEmail(value))
    .transform((value) => (value ? value.toLowerCase() : value)),
  password: yup
    .string()
    .required("A senha não pode ser vazia")
    .min(8, "A senha deve conter pelo menos 8 dígitos")
});
