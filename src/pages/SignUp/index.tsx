import Header from "./Header";
import SignUpForm from "./SignUpForm";
import { Sc } from "./style";

const SignUp: React.FC = () => {
  return (
    <Sc.Container>
      <Header />
      <SignUpForm />
    </Sc.Container>
  );
};

export default SignUp;
