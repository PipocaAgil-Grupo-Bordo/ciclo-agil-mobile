import React from "react";

import { NavigationType } from "@routes/type";
import authApi from "@services/authApi";
import { userApi } from "@services/userApi";
import { EmailFields, RegisterFields, ValidationCodeResponse } from "@type/auth";
import { AxiosError, AxiosResponse } from "axios";
import { UseFormReset, UseFormSetError } from "react-hook-form";

import { dateHelper } from "./dateHelpers";
import { tokenAuth } from "./tokenAuthHelper";

export async function submitRegister(
  data: RegisterFields,
  reset: UseFormReset<RegisterFields>,
  navigation: NavigationType,
  setError: UseFormSetError<RegisterFields>,
  setAccessToken: (accessToken: string) => void,
  setRefreshToken: (refreshToken: string) => void,
  onError?: (title: string, message: string) => void
) {
  const birthdateISOFormat = dateHelper.formatBirthdateToISODate(data.birthdate);
  const registerFinalFormat = {
    name: data.name,
    email: data.email,
    password: data.password,
    birthdate: birthdateISOFormat
  };

  try {
    const response = await userApi.signUpUser(registerFinalFormat);

    tokenAuth.fetchTokens(response, setAccessToken, setRefreshToken);

    reset({ email: "", password: "" }, { keepErrors: false });

    return navigation.navigate("Team");
  } catch (error) {
    const axiosError = error as AxiosError;

    if (axiosError.response && axiosError.response.status === 409) {
      if (onError) {
        onError(
          "Este endereço de e-mail já está cadastrado.",
          "Por favor, utilize outro e-mail ou recupere sua senha."
        );
      } else {
        setError("confirmEmail", { message: "E-mail já cadastrado." });
        setError("email", {});
      }
    }
  }
}

export async function handlePasswordRequest(
  data: EmailFields,
  navigation: NavigationType,
  setError: UseFormSetError<EmailFields>
) {
  try {
    await authApi.requestPasswordResetCode(data);
    navigation.navigate("CodeRequest", { email: data.email });
  } catch (error) {
    const axiosError = error as AxiosError;

    if (axiosError.response && axiosError.response.status === 404) {
      return setError("email", { message: "Email não encontrado" });
    }

    // Should server go down
    alert("Algo deu errado, tente novamente!");
  }
}

export async function handleRedefinitionCodeValidation(
  code: string | undefined,
  navigation: NavigationType,
  email: string,
  setCodeValidationInfo: React.Dispatch<
    React.SetStateAction<{
      message: string;
      type: string;
    }>
  >
): Promise<boolean> {
  if (!code || code.length < 6) {
    setCodeValidationInfo({
      message: "Código inválido ou expirado. Tente novamente ou gere um novo código",
      type: "unsuccessful"
    });
    return false;
  }

  try {
    const resp: AxiosResponse<ValidationCodeResponse> = await authApi.validateCode({ code, email });
    navigation.navigate("NewPassword", { token: resp.data.token });

    return true;
  } catch (error) {
    const axiosError = error as AxiosError;

    if (axiosError.response && axiosError.response.status === 404) {
      setCodeValidationInfo({
        message: "Código inválido ou expirado. Tente novamente ou gere um novo código",
        type: "unsuccessful"
      });
      return false;
    }

    // Should server go down
    alert("Algo deu errado, tente novamente!");
    return false;
  }
}
