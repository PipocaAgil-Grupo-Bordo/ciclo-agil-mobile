import { UseFormReset, UseFormSetError } from "react-hook-form";
import { userApi } from "@services/userApi";
import { EmailFields, RegisterFields, ValidationCodeResponse } from "@type/auth";
import { NavigationType } from "@routes/type";
import authApi from "@services/authApi";
import { AxiosError, AxiosResponse } from "axios";
import { dateHelper } from "./dateHelpers";
import React from "react";
import { secureStore } from "./secureStore";

export async function submitRegister(
  data: RegisterFields,
  reset: UseFormReset<RegisterFields>,
  navigation: NavigationType,
  setError: UseFormSetError<RegisterFields>,
  setAccess: (accessToken: string) => void,
  setRefresh: (refreshToken: string) => void
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

    const accessToken = response.data.token.accessToken;
    const refreshToken = response.data.token.refreshToken;

    setAccess(accessToken);
    setRefresh(refreshToken);

    await secureStore.saveToken({ key: "accessToken", value: accessToken });
    await secureStore.saveToken({ key: "refreshToken", value: refreshToken });

    reset({ email: "", password: "" }, { keepErrors: false });

    return navigation.navigate("Team");
  } catch (error: any) {
    if (error.response.status === 409) {
      setError("confirmEmail", { message: "E-mail já cadastrado." });
      setError("email", {});
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
