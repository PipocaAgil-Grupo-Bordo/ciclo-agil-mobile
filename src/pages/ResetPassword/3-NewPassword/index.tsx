import { yupResolver } from "@hookform/resolvers/yup";
import Inputs from "./Inputs";
import { StyledNewPasswordContainer, StyledNewPasswordWrapper } from "./style";
import { passwordObject, resetPasswordObject } from "@type/auth";
import { useForm } from "react-hook-form";
import { resetPasswordSchema } from "@schemas/resetPasswordSchema";
import SubmitButtons from "./SubmitButtons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NavigationType, NewPasswordRouteParam } from "@type/routeType";
import PasswordReset from "../1-EmailRequest";
import authApi from "@services/authApi";
import axios, { AxiosError } from "axios";

const NewPassword: React.FC = () => {
  const navigation = useNavigation<NavigationType>();
  const route = useRoute();
  const token = (route.params as NewPasswordRouteParam)?.token;

  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting }
  } = useForm<resetPasswordObject>({
    resolver: yupResolver(resetPasswordSchema)
  });

  const onSubmit = async (body: passwordObject) => {
    try {
      await authApi.resetPassword(body, token);

      alert("Senha redefinida com sucesso!");
      navigation.navigate("Login");
    } catch (error) {
      const axiosError = error as AxiosError;

      if (axiosError.response && axiosError.response.status === 401) {
        return alert("Tempo expirado, por favor solicite a redefinição de senha novamente");
      }

      // Should server go down
      alert("Algo deu errado, tente novamente!");
    }
  };

  return (
    <StyledNewPasswordContainer nestedScrollEnabled contentContainerStyle={{ flexGrow: 1 }}>
      <StyledNewPasswordWrapper>
        <Inputs
          control={control}
          errors={errors}
          errorInstruction={errors.password ? true : false}
        />

        <SubmitButtons isLoading={isSubmitting} SubmitPassword={handleSubmit(onSubmit)} />
      </StyledNewPasswordWrapper>
    </StyledNewPasswordContainer>
  );
};

export default NewPassword;
