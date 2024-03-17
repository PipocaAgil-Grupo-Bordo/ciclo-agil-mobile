import * as yup from "yup";
import { emailSchema, isValidEmail } from "./emailSchema";

// Date format
const dateRegex = /^(0[1-9]|[1-2][0-9]|3[0-1])(0[1-9]|1[0-2])(19\d{2}|20(?:[0-1][0-9]|20|24))$/;

// Password format (pelo menos uma letra minuscula, uma maíscula, um número, um símbolo)
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/;

export const registerSchema = yup.object().shape({
  userName: yup
    .string()
    .required("O nome não pode ser vazio")
    .min(3, "O nome deve conter pelo menos 3 caracteres"),
  birthDate: yup
    .string()
    .required("Data de nascimento não pode ser vazia")
    .matches(dateRegex, "Formato de data inválido (dd/mm/aaaa)"),
  email: yup
    .string()
    .required("O email não pode ser vazio")
    .test("is-email", "Digite um email válido", (value) => isValidEmail(value))
    .transform((value) => (value ? value.toLowerCase() : value)),
  password: yup
    .string()
    .required("A senha não pode ser vazia")
    .min(8, "A senha deve conter pelo menos 8 caracteres")
    .matches(passwordRegex, "Senha não apresenta os erquisitos.")
});
