import { TouchableHighlightProps } from "react-native";
import { StyledTestButton, StyledTestButtonProps, StyledTestButtonText } from "./style";
import { ReactNode } from "react";

interface TestButtonProps extends StyledTestButtonProps, TouchableHighlightProps {
  children: ReactNode;
}

const TestButton: React.FC<TestButtonProps> = ({ state, children }) => {
  return (
    <StyledTestButton state={state}  activeOpacity={0.5}>
      <StyledTestButtonText state={state}>{children}</StyledTestButtonText>
    </StyledTestButton>
  );
};

export default TestButton;
