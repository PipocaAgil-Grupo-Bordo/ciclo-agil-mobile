import { UseFormReset, UseFormSetError } from "react-hook-form";
import { userApi } from "../services/userApi";
import { emailObject, registerObject } from "../types/auth";
import dateHelper from "./dateHelpers";
import { NavigationType } from "../types/routeType";
import authApi from "../services/authApi";

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
    const resp = await authApi.resetPassword(data);
    navigation.navigate("CodeRequest");
  } catch (error:any) {
    if (error.response.status === 404) {
      setError("email", {message:"Email incorreto"});
    }
  }
}
