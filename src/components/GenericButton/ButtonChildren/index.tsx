import { ButtonChildrenProps } from "../type";
import { Sc } from "./style";

const ButtonChildren: React.FC<ButtonChildrenProps> = ({ icon, state, children }) => {
  return (
    <>
      {icon && (
        <Sc.Icon importantForAccessibility="no" accessibilityElementsHidden={true} source={icon} />
      )}

      <Sc.ButtonText state={state}>{children}</Sc.ButtonText>
    </>
  );
};

export default ButtonChildren;
