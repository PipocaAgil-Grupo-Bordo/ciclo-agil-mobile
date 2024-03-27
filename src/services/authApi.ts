import { emailObject, loginObject } from "../types/auth";
import api from "./api";

function signInUser(body: loginObject) {
  const promise = api.post("auth/login", body);
  return promise;
}

function resetPassword(body: emailObject) {
  const promise = api.post("auth/reset-password/request", body);
}

const authApi = {
  signInUser
};

export default authApi;
