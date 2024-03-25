export interface emailObject {
  email: string;
}

export interface loginObject extends emailObject {
  password: string;
}

export interface registerObject extends loginObject {
  userName: string;
  birthDate: string;
}

export interface resetPasswordObject {
  password: string;
  confirmPassword: string;
}
