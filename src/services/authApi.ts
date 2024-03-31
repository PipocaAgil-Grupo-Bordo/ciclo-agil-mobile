import { emailObject, loginObject, validationCodeObject } from "@type/auth";
import api from "./api";

function signInUser(body: loginObject) {
  const promise = api.post("auth/login", body);
  return promise;
}

function resetPassword(body: emailObject) {
  const promise = api.post("auth/reset-password/request", body);
  return promise;
}

function validateCode(body: validationCodeObject) {
  const promise = api.post("auth/reset-password/validate", body);
  return promise;
}
const authApi = {
  signInUser,
  resetPassword,
  validateCode
};

export default authApi;
