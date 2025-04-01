import { ActivityIndicator } from "react-native";
import ButtonChildren from "./ButtonChildren";
import { Sc } from "./style";
import { NewColorScheme } from "@styles/globalStyles";
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
function GenericButton({ icon, state, isLoading, children, ...props }: GenericButtonProps) {
  /**
   * Change the color of the button when it's pressed
   *
   * @param state - Component props (define the theme of the button)
   */
  function HandleUnderlayColor(state: StatesType | undefined) {
    // TODO - precisamos melhorar essa lógica nao sei se ultilizar um switch é a melhor opção para isso
    // tem uma maneira de fazer componentes reultilizavel ultilizando reactFC e passando props para ele
    // mas nao sei se funcionaria aqui no react native
    switch (state) {
      case "accent":
        return NewColorScheme.accent.highlight;
      case "mild":
      case "default":
      case "no-style":
      default:
        return "#DCBBF0";
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
