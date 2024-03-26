export interface emailObject {
  email: string;
}

export interface loginObject extends emailObject {
  password: string;
}

export interface registerObject extends loginObject {
  name: string;
  birthdate: string;
  confirmEmail: string;
  confirmPassword: string;
}

export interface resetPasswordObject {
  password: string;
  confirmPassword: string;
}
