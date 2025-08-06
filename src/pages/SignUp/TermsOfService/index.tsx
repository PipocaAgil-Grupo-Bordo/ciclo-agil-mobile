import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { NavigationType } from "@routes/type";
import { Pressable } from "react-native";
import CheckedIcon from "@images/checked-icon.svg";

import { Sc } from "./style";

interface TermsOfServiceProps {
  onChange?: (isAccepted: boolean) => void;
}

function TermsOfService({ onChange }: TermsOfServiceProps = {}) {
  const navigation = useNavigation<NavigationType>();
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    if (onChange) {
      onChange(isChecked);
    }
  }, [isChecked, onChange]);

  function handleTermsPopUp() {
    navigation.navigate("Policy");
  }

  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Sc.Container>
      <Pressable onPress={toggleCheckbox}>
        <Sc.Row>
          <Sc.CheckboxContainer isChecked={isChecked}>
            {isChecked && <CheckedIcon width={16} height={16} />}
          </Sc.CheckboxContainer>
          <Sc.TextContainer>
            <Sc.Text>
              Concordo com os{" "}
              <Sc.Hyperlink onPress={handleTermsPopUp}>
                Termos de Uso e Política de privacidade
              </Sc.Hyperlink>
              .
            </Sc.Text>
          </Sc.TextContainer>
        </Sc.Row>
      </Pressable>
    </Sc.Container>
  );
}

export default TermsOfService;
