import React from "react";
import { StyledInstructionText, StyledContainer } from "./style";
import { useForm } from "react-hook-form";
import Inputs from "../Inputs";
import GenericButton from "../../../components/GenericButton";
import { submitRegister } from "../../../utils/submitHelper";
import { useNavigation } from "@react-navigation/native";
import { NavigationType } from "../../Login/type";
import { registerObject } from "../../../types/auth";

const SignUpForm: React.FC = () => {
  const navigation = useNavigation<NavigationType>;
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
    setError
  } = useForm({
    // resolver: yupResolver(loginSchema)
  });
  return (
    <StyledContainer>
      <Inputs control={control} errors={errors} />

      <StyledInstructionText>
        A senha deve conter no mínimo 8 caracteres, entre: caracteres especiais, letras e números,
        conter pelo menos: 1 caractere especial, 1 letra, 1 letra maiúscula, e 1 número.
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
