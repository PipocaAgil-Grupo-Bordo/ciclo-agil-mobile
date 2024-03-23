import { UseFormReset } from "react-hook-form";
import { userApi } from "../services/userApi";
import { registerObject } from "../types/auth";

export async function submitRegister(
  data: registerObject,
  reset: UseFormReset<registerObject>,
  navigation: any
) {
  const registerWithOutConfirmationProperties = {
    name: data.name,
    email: data.email,
    password: data.password,
    birthdate: data.birthdate
  };
  try {
    await userApi.signUpUser(registerWithOutConfirmationProperties);

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
