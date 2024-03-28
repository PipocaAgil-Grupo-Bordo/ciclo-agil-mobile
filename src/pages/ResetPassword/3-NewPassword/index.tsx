import { yupResolver } from "@hookform/resolvers/yup";
import Inputs from "./Inputs";
import { StyledNewPasswordContainer, StyledNewPasswordWrapper } from "./style";
import { resetPasswordObject } from "@type/auth";
import { useForm } from "react-hook-form";
import { resetPasswordSchema } from "@schemas/resetPasswordSchema";
import SubmitButtons from "./SubmitButtons";
import { useNavigation } from "@react-navigation/native";
import { NavigationType } from "@type/routeType";

const NewPassword: React.FC = () => {
  const navigation = useNavigation<NavigationType>();
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
    setError
  } = useForm<resetPasswordObject>({
    resolver: yupResolver(resetPasswordSchema)
  });

  const onSubmit = () => {
    try {
      navigation.navigate("Login");
    } catch (error) {
      console.log(error);
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

        <SubmitButtons SubmitPassword={handleSubmit(onSubmit)} />
      </StyledNewPasswordWrapper>
    </StyledNewPasswordContainer>
  );
};

export default NewPassword;
