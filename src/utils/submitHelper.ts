import { UseFormReset, UseFormSetError } from "react-hook-form";
import { userApi } from "../services/userApi";
import { registerObject } from "../types/auth";
import dateHelper from "./dateHelpers";

export async function submitRegister(
  data: registerObject,
  reset: UseFormReset<registerObject>,
  navigation: any,
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
      setError("confirmEmail",{message:"E-mail já cadastrado."})
      setError("email",{})
    }
  }
}

const submitHelper = {
  submitRegister
};

export default submitHelper;
