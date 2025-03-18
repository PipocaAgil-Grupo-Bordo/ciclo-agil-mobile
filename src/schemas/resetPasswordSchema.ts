import * as yup from "yup";

// Accept only if there is at least one Uppercase, one lowercase, one number, one symbol
const passwordRegex =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+{}[\]:;<>,.?~/\\=-]).{8,}$/gm;

export const resetPasswordSchema = yup.object().shape({
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
