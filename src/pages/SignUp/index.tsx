import TextBox from "../../components/TextBox";
import Header from "./Header";
import SignUpForm from "./SignUpForm";
import { StyledSignUpContainer } from "./style";

const SignUp: React.FC = () => {
  return (
    <StyledSignUpContainer >
      <Header />
      <SignUpForm />
    </StyledSignUpContainer>
  );
};

export default SignUp;
