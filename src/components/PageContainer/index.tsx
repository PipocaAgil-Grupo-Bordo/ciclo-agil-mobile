import React from "react";

import { StatusBar } from "expo-status-bar";
import { StyleProp, ViewStyle } from "react-native";

import { Container } from "./style";

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
