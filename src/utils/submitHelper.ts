import { UseFormReset, UseFormSetError } from "react-hook-form";
import { userApi } from "@services/userApi";
import {
  EmailFields,
  RegisterFields,
  ValidationCodeResponse
} from "@type/auth";
import dateHelper from "./dateHelpers";
import { NavigationType } from "@type/routeType";
import authApi from "@services/authApi";
import { AxiosResponse } from "axios";

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

    return navigation.navigate("Home");
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
  } catch (error: any) {
    if (error.response.status === 404) {
      setError("email", { message: "Email incorreto" });
    }
  }
}

export async function handleRedefinitionCodeValidation(
  code: string | undefined,
  navigation: NavigationType,
  email: string
) {
  const body = { code, email };
  if (code === undefined || code?.length < 6) {
    alert("Código incorreto");
  } else {
    try {
      const resp: AxiosResponse<ValidationCodeResponse> = await authApi.validateCode(body);
      navigation.navigate("NewPassword", { token: resp.data.token });
    } catch (error) {
      console.log(error);
    }
  }
}
