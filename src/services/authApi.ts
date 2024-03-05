import { loginObject } from '../types/loginType';
import api from './api';

function signInUser(body: loginObject) {
  const promise = api.post('auth/login', body);
  return promise;
}

const authApi = {
  signInUser,
};

export default authApi;
