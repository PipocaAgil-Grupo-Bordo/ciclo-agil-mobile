import {
  emailObject,
  loginObject,
  passwordObject,
  resetPasswordObject,
  validationCodeObject
} from "@type/auth";
import api from "./api";

function signInUser(body: loginObject) {
  const promise = api.post("auth/login", body);
  return promise;
}

function requestPasswordResetCode(body: emailObject) {
  const promise = api.post("auth/reset-password/request", body);
  return promise;
}

function validateCode(body: validationCodeObject) {
  const promise = api.post("auth/reset-password/validate", body);
  return promise;
}

function resetPassword(body: passwordObject, token: string) {
  const promise = api.patch("auth/reset-password", body, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  return promise;
}

const authApi = {
  signInUser,
  requestPasswordResetCode,
  validateCode,
  resetPassword
};

export default authApi;
