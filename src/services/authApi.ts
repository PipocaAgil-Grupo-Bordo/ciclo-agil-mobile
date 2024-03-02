import { loginObject } from "../types/loginType";
import api from "./api"

function signInUser(body: loginObject) {
    const promisse = api.post("/auth/users/signin", body);
    return promisse;
  }

const authApi = {
    signInUser,
}

export default authApi;