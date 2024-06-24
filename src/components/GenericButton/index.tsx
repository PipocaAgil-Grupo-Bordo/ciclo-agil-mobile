import { ActivityIndicator } from "react-native";
import ButtonChildren from "./ButtonChildren";
import { GenericButtonProps, StatesType } from "./type";
import { Sc } from "./style";

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
function GenericButton({ icon, state, isLoading, children, ...props }: GenericButtonProps) {
  /**
   * Change the color of the button when it's pressed
   *
   * @param state - Component props (defined the theme of the button)
   */
  function HandleUnderlayColor(state: StatesType | undefined) {
    switch (state) {
      case "accent":
        return "#722CA1";
      case "mild":
        return "#DCC1EE";
      case "no-style":
        return "#fafcff";
      case "default":
      default:
        return "#F4EBFA";
    }
  }

  return (
    <Sc.Button
      state={state}
      activeOpacity={1}
      underlayColor={HandleUnderlayColor(state)}
      {...props}
    >
      <ButtonChildren icon={icon} state={state}>
        {isLoading ? <ActivityIndicator color={"#fff"} /> : children}
      </ButtonChildren>
    </Sc.Button>
  );
}

export default GenericButton;
