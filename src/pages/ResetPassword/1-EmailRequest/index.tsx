import { useForm } from "react-hook-form";
import EmailRequestSection from "./EmailRequestSection";
import { StyledPasswordResetContainer, StyledEmailRequestWrapper } from "./style";
import { emailSchemaType } from "../../../types/loginType";
import { emailSchema } from "../../../schemas/emailSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import ButtonList from "./ButtonsList";

const PasswordReset: React.FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<emailSchemaType>({
    resolver: yupResolver(emailSchema)
  });

  const handlePasswordRequest = () => {
    alert("Correto");
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
