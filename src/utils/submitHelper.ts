import { UseFormReset, UseFormSetError } from "react-hook-form";
import { userApi } from "@services/userApi";
import { emailObject, registerObject, validationCodeResponse } from "@type/auth";
import dateHelper from "./dateHelpers";
import { NavigationType } from "@type/routeType";
import authApi from "@services/authApi";
import { AxiosError, AxiosResponse } from "axios";

export async function submitRegister(
  data: registerObject,
  reset: UseFormReset<registerObject>,
  navigation: NavigationType,
  setError: UseFormSetError<registerObject>
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

    return navigation.navigate("Home");
  } catch (error: any) {
    if (error.response.status === 409) {
      setError("confirmEmail", { message: "E-mail já cadastrado." });
      setError("email", {});
    }
  }
}

export async function handlePasswordRequest(
  data: emailObject,
  navigation: NavigationType,
  setError: UseFormSetError<emailObject>
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
    const resp: AxiosResponse<validationCodeResponse> = await authApi.validateCode({ code, email });
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
