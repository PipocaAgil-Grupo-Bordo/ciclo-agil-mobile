import { useState } from "react";
import { Sc } from "./style";
import { DropdownProps } from "./type";
import { Animated } from "react-native";

function Dropdown<Options>({ label, currentOption, options }: DropdownProps<Options>) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const rotation = useState(new Animated.Value(0))[0];

  const handleDropdownMenu = () => {
    setIsDropdownOpen((prev) => !prev);

    Animated.timing(rotation, {
      toValue: isDropdownOpen ? 0 : 1,
      duration: 150,
      useNativeDriver: true
    }).start();
  };

  const handleOptions = (option: any) => {
    console.log(option);
  };

  return (
    <Sc.Container>
      <Sc.Label>{label}</Sc.Label>

      <Sc.DropdownWrapper>
        <Sc.DropdownMenu onPress={handleDropdownMenu} isOpen={isDropdownOpen}>
          <Sc.SelectedOption>{currentOption}</Sc.SelectedOption>

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
              <Sc.Option
                key={i}
                isLast={i === options.length - 1}
                onPress={() => handleOptions(option)}
              >
                {String(option)}
              </Sc.Option>
            ))}
          </Sc.DropdownOptions>
        )}
      </Sc.DropdownWrapper>
    </Sc.Container>
  );
}

export default Dropdown;
