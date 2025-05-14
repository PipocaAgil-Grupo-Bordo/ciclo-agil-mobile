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
import ErrorModal from "@components/ErrorModal";
import SuccessModal from "@components/SuccessModal";

import { Sc } from "./style";
import Inputs from "../Inputs";
import TermsOfService from "../TermsOfService";

function SignUpForm() {
  const navigation = useNavigation<NavigationType>();
  const { setAccessToken, setRefreshToken } = useTokenContext();
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [errorModalVisible, setErrorModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState({ title: "", message: "" });
  const [successModalVisible, setSuccessModalVisible] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
    reset,
    setError,
    watch
  } = useForm<RegisterFields>({
    resolver: yupResolver(registerSchema),
    mode: "onSubmit"
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

  // Button is enabled only when fields are filled and terms are accepted
  const isButtonEnabled = areAllFieldsFilled && termsAccepted && !isSubmitting;

  const handleCloseModal = () => {
    setErrorModalVisible(false);
  };

  const handleSuccessModalPress = () => {
    setSuccessModalVisible(false);
    navigation.navigate("Team");
  };

  const onSubmit = async (data: RegisterFields) => {
    if (!termsAccepted) {
      setErrorMessage({
        title: "Termos não aceitos",
        message: "Você precisa aceitar os termos de uso e política de privacidade para continuar."
      });
      setErrorModalVisible(true);
      return;
    }

    try {
      const success = await submitRegister(
        data,
        reset,
        setError,
        setAccessToken,
        setRefreshToken,
        (title: string, message: string) => {
          setErrorMessage({ title, message });
          setErrorModalVisible(true);
        }
      );

      if (success) {
        setSuccessModalVisible(true); // ✅ Só mostra se o retorno for positivo
      }
    } catch {
      setErrorMessage({
        title: "Erro inesperado",
        message: "Ocorreu um erro ao tentar se cadastrar. Tente novamente mais tarde."
      });
      setErrorModalVisible(true);
    }
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

      <SuccessModal
        visible={successModalVisible && !errorModalVisible}
        message="Cadastro realizado com sucesso"
        onPress={handleSuccessModalPress}
      />

      <ErrorModal
        visible={errorModalVisible}
        title={errorMessage.title}
        message={errorMessage.message}
        onClose={handleCloseModal}
      />
    </Sc.Container>
  );
}

export default SignUpForm;
