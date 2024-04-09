import { useState } from "react";
import { Sc } from "./style";
import { DropdownProps } from "./type";
import { Animated } from "react-native";
import TextBox from "@components/TextBox";

/**
 * Dropdown menu component
 *
 * @param label - Optional label that comes just before the dropdown menu
 * @param currentOption - Current value selected in the dropdown menu
 * @param options - An array with the current values inside the dropdown menu
 * @param onChange - Callback function for when an option is selected
 */
function Dropdown<Options>({ label, currentOption, options, onChange }: DropdownProps<Options>) {
  const [currentSelectedOtion, setCurrentSelectedOption] = useState(currentOption);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const rotation = useState(new Animated.Value(0))[0];

  // Rotate the arrow depending on the dropdown menu status
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

  /**
   * 1 - Update the currently selected option with the newly selected one.
   * 2 - Trigger the onChange callback function.
   * 3 - Close the dropdown menu.
   *
   * @param option - The newly selected option to be set as the current option.
   */
  const handleOptions = (option: Options) => {
    // 1
    setCurrentSelectedOption(option as string);

    // 2
    onChange(option);

    // 3
    setIsDropdownOpen(false);
    handleArrowAnimation();
  };

  return (
    <Sc.Container>
      <Sc.Label>
        <TextBox>{label}</TextBox>
      </Sc.Label>

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
