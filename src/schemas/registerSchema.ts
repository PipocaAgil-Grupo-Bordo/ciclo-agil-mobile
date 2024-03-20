import * as yup from "yup";
import { emailSchema, isValidEmail } from "./emailSchema";

// Date format: Accept only numbers, not letters nor symbols
const dateRegex = /^(0[1-9]|[1-2][0-9]|3[0-1])(0[1-9]|1[0-2])(19\d{2}|20(?:[0-1][0-9]|20|24))$/;

// Password format (at least one uppercase letter, one lowercase, one number, and one symbol)
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/;

export const registerSchema = yup.object().shape({
  name: yup
    .string()
    .required("O nome não pode ser vazio")
    .min(2, "O nome deve conter pelo menos 2 caracteres"),
  birthDate: yup
    .string()
    .required("Data de nascimento não pode ser vazia")
    .matches(dateRegex, "Formato de data inválido (dd/mm/aaaa)"),
  email: yup
    .string()
    .required("O email não pode ser vazio")
    .test("is-email", "Digite um email válido", (value) => isValidEmail(value))
    .transform((value) => (value ? value.toLowerCase() : value)),
  confirmEmail: yup
    .string()
    .required("O email não pode ser vazio")
    .oneOf([yup.ref("email")], "Os emails não coincidem")
    .transform((value) => (value ? value.toLowerCase() : value)),
  password: yup
    .string()
    .required("A senha não pode ser vazia")
    .min(8, "A senha deve conter pelo menos 8 caracteres")
    .test("password-regex", "", function (value) {
      // If value is empty, the required message will play instead
      if (!value) return true;
      // If it is not empty, it will check if password matches the regex
      return passwordRegex.test(value);
    }),
  confirmPassword: yup
    .string()
    .required("A senha não pode ser vazia")
    .oneOf([yup.ref("password")], "Os campos não coincidem")
    .test("confirm-password-regex", "Senha não apresenta os requisitos", function (value) {
      // Retrive the password value from the actual password to compare
      const password = this.parent.password;
      // Check if the password value exists and matches the regex
      if (password && !passwordRegex.test(password)) {
        return false;
      }
      return true;
    })
    .test("confirm-password-match", "As senhas não coincidem", function (value) {
      // Check if password and confirmPassword match
      return value === this.parent.password;
    })
});
