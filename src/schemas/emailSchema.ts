import * as yup from "yup";

const isValidEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
};

export const emailSchema = yup.object().shape({
  email: yup
    .string()
    .required("O email não pode ser vazio")
    .test("is-email", "Digite um email válido", (value) => isValidEmail(value))
});
