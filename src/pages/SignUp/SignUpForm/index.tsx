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
import { useTokenContext } from "@context/useToken";

const SignUpForm: React.FC = () => {
  const navigation = useNavigation<NavigationType>();
  const { setAccess, setRefresh } = useTokenContext();
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
        onPress={handleSubmit((data) =>
          submitRegister(data, reset, navigation, setError, setAccess, setRefresh)
        )}
        state="accent"
      >
        Cadastrar
      </GenericButton>
      <TermsOfService />
    </Sc.Container>
  );
};

export default SignUpForm;
