import Header from "./Header";
import SignUpForm from "./SignUpForm";
import PageContainer from "../../components/PageContainer";

function SignUp() {
  return (
    <PageContainer style={{ backgroundColor: "#F6FAFF" }}>
      <Header />
      <SignUpForm />
    </PageContainer>
  );
}

export default SignUp;
