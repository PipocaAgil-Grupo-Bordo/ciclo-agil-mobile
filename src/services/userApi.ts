import { registerObject } from "../types/auth";
import api from "./api";

//falar do path
function signUpUser(body: registerObject) {
    const promise = api.post("/users", body);
    return promise;
  }

export const userApi={
    signUpUser
}