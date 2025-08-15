import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigation } from "@react-navigation/native";
import { NavigationType } from "@routes/type";
import { emailSchema } from "@schemas/emailSchema";
import { EmailFields } from "@type/auth";
import { handlePasswordRequest } from "@utils/submitHelper";
import { useForm } from "react-hook-form";

import GenericButton from "@components/GenericButton";
import { Text } from "react-native";
import Header from "../SharedComponents/Header";
import EmailRequestSection from "./EmailRequestSection";
import { Sc } from "./style";

function PasswordReset() {
  const navigation = useNavigation<NavigationType>();

  const {
    handleSubmit,
    control,
    setError,
    formState: { errors, isSubmitting }
  } = useForm<EmailFields>({
    resolver: yupResolver(emailSchema)
  });

  return (
    <Sc.Container nestedScrollEnabled contentContainerStyle={{ flexGrow: 1 }}>
      <Sc.Wrapper>
        <Header title="Recuperar Senha" />
        <EmailRequestSection control={control} errors={errors} />

        <GenericButton
          isLoading={isSubmitting}
          onPress={handleSubmit((data) => handlePasswordRequest(data, navigation, setError))}
          state="accent"
        >
          <Text>Enviar</Text>
        </GenericButton>
      </Sc.Wrapper>
    </Sc.Container>
  );
}

export default PasswordReset;
