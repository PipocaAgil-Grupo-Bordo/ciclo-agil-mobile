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

export interface validationCodeObject {
  code: string | undefined;
  email: string;
}

export interface validationCodeResponse {
  verificationCode: {
    valid: boolean;
    id: number;
    code: string;
    email: string;
    expiresAt: string;
  };
  token: string;
}
