import { StyledText } from "./style";
import { TextBoxProps } from "./type";

/**
 * This ensures font family can be consistent across all components
 *
 * You can use it like this if all you need is the font family:
 * <TextBox>Text goes here</TextBox>
 */
function TextBox({ children }: TextBoxProps) {
  return <StyledText>{children}</StyledText>;
}

export default TextBox;
