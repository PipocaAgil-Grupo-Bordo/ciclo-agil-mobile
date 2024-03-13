import React from "react";
import { StyleSheet, View } from "react-native";
import SigninForm from "./SigninForm";
import { LoginBox } from "./style";
import Logo from "../../components/Logo";

const Login: React.FC = () => {
  return (
    <View style={styles.container}>
      <LoginBox>
        <Logo />
        <SigninForm />
      </LoginBox>
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
