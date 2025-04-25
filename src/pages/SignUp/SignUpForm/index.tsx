import React, { useState } from "react";

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
  const [termsAccepted, setTermsAccepted] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting, isValid },
    reset,
    setError,
    watch
  } = useForm<RegisterFields>({
    resolver: yupResolver(registerSchema),
    mode: "onChange"
  });

  // Watch all form fields to check if they are filled
  const formValues = watch();

  // Check if all required fields have values
  const areAllFieldsFilled =
    Boolean(formValues.name) &&
    Boolean(formValues.birthdate) &&
    Boolean(formValues.email) &&
    Boolean(formValues.confirmEmail) &&
    Boolean(formValues.password) &&
    Boolean(formValues.confirmPassword);

  // Button is enabled only when form is valid, all fields are filled, and terms are accepted
  const isButtonEnabled = isValid && areAllFieldsFilled && termsAccepted && !isSubmitting;

  const onSubmit = (data: RegisterFields) => {
    return submitRegister(data, reset, navigation, setError, setAccessToken, setRefreshToken);
  };

  return (
    <Sc.Container>
      <Sc.InputsContainer>
        <Inputs control={control} errors={errors} />
      </Sc.InputsContainer>
      <TermsOfService onChange={setTermsAccepted} />
      <GenericButton
        isLoading={isSubmitting}
        onPress={handleSubmit(onSubmit)}
        state={isButtonEnabled ? "accent" : "idle"}
        disabled={!isButtonEnabled}
      >
        <Text>Cadastrar</Text>
      </GenericButton>
    </Sc.Container>
  );
}

export default SignUpForm;
