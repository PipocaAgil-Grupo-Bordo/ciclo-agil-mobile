import { useState } from "react";
import { Sc } from "./style";
import { DropdownProps } from "./type";
import { Animated } from "react-native";

function Dropdown<Options>({ label, currentOption, options, onChange }: DropdownProps<Options>) {
  const [currentSelectedOtion, setCurrentSelectedOption] = useState(currentOption);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const rotation = useState(new Animated.Value(0))[0];

  // Rotate the arrow depending on the dropdown status
  const handleArrowAnimation = () => {
    Animated.timing(rotation, {
      toValue: isDropdownOpen ? 0 : 1,
      duration: 150,
      useNativeDriver: true
    }).start();
  };

  // Open and close the dropdown menu
  const handleDropdownMenu = () => {
    setIsDropdownOpen((prev) => !prev);
    handleArrowAnimation();
  };

  // Swap the current option with the new selected one
  const handleOptions = (option: Options) => {
    setCurrentSelectedOption(option as string);
    onChange(option)

    setIsDropdownOpen(false);
    handleArrowAnimation();
  };

  return (
    <Sc.Container>
      <Sc.Label>{label}</Sc.Label>

      <Sc.DropdownWrapper>
        <Sc.DropdownMenu onPress={handleDropdownMenu} isOpen={isDropdownOpen}>
          <Sc.SelectedOption>{currentSelectedOtion}</Sc.SelectedOption>

          <Animated.Image
            source={require("@images/arrow.png")}
            style={{
              transform: [
                {
                  rotate: rotation.interpolate({
                    inputRange: [0, 1],
                    outputRange: ["0deg", "180deg"]
                  })
                }
              ],
              width: 18,
              height: 18
            }}
          />
        </Sc.DropdownMenu>

        {isDropdownOpen && (
          <Sc.DropdownOptions>
            {options.map((option, i) => (
              <Sc.OptionButton key={i} onPress={() => handleOptions(option)}>
                <Sc.Option isLast={i === options.length - 1}>{String(option)}</Sc.Option>
              </Sc.OptionButton>
            ))}
          </Sc.DropdownOptions>
        )}
      </Sc.DropdownWrapper>
    </Sc.Container>
  );
}

export default Dropdown;
