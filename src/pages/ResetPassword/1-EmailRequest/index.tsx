import { useForm } from "react-hook-form";
import EmailRequestSection from "./EmailRequestSection";
import { emailSchema } from "@schemas/emailSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import ButtonList from "./ButtonsList";
import { EmailFields } from "@type/auth";
import { useNavigation } from "@react-navigation/native";
import { NavigationType } from "@routes/type";
import { handlePasswordRequest } from "@utils/submitHelper";
import { Sc } from "./style";
import Entypo from "react-native-vector-icons/Entypo";
import { ColorScheme } from "@styles/globalStyles";

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
        <Sc.BackIcon onPress={() => navigation.goBack()}>
          <Entypo name="chevron-left" size={30} color={ColorScheme.icon.idle} />
        </Sc.BackIcon>
        <EmailRequestSection control={control} errors={errors} />

        <ButtonList
          isLoading={isSubmitting}
          onPress={handleSubmit((data) => handlePasswordRequest(data, navigation, setError))}
        />
      </Sc.Wrapper>
    </Sc.Container>
  );
}

export default PasswordReset;
