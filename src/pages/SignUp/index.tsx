import Header from "./Header";
import SignUpForm from "./SignUpForm";
import { Sc } from "./style";

function SignUp() {
  return (
    <Sc.Container>
      <Header />
      <SignUpForm />
    </Sc.Container>
  );
}

export default SignUp;
