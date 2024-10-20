import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { Container } from "./style";
  import { SafeAreaView } from "react-native-safe-area-context";

interface PageContainerProps {
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
}

const PageContainer: React.FC<PageContainerProps> = ({ style, children }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
    <Container style={style}>
      {children}
    </Container>
  </SafeAreaView>
);
};
export default PageContainer;
