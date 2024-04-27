import { yupResolver } from "@hookform/resolvers/yup";
import Inputs from "./Inputs";
import { PasswordFields, PasswordResetFields } from "@type/auth";
import { useForm } from "react-hook-form";
import { resetPasswordSchema } from "@schemas/resetPasswordSchema";
import SubmitButtons from "./SubmitButtons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NavigationType, NewPasswordRouteParam } from "@routes/type";
import authApi from "@services/authApi";
import { AxiosError } from "axios";
import { Sc } from "./style";

const NewPassword: React.FC = () => {
  const navigation = useNavigation<NavigationType>();
  const route = useRoute();
  const token = (route.params as NewPasswordRouteParam)?.token;

  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting }
  } = useForm<PasswordResetFields>({
    resolver: yupResolver(resetPasswordSchema)
  });

  const onSubmit = async (body: PasswordFields) => {
    try {
      await authApi.resetPassword(body, token);

      alert("Senha redefinida com sucesso!");
      navigation.navigate("Login");
    } catch (error) {
      const axiosError = error as AxiosError;

      if (axiosError.response && axiosError.response.status === 401) {
        alert("Tempo expirado, por favor solicite a redefinição de senha novamente");
        return navigation.navigate("EmailRequest");
      }

      // Should server go down
      alert("Algo deu errado, tente novamente!");
    }
  };

  return (
    <Sc.Container nestedScrollEnabled contentContainerStyle={{ flexGrow: 1 }}>
      <Sc.Wrapper>
        <Inputs
          control={control}
          errors={errors}
          errorInstruction={errors.password ? true : false}
        />

        <SubmitButtons isLoading={isSubmitting} SubmitPassword={handleSubmit(onSubmit)} />
      </Sc.Wrapper>
    </Sc.Container>
  );
};

export default NewPassword;
