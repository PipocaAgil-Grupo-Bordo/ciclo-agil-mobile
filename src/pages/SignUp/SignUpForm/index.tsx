import React from "react";

import GenericButton from "@components/GenericButton";
import { useTokenContext } from "@context/useUserToken";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";
import { NavigationType } from "@routes/type";
import { registerSchema } from "@schemas/registerSchema";
import { RegisterFields } from "@type/auth";
import { submitRegister } from "@utils/submitHelper";
import { useForm } from "react-hook-form";
import { Text } from "react-native";

import { Sc } from "./style";
import Inputs from "../Inputs";
import TermsOfService from "../TermsOfService";

function SignUpForm() {
  const navigation = useNavigation<NavigationType>();
  const { setAccessToken, setRefreshToken } = useTokenContext();
  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
    setError
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
          <Text>Senha deve conter no mínimo 8 caracteres.</Text>
        </Sc.Text>

        <Sc.Text error={(errors && errors.password)! || (errors && errors.confirmPassword)!}>
          <Text>
            Pelo menos 1 caractere especial, 1 número, 1 letra minúscula e 1 letra maiúscula.
          </Text>
        </Sc.Text>
      </Sc.Wrapper>

      <GenericButton
        isLoading={isSubmitting}
        onPress={handleSubmit((data) =>
          submitRegister(data, reset, navigation, setError, setAccessToken, setRefreshToken)
        )}
        state="accent"
      >
        <Text>Cadastrar</Text>
      </GenericButton>
      <TermsOfService />
    </Sc.Container>
  );
}

export default SignUpForm;
