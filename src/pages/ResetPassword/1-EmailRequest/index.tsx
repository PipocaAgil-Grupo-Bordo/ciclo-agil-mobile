import { useForm } from "react-hook-form";
import EmailRequestSection from "./EmailRequestSection";
import { StyledPasswordResetContainer, StyledEmailRequestWrapper } from "./style";
import { emailSchema } from "../../../schemas/emailSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import ButtonList from "./ButtonsList";
import { emailObject } from "../../../types/auth";

const PasswordReset: React.FC = () => {
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<emailObject>({
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
