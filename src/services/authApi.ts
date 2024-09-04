import { LoginFields, EmailFields, PasswordFields, ValidationCodeFields } from "@type/auth";
import api from "./api";

function signInUser(body: LoginFields) {
  const promise = api.post("auth/login", body);
  return promise;
}

function requestPasswordResetCode(body: EmailFields) {
  const promise = api.post("auth/reset-password/request", body);
  return promise;
}

function validateCode(body: ValidationCodeFields) {
  const promise = api.post("auth/reset-password/validate", body);
  return promise;
}

function resetPassword(body: PasswordFields, token: string) {
  const promise = api.patch("auth/reset-password", body, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return promise;
}
function whoAmI(token: string) {
  const promise = api.get("auth/whoami", { headers: { Authorization: `Bearer ${token}` } });
  return promise;
}

const authApi = {
  signInUser,
  requestPasswordResetCode,
  validateCode,
  resetPassword,
  whoAmI
};

export default authApi;
