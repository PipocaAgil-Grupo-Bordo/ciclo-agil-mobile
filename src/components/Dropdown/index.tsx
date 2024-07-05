import { useState } from "react";
import { Sc } from "./style";
import { DropdownProps } from "./type";
import { Animated } from "react-native";
import TextBox from "@components/TextBox";

/**
 * Dropdown menu component
 *
 * @param label - Label that comes just before the dropdown menu
 * @param currentOption - Current value selected in the dropdown menu
 * @param options - An array with the current values inside the dropdown menu
 * @param onChange - Callback function for when an option is selected
 */
function Dropdown<Options>({ label, currentOption, options, onChange }: DropdownProps<Options>) {
  const [currentSelectedOtion, setCurrentSelectedOption] = useState(currentOption);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const rotation = useState(new Animated.Value(0))[0];

  /**
   * Rotate the arrow up if the dropdown menu is open, otherwise rotate it down
   */
  function handleArrowAnimation() {
    Animated.timing(rotation, {
      toValue: isDropdownOpen ? 0 : 1,
      duration: 150,
      useNativeDriver: true
    }).start();
  }

  /**
   * Open and close the dropdown menu
   */
  function handleDropdownMenu() {
    setIsDropdownOpen((prev) => !prev);
    handleArrowAnimation();
  }

  /**
   * Handle the selection of an option
   *
   * @param option - The newly selected option to be set as the current option.
   */
  function handleOptions(option: Options) {
    // Update the currently selected option with the newly selected one
    setCurrentSelectedOption(option as string);

    // Trigger the onChange callback function (this is a props function that will be passed to the component)
    onChange(option);

    // Close the dropdown menu
    setIsDropdownOpen(false);
    handleArrowAnimation();
  }

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
              <Sc.OptionButton activeOpacity={1} key={i} onPress={() => handleOptions(option)}>
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
