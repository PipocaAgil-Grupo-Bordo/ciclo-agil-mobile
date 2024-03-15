import { StyledButtonText, StyledButtonIcon, StyledButton } from "./style";
import { GenericButtonProps } from "./type";

/**
 * Generic button to ensure style consistency across components
 *
 * It adds the style of all current button designs that take up the whole screen's width.
 *
 * If you need to add spacing between this button and another element, you can wrap it around with a View component and style that instead.
 *
 * If you need to add an image, do so with the icon prop:
 * icon={require('@/assets/image.format')}
 */
const GenericButton: React.FC<GenericButtonProps> = ({ icon, state, children, ...rest }) => {
  return (
    <StyledButton state={state} {...rest}>
      {icon && (
        <StyledButtonIcon
          importantForAccessibility="no"
          accessibilityElementsHidden={true}
          source={icon}
        />
      )}
      <StyledButtonText state={state}>{children}</StyledButtonText>
    </StyledButton>
  );
};

export default GenericButton;
