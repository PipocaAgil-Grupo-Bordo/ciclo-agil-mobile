import React, { useState } from "react";
import styled from "styled-components/native";
import { Pressable, Text } from "react-native";
import { FontScheme, NewColorScheme } from "@styles/globalStyles";
import { ActivityIndicator } from "react-native";

const buttonVariants = {
  default: {
    backgroundColor: NewColorScheme.accent.highlight,
    pressedBackground: NewColorScheme.hover.primary,
    disabledBackground: NewColorScheme.background.disabled,
    textColor: NewColorScheme.text.white,
    disabledText: NewColorScheme.text.white
  }
};

interface ButtonProps {
  variant?: keyof typeof buttonVariants;
  children: string;
  fontweight?: string;
  onPress: () => void;
  disabled?: boolean;
  isLoading?: boolean;
}

const StyledButton = styled(Pressable)<{
  variant: keyof typeof buttonVariants;
  isPressed: boolean;
  disabled?: boolean;
}>`
  padding: 16px 24px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  background-color: ${({ variant, isPressed, disabled }) =>
    disabled
      ? buttonVariants[variant].disabledBackground
      : isPressed
      ? buttonVariants[variant].pressedBackground
      : buttonVariants[variant].backgroundColor};
`;

const ButtonText = styled(Text)<{
  variant: keyof typeof buttonVariants;
  fontweight?: string;
  disabled?: boolean;
}>`
  color: ${({ variant, disabled }) =>
    disabled ? buttonVariants[variant].disabledText : buttonVariants[variant].textColor};
  font-size: 16px;
  line-height: 24px;
  font-weight: ${({ fontweight }) => fontweight || "600"};
  font-family: ${FontScheme.family.primaryBold};
`;

const Button: React.FC<ButtonProps> = ({
  variant = "default",
  children,
  fontweight,
  onPress,
  disabled = false,
  isLoading
}) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <StyledButton
      variant={variant}
      onPress={disabled ? undefined : onPress}
      disabled={disabled}
      isPressed={isPressed}
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
    >
      <ButtonText variant={variant} fontweight={fontweight} disabled={disabled}>
        {isLoading ? <ActivityIndicator color={"#fff"} /> : children}
      </ButtonText>
    </StyledButton>
  );
};

export default Button;
