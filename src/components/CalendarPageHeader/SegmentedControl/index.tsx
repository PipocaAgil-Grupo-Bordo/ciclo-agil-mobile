import React from "react";
import { TouchableOpacity } from "react-native";
import { Sc } from "./style";
import { SegmentedControlProps } from "./type";
import { useNavigation } from "@react-navigation/native";
import { NavigationType } from "@routes/type";

function SegmentedControl({ options }: SegmentedControlProps) {
  const navigation = useNavigation<NavigationType>();
  const [selectedOption, setSelectedOption] = React.useState(options[0]);
  const onOptionPress = (option: string) => {
    setSelectedOption(option);
    if (option === "Mês") {
      navigation.navigate("MonthlyCalendar");
    } else if (option === "Ano") {
      navigation.navigate("AnnualCalendar");
    }
  };

  return (
    <Sc.OptionsContainer>
      {options.map((option) =>
        selectedOption != option ? (
          <Sc.Option key={option}>
            <TouchableOpacity onPress={() => onOptionPress(option)}>
              <Sc.Text>{option}</Sc.Text>
            </TouchableOpacity>
          </Sc.Option>
        ) : (
          <Sc.SelectedOption key={option}>
            <TouchableOpacity onPress={() => onOptionPress(option)}>
              <Sc.SelectedText>{option}</Sc.SelectedText>
            </TouchableOpacity>
          </Sc.SelectedOption>
        )
      )}
    </Sc.OptionsContainer>
  );
}

export default SegmentedControl;
