import { ActivityIndicator } from "react-native";
import ButtonChildren from "./ButtonChildren";
import { StyledButton } from "./style";
import { GenericButtonProps, StatesType } from "./type";

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
const GenericButton: React.FC<GenericButtonProps> = ({
  icon,
  state,
  isLoading,
  children,
  ...rest
}) => {
  const HandleUnderlayColor = (state: StatesType | undefined) => {
    switch (state) {
      case "accent":
        return "#722CA1";
      case "mild":
        return "#DCC1EE";
      case "default":
      default:
        return "#F4EBFA";
    }
  };

  return (
    <StyledButton
      state={state}
      activeOpacity={1}
      underlayColor={HandleUnderlayColor(state)}
      {...rest}
    >
      <ButtonChildren icon={icon} state={state}>
        {isLoading ? <ActivityIndicator color={"#fff"} /> : children}
      </ButtonChildren>
    </StyledButton>
  );
};

export default GenericButton;
