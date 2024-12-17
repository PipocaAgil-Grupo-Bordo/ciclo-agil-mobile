import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Container } from "./style";
import { StatusBar } from "expo-status-bar";

interface PageContainerProps {
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
}

const PageContainer: React.FC<PageContainerProps> = ({ style, children }) => {
  return (
    <Container style={style}>
      <StatusBar style="auto" translucent />
      {children}
    </Container>
  );
};
export default PageContainer;
