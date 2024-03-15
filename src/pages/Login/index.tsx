import React from "react";
import { StyleSheet, View } from "react-native";
import SigninForm from "./SigninForm";
import Logo from "../../components/Logo";
import { StyledLoginContainer } from "./style";

const Login: React.FC = () => {
  return (
    <View style={styles.container}>
      <StyledLoginContainer>
        <Logo />
        <SigninForm />
      </StyledLoginContainer>
    </View>
  );
};

export default Login;

// Just a placeholder so I could remove it from the App.tsx

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAFCFF",
    justifyContent: "center",
    padding: 30
  }
});
