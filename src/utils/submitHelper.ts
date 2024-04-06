import { UseFormReset, UseFormSetError } from "react-hook-form";
import { userApi } from "@services/userApi";
import {
  EmailFields,
  RegisterFields,
  ValidationCodeResponse
} from "@type/auth";
import { NavigationType } from "@type/routeType";
import authApi from "@services/authApi";
import { AxiosError, AxiosResponse } from "axios";
import { dateHelper } from "./dateHelpers";

export async function submitRegister(
  data: RegisterFields,
  reset: UseFormReset<RegisterFields>,
  navigation: NavigationType,
  setError: UseFormSetError<RegisterFields>
) {
  const birthdateISOFormat = dateHelper.formatBirthdateToISODate(data.birthdate);
  const registerFinalFormat = {
    name: data.name,
    email: data.email,
    password: data.password,
    birthdate: birthdateISOFormat
  };
  try {
    const resp = await userApi.signUpUser(registerFinalFormat);

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
  email: string
): Promise<boolean> {
  if (!code || code.length < 6) {
    alert("Código incompleto");
    return false;
  }

  try {
    const resp: AxiosResponse<ValidationCodeResponse> = await authApi.validateCode({ code, email });
    navigation.navigate("NewPassword", { token: resp.data.token });

    return true;
  } catch (error) {
    const axiosError = error as AxiosError;

    if (axiosError.response && axiosError.response.status === 404) {
      alert("Código invalido ou expirado. Tente novamente ou gere um novo código");
      return false;
    }

    // Should server go down
    alert("Algo deu errado, tente novamente!");
    return false;
  }
}
