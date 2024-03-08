import * as yup from 'yup';

const isValidEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required('O email não pode ser vazio')
    .test('is-email', 'Digite um email válido', (value) => isValidEmail(value)),
  password: yup
    .string()
    .required('A senha não pode ser vazia')
    .min(8, 'A senha deve conter pelo menos 8 dígitos')
});
