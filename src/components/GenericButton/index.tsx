import { GeneralColors } from "@styles/colors";
import { NewColorScheme } from "@styles/globalStyles";
import { ActivityIndicator } from "react-native";

import ButtonChildren from "./ButtonChildren";
import { Sc } from "./style";
import { GenericButtonProps, StatesType } from "./type";

/**
 * Button component
 * It adds the style of all current button designs that take up the whole screen's width.
 *
 * If you need to add spacing between this button and another element, you can wrap it around a View component and style that instead.
 *
 * @param icon - The optional icon that will be displayed on the button. To use: icon={require('@/assets/imageName.format')}
 * @param state - Defines the theme of the button
 * @param isLoading - If true, it will display a loading spinner
 * @param children - Can be a string or another component
 * @param props - All the props that a TouchableHighlight component accepts
 */
function GenericButton({
  icon,
  state,
  isLoading,
  children,
  padding,
  ...props
}: GenericButtonProps) {
  /**
   * Change the color of the button when it's pressed
   *
   * @param state - Component props (define the theme of the button)
   */
  function HandleUnderlayColor(state: StatesType | undefined) {
    switch (state) {
      case "accent":
        return NewColorScheme.accent.highlight;
      case "mild":
        return GeneralColors.primary[300];
      case "no-style":
        return NewColorScheme.background.white;
      case "default":
      default:
        return GeneralColors.primary[100];
    }
  }

  return (
    <Sc.Button
      state={state}
      padding={padding}
      activeOpacity={1}
      underlayColor={HandleUnderlayColor(state)}
      {...props}
    >
      <ButtonChildren icon={icon} state={state} disabled={props.disabled}>
        {isLoading ? <ActivityIndicator color={"#fff"} /> : children}
      </ButtonChildren>
    </Sc.Button>
  );
}

export default GenericButton;
