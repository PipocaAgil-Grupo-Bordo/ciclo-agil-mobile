import { NewColorScheme } from "@styles/globalStyles";

import Header from "./Header";
import SignUpForm from "./SignUpForm";
import PageContainer from "../../components/PageContainer";

function SignUp() {
  return (
    <PageContainer style={{ backgroundColor: `${NewColorScheme.background.primary}` }}>
      <Header />
      <SignUpForm />
    </PageContainer>
  );
}

export default SignUp;
