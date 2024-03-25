import * as yup from "yup";

// Password format (at least one uppercase letter, one lowercase, one number, and one symbol)
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,}$/;

export const resetPasswordSchema = yup.object().shape({
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
    .oneOf([yup.ref("password")], "Os campos de senha não coincidem")
    .test("confirm-password-regex", "Senha não apresenta os requisitos", function (value) {
      // Retrive the password value from the actual password to compare
      const password = this.parent.password;
      // Check if the password value exists and matches the regex
      if (password && !passwordRegex.test(password)) {
        return false;
      }
      return true;
    })
});
