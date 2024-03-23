import React from "react";
import { StyledInstructionText, StyledContainer } from "./style";
import { useForm } from "react-hook-form";
import Inputs from "../Inputs";
import GenericButton from "../../../components/GenericButton";
import { submitRegister } from "../../../utils/submitHelper";
import { useNavigation } from "@react-navigation/native";
import { NavigationType } from "../../Login/type";
import { registerObject } from "../../../types/auth";
import { registerSchema } from "../../../schemas/registerSchema";
import { yupResolver } from "@hookform/resolvers/yup";


const SignUpForm: React.FC = () => {
  const navigation = useNavigation<NavigationType>;
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
    setError
  } = useForm({
    resolver: yupResolver(registerSchema)
  });

  return (
    <StyledContainer>
      <Inputs control={control} errors={errors} />

      <StyledInstructionText
        error={(errors && errors.password)! || (errors && errors.confirmPassword)!}
      >
        A senha deve conter no mínimo 8 caracteres entre: 1 letra minúscula, 1 letra maiúscula, 1 número e 1 caractere especial.
      </StyledInstructionText>

      <GenericButton
        isLoading={isSubmitting}
        onPress={handleSubmit((data) => submitRegister(data as registerObject, reset, navigation))}
        state="accent"
      >
        Cadastrar
      </GenericButton>
    </StyledContainer>
  );
};

export default SignUpForm;
