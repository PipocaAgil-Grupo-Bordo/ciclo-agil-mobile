import React from "react";
import { Sc } from "./style";
import { useForm } from "react-hook-form";
import Inputs from "../Inputs";
import GenericButton from "@components/GenericButton";
import { submitRegister } from "@utils/submitHelper";
import { useNavigation } from "@react-navigation/native";
import { NavigationType } from "@routes/type";
import { RegisterFields } from "@type/auth";
import { registerSchema } from "@schemas/registerSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import TermsOfService from "../TermsOfService";
import { useTokenContext } from "@context/useUserToken";

function SignUpForm() {
  const navigation = useNavigation<NavigationType>();
  const { setAccessToken, setRefreshToken } = useTokenContext();
  const {
    handleSubmit, control, formState: { errors, isSubmitting }, reset, setError
  } = useForm<RegisterFields>({
    resolver: yupResolver(registerSchema)
  });

  return (
    <Sc.Container>
      <Inputs control={control} errors={errors} />

      {/* TODO: Move to a different file after sprint 2 is over */}
      {/* TODO: This doesn't seem to be working? */}
      <Sc.Wrapper>
        <Sc.Text error={(errors && errors.password)! || (errors && errors.confirmPassword)!}>
          Senha deve conter no mínimo 8 caracteres.
        </Sc.Text>

        <Sc.Text error={(errors && errors.password)! || (errors && errors.confirmPassword)!}>
          Pelo menos 1 caractere especial, 1 número, 1 letra minúscula e 1 letra maiúscula.
        </Sc.Text>
      </Sc.Wrapper>

      <GenericButton
        isLoading={isSubmitting}
        onPress={handleSubmit((data) => submitRegister(data, reset, navigation, setError, setAccessToken, setRefreshToken)
        )}
        state="accent"
      >
        Cadastrar
      </GenericButton>
      <TermsOfService />
    </Sc.Container>
  );
}

export default SignUpForm;
