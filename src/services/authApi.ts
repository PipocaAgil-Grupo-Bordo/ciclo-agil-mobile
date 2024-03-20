import { loginObject, registerObject, } from "../types/auth";
import api from "./api";

function signInUser(body: loginObject) {
  const promise = api.post("auth/login", body);
  return promise;
}

function signUpUser(body:registerObject){}
const authApi = {
  signInUser
};

export default authApi;
