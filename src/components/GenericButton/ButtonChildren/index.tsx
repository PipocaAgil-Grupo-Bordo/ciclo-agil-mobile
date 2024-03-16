import { ButtonChildrenProps } from "../type";
import { StyledButtonIcon, StyledButtonText } from "./style";

const ButtonChildren: React.FC<ButtonChildrenProps> = ({ icon, state, children }) => {
  return (
    <>
      {icon && (
        <StyledButtonIcon
          importantForAccessibility="no"
          accessibilityElementsHidden={true}
          source={icon}
        />
      )}

      <StyledButtonText state={state}>{children}</StyledButtonText>
    </>
  );
};

export default ButtonChildren;
