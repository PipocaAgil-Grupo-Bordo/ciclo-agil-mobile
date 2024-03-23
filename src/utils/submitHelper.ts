import { UseFormReset } from "react-hook-form";
import { userApi } from "../services/userApi";
import { registerObject } from "../types/auth";
import dateHelper from "./dateHelpers";

export async function submitRegister(
  data: registerObject,
  reset: UseFormReset<registerObject>,
  navigation: any
) {
  const birthdateISOFormat = dateHelper.formatBirthdateToISODate(data.birthdate);
  const registerWithOutConfirmationProperties = {
    name: data.name,
    email: data.email,
    password: data.password,
    birthdate: birthdateISOFormat
  };
  try {
    const resp = await userApi.signUpUser(registerWithOutConfirmationProperties);

    reset({ email: "", password: "" }, { keepErrors: false });

    return navigation.navigate("Home");
  } catch (error) {
    alert(error);
  }
}

const submitHelper = {
  submitRegister
};

export default submitHelper;
