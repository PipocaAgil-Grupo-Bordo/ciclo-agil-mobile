import { StyledText } from "./style";
import { TextBoxProps } from "./type";

/**
 * This ensures font family can be consistent across all components
 */
const TextBox: React.FC<TextBoxProps> = ({ size, color, align, children }) => {
  return <StyledText size={size} color={color} align={align}>{children}</StyledText>;
};

export default TextBox;
