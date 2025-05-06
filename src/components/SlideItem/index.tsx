import React from "react";
import { Sc } from "./style";
import { Text } from "react-native";
import { SvgProps } from "react-native-svg";

import GenericButton from "@components/GenericButton";

interface SlideItemProps {
  imageComponent: React.FC<SvgProps>;
  text: string;
  showSkipButton: boolean;
  showNextButton: boolean;
  showFinishButton: boolean;
  skipDisabled?: boolean;
  onSkip?: () => void;
  onNext?: () => void;
  onFinish?: () => void;
}

const SlideItem: React.FC<SlideItemProps> = ({
  imageComponent,
  text,
  showSkipButton,
  showNextButton,
  showFinishButton,
  skipDisabled,
  onSkip,
  onNext,
  onFinish
}) => {
  const ImageComponent = imageComponent;

  return (
    <Sc.container>
      <Sc.contentContainer>
        <ImageComponent />
        <Sc.text>{text}</Sc.text>
      </Sc.contentContainer>
      <Sc.buttonsContainer>
        {showSkipButton && (
          <Sc.buttonContainer>
            <GenericButton onPress={onSkip} state="no-style" disabled={skipDisabled} padding="9px">
              <Text>Pular</Text>
            </GenericButton>
          </Sc.buttonContainer>
        )}
        {showNextButton && (
          <Sc.buttonContainer>
            <GenericButton onPress={onNext} state="accent" padding="9px">
              <Text>Próximo</Text>
            </GenericButton>
          </Sc.buttonContainer>
        )}
        {showFinishButton && (
          <Sc.buttonContainer>
            <GenericButton onPress={onFinish} state="accent" padding="9px">
              <Text>Finalizar</Text>
            </GenericButton>
          </Sc.buttonContainer>
        )}
      </Sc.buttonsContainer>
    </Sc.container>
  );
};

export default SlideItem;
