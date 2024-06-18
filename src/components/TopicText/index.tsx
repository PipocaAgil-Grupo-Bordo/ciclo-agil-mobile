import { ReactNode } from "react";
import { TextLora } from "./style";

interface TopicTextProps {
  children: ReactNode;
}

/**
 * This ensures font family can be consistent across all components
 *
 * You can use it like this if all you need is the font family:
 * <TextBox>Text goes here</TextBox>
 *
 * A better approach if you need to add more customization is to add it directly to the styledComponent file:
 * export const CustomText = styled(TextMontserrat)` -- rest of the code `
 */
function TopicText({ children }: TopicTextProps) {
  return <TextLora>{children}</TextLora>;
}

export default TopicText;
