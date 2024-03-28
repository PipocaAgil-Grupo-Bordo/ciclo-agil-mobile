import React from "react";
import { StyledInstructionText, StyledContainer, StyledInstructionWrapper } from "./style";
import { useForm } from "react-hook-form";
import Inputs from "../Inputs";
import GenericButton from "@components/GenericButton";
import { submitRegister } from "@utils/submitHelper";
import { useNavigation } from "@react-navigation/native";
import { NavigationType } from "@type/routeType";
import { registerObject } from "@type/auth";
import { registerSchema } from "@schemas/registerSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { View } from "react-native";

const SignUpForm: React.FC = () => {
  const navigation = useNavigation<NavigationType>();
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
    setError
  } = useForm<registerObject>({
    resolver: yupResolver(registerSchema)
  });

  return (
    <StyledContainer>
      <Inputs control={control} errors={errors} />

      {/* TODO: Move to a different file after sprint 2 is over */}
      <StyledInstructionWrapper>
        <StyledInstructionText
          error={(errors && errors.password)! || (errors && errors.confirmPassword)!}
        >
          Senha deve conter no mínimo 8 caracteres
        </StyledInstructionText>

        <StyledInstructionText
          error={(errors && errors.password)! || (errors && errors.confirmPassword)!}
        >
          Pelo menos 1 caractere especial, 1 número, 1 letra minúscula e 1 letra maiúscula.
        </StyledInstructionText>
      </StyledInstructionWrapper>

      <GenericButton
        isLoading={isSubmitting}
        onPress={handleSubmit((data) => submitRegister(data, reset, navigation, setError))}
        state="accent"
      >
        Cadastrar
      </GenericButton>
    </StyledContainer>
  );
};

export default SignUpForm;
