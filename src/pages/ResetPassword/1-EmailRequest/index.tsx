import { useForm } from "react-hook-form";
import EmailRequestSection from "./EmailRequestSection";
import { StyledPasswordResetContainer, StyledEmailRequestWrapper } from "./style";
import { emailSchema } from "../../../schemas/emailSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import ButtonList from "./ButtonsList";
import { emailObject } from "../../../types/auth";
import { useNavigation } from "@react-navigation/native";
import { NavigationType } from "../../../types/routeType";
import { handlePasswordRequest } from "../../../utils/submitHelper";

const PasswordReset: React.FC = () => {
  const navigation = useNavigation<NavigationType>();

  const {
    handleSubmit,
    control,
    setError,
    formState: { errors,isSubmitting }
  } = useForm<emailObject>({
    resolver: yupResolver(emailSchema)
  });

  return (
    <StyledPasswordResetContainer nestedScrollEnabled contentContainerStyle={{ flexGrow: 1 }}>
      <StyledEmailRequestWrapper>
        <EmailRequestSection control={control} errors={errors} />

        <ButtonList
          isLoading={isSubmitting}
          onPress={handleSubmit((data) => handlePasswordRequest(data, navigation, setError))}
        />
      </StyledEmailRequestWrapper>
    </StyledPasswordResetContainer>
  );
};

export default PasswordReset;
