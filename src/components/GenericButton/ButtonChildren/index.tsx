import TextBox from "../../TextBox";
import { ButtonChildrenProps, StatesType } from "../type";
import { StyledButtonIcon } from "./style";

const ButtonChildren: React.FC<ButtonChildrenProps> = ({ icon, state, children }) => {
  // Apply the correct color based on the state prop
  const handleButtonTextColor = (state: StatesType) => {
    switch (state) {
      case "accent":
        return "neutral-gray--white";
      case "mild":
        return "neutral-gray--black";
      case "default":
      default:
        return "neutral-blue--900";
    }
  };

  return (
    <>
      {icon && (
        <StyledButtonIcon
          importantForAccessibility="no"
          accessibilityElementsHidden={true}
          source={icon}
        />
      )}

      <TextBox size="lg" color={handleButtonTextColor(state!)}>
        {children}
      </TextBox>
    </>
  );
};

export default ButtonChildren;
