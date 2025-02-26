import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Container } from "./style";

interface PageContainerProps {
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
  keyboardShouldPersistTaps?: 'always' | 'never' | 'handled';
}

const PageContainer: React.FC<PageContainerProps> = ({ style, children, keyboardShouldPersistTaps = 'always' }) => {
  return (
    <Container style={style} keyboardShouldPersistTaps={keyboardShouldPersistTaps}>
      <StatusBar style="auto" translucent />
      {children}
    </Container>
  );
};
export default PageContainer;
