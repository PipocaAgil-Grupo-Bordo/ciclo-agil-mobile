import { StyledText } from "./style";
import { TextBoxProps } from "./type";

/**
 * This ensures font family can be consistent across all components
 */
const TextBox: React.FC<TextBoxProps> = ({ size, color, children }) => {
  return <StyledText size={size} color={color}>{children}</StyledText>;
};

export default TextBox;
