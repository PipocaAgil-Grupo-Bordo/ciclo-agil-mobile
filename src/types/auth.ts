export interface emailObject {
  email: string;
}

export interface loginObject extends emailObject {
  password: string;
}

export interface registerObject extends loginObject {
  name: string;
  birthDate: string;
  confirmEmail: string;
  confirmPassword: string;
}
