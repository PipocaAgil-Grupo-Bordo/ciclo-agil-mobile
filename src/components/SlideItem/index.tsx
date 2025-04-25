import React from "react";
import GenericButton from "@components/GenericButton";
import { Sc } from "./style";
// import { NewColorScheme } from "@styles/globalStyles";
import { Text, ImageSourcePropType } from "react-native";

interface SlideItemProps {
  imageSource: ImageSourcePropType;
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
  imageSource,
  text,
  showSkipButton,
  showNextButton,
  showFinishButton,
  skipDisabled,
  onSkip,
  onNext,
  onFinish
}) => {
  return (
    <Sc.container>
      <Sc.contentContainer>
        <Sc.image source={imageSource} resizeMode="contain" />
        <Sc.text>{text}</Sc.text>
      </Sc.contentContainer>
      <Sc.buttonsContainer>
        {showSkipButton && (
          <Sc.buttonContainer>
            <GenericButton onPress={onSkip} state="no-style" disabled={skipDisabled}>
              <Text>Pular</Text>
            </GenericButton>
          </Sc.buttonContainer>
        )}
        {showNextButton && (
          <Sc.buttonContainer>
            <GenericButton onPress={onNext} state="accent">
              <Text>Próximo</Text>
            </GenericButton>
          </Sc.buttonContainer>
        )}
        {showFinishButton && (
          <Sc.buttonContainer>
            <GenericButton onPress={onFinish} state="accent">
              <Text>Finalizar</Text>
            </GenericButton>
          </Sc.buttonContainer>
        )}
      </Sc.buttonsContainer>
    </Sc.container>
  );
};

export default SlideItem;
