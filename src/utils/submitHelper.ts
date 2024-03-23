import { FieldValues, UseFormReset } from "react-hook-form";
import { userApi } from "../services/userApi";
import { registerObject } from "../types/auth";

export async function submitRegister(
  data: registerObject,
  reset: UseFormReset<registerObject>,
  navigation: any,
) {
  try {
    await userApi.signUpUser(data);

    reset({ email: "", password: "" }, { keepErrors: false });

    return navigation.navigate("Home");
  } catch (error) {}
}

const submitHelper = {
  submitRegister
};

export default submitHelper;
