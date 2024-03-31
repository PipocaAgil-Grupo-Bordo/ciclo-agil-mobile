import { yupResolver } from "@hookform/resolvers/yup";
import Inputs from "./Inputs";
import { StyledNewPasswordContainer, StyledNewPasswordWrapper } from "./style";
import { PasswordFields, PasswordResetFields } from "@type/auth";
import { useForm } from "react-hook-form";
import { resetPasswordSchema } from "@schemas/resetPasswordSchema";
import SubmitButtons from "./SubmitButtons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NavigationType, NewPasswordRouteParam } from "@type/routeType";
import PasswordReset from "../1-EmailRequest";
import authApi from "@services/authApi";

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
      if (!token) {
        alert("Código expirado ou houve algum erro. Tente novamente!");
        return;
      }

      await authApi.resetPassword(body, token);

      alert("Senha redefinida com sucesso!");
      navigation.navigate("Login");
    } catch (error) {
      console.log("Error:", error);
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
