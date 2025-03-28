import { useState } from "react";

import Header from "@components/Header";
import Modal from "@components/Modal";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NavigationType, NewPasswordRouteParam } from "@routes/type";
import { resetPasswordSchema } from "@schemas/resetPasswordSchema";
import authApi from "@services/authApi";
import { PasswordFields, PasswordResetFields } from "@type/auth";
import { AxiosError } from "axios";
import { useForm } from "react-hook-form";

import Inputs from "./Inputs";
import { Sc } from "./style";
import SubmitButtons from "./SubmitButtons";
import { IModalOptions } from "./type";

function NewPassword() {
  const [showModal, setShowModal] = useState(false);
  const [modalOptions, setModalOptions] = useState<IModalOptions>({
    title: "",
    buttonText: "",
    textContent: "",
    route: ""
  });

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

  async function onSubmit(body: PasswordFields) {
    try {
      await authApi.resetPassword(body, token);

      setModalOptions(() => ({
        title: "Pronto!",
        textContent: "Senha alterada com sucesso!",
        buttonText: "Voltar ao Login",
        route: "Login"
      }));
      setShowModal(true);
    } catch (error) {
      const axiosError = error as AxiosError;

      if (axiosError.response && axiosError.response.status === 401) {
        setModalOptions(() => ({
          title: "Tempo expirado",
          textContent: "Por favor solicite a redefinição de senha novamente.",
          buttonText: "Voltar a redefinição",
          route: "EmailRequest"
        }));

        setShowModal(true);
        return;
      }

      // Should server go down
      setModalOptions(() => ({
        title: "Algo deu errado",
        textContent: "Tente novamente!",
        buttonText: "Voltar a redefinição",
        route: "EmailRequest"
      }));
      setShowModal(true);
    }
  }

  function handleNavigation() {
    navigation.navigate(modalOptions.route as never);
    setShowModal(false);
  }

  return (
    <Sc.Container
      nestedScrollEnabled
      contentContainerStyle={{ flexGrow: 1 }}
      keyboardShouldPersistTaps={"always"}
    >
      <Sc.Wrapper>
        <Sc.HeaderWrapper>
          <Header title="Redefinir senha" />

          <Inputs
            control={control}
            errors={errors}
            errorInstruction={errors.password ? true : false}
          />
        </Sc.HeaderWrapper>

        <SubmitButtons isLoading={isSubmitting} SubmitPassword={handleSubmit(onSubmit)} />
      </Sc.Wrapper>

      {showModal && (
        <Modal
          title={modalOptions.title}
          setReadyToNext={setShowModal}
          buttonText={modalOptions.buttonText}
          textContent={modalOptions.textContent}
          onPress={handleNavigation}
        />
      )}
    </Sc.Container>
  );
}

export default NewPassword;
