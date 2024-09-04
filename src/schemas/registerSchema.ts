import * as yup from "yup";
import { isValidEmail } from "./emailSchema";

// Accept only letters and whitespace, ensuring there are at least two letters present
const nameRegex = /^(?=(?:.*[a-zA-ZçÇáÁàÀéÉèÈíÍúÚôÔâÂãÃõÕ]){2})[a-zA-ZçÇáÁàÀéÉíÍúÚôÔâÂãÃõÕ\s]+$/;

// Accept only numbers, not letters nor symbols
const dateRegex = /^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/(19\d{2}|20(?:[0-1][0-9]|20|24))$/;

// Accept only if there is at least one Uppercase, one lowercase, one number, one symbol
const passwordRegex =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~/\\=-]).{8,}$/gm;

// Ensure all dates are valid ones. Including Feb leap years, and months that doesn't have the 31st day
function isValidDate(dateString: string) {
  const [day, month, year] = dateString.split("/").map(Number);

  const date = new Date(year, month - 1, day);

  return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day;
}

export const registerSchema = yup.object().shape({
  name: yup
    .string()
    .required("O nome não pode ser vazio")
    .matches(nameRegex, "Nome deve conter apenas letras")
    .min(2, "O nome deve conter pelo menos 2 caracteres")
    .max(15, "O nome deve conter no máximo 15 caracteres"),
  birthdate: yup
    .string()
    .required("Data de nascimento não pode ser vazia")
    .matches(dateRegex, "Formato de data inválido (dd/mm/aaaa)")
    .test("is-valid-date", "Data inválida (dd/mm/aaaa)", isValidDate),
  email: yup
    .string()
    .trim()
    .required("O email não pode ser vazio")
    .test("is-email", "Digite um email válido", (value) => isValidEmail(value))
    .transform((value) => (value ? value.toLowerCase() : value)),
  confirmEmail: yup
    .string()
    .trim()
    .required("O email não pode ser vazio")
    .test("is-email", "Digite um email válido", (value) => isValidEmail(value))
    .oneOf([yup.ref("email")], "Os campos de email não coincidem")
    .transform((value) => (value ? value.toLowerCase() : value)),
  password: yup
    .string()
    .required("A senha não pode ser vazia")
    .min(8, "A senha deve conter pelo menos 8 caracteres")
    .matches(passwordRegex, "Senha não apresenta os requisitos."),
  confirmPassword: yup
    .string()
    .required("A senha não pode ser vazia")
    .test("passwords-match", "Os campos de senha não coincidem.", function (value) {
      return this.parent.password === value;
    })
});
