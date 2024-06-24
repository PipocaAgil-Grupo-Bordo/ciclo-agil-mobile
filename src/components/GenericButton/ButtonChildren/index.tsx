import { ButtonChildrenProps } from "../type";
import { Sc } from "./style";

/**
 * Button children component, it contains the icon and text of the button
 *
 * @param icon - The optional icon that will be displayed on the button. To use: icon={require('@/assets/imageName.format')}
 * @param state - Defines the theme of the button
 * @param children - Can be a string or another component
 */
function ButtonChildren({ icon, state, children }: ButtonChildrenProps) {
  return (
    <>
      {icon && (
        <Sc.Icon importantForAccessibility="no" accessibilityElementsHidden={true} source={icon} />
      )}

      <Sc.ButtonText state={state}>{children}</Sc.ButtonText>
    </>
  );
}

export default ButtonChildren;
