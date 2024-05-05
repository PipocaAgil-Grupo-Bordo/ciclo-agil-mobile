interface AuthObject {
  name: string;
  birthdate: string;
  email: string;
  confirmEmail: string;
  password: string;
  confirmPassword: string;
  code: string | undefined;
}

export type EmailFields = Pick<AuthObject, "email">;
export type PasswordFields = Pick<AuthObject, "password">;
export type LoginFields = Pick<AuthObject, "email" | "password">;
export type RegisterFields = Omit<AuthObject, "code">;
export type ValidationCodeFields = Pick<AuthObject, "email" | "code">;
export type PasswordResetFields = Pick<AuthObject, "password" | "confirmPassword">;

export interface ValidationCodeResponse {
  verificationCode: {
    valid: boolean;
    id: number;
    code: string;
    email: string;
    expiresAt: string;
  };
  token: string;
}

export type ITokens = "accessToken" | "refreshToken";
