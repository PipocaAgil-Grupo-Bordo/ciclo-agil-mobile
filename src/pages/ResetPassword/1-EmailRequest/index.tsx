import { useForm } from "react-hook-form";
import EmailRequestSection from "./EmailRequestSection";
import { StyledPasswordResetContainer, StyledEmailRequestWrapper } from "./style";
import { emailSchema } from "../../../schemas/emailSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import ButtonList from "./ButtonsList";
import { emailObject } from "../../../types/auth";
import { useNavigation } from "@react-navigation/native";
import { NavigationType } from "../../Login/type";

const PasswordReset: React.FC = () => {
  const navigation = useNavigation<NavigationType>();

  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<emailObject>({
    resolver: yupResolver(emailSchema)
  });

  const handlePasswordRequest = () => {
    navigation.navigate("CodeRequest");
  };

  return (
    <StyledPasswordResetContainer nestedScrollEnabled contentContainerStyle={{ flexGrow: 1 }}>
      <StyledEmailRequestWrapper>
        <EmailRequestSection control={control} errors={errors} />

        <ButtonList onPress={handleSubmit(handlePasswordRequest)} />
      </StyledEmailRequestWrapper>
    </StyledPasswordResetContainer>
  );
};

export default PasswordReset;
