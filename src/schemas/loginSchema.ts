import * as yup from "yup";

import { isValidEmail } from "./emailSchema";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .trim()
    .required("O email não pode ser vazio")
    .test("is-email", "Digite um email válido", (value) => isValidEmail(value))
    .transform((value) => (value ? value.toLowerCase() : value)),
  password: yup
    .string()
    .required("A senha não pode ser vazia")
    .min(8, "A senha deve conter pelo menos 8 dígitos")
});
