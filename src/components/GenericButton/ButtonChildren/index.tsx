import { ButtonChildrenProps } from "../type";
import { Sc } from "./style";

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
