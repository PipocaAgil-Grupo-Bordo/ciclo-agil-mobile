import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { Sc } from "./style";

interface PageContainerProps {
    style?: StyleProp<ViewStyle>;
    children: React.ReactNode;
  }

function PageContainer({ style, children }: PageContainerProps) {
  return (
    <Sc.Container></Sc.Container>
  )
};

export default PageContainer;
