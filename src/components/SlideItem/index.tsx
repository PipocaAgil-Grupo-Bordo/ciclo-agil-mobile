import React from "react";
import GenericButton from "@components/GenericButton"; // Ajuste o caminho
import { SlideContainer, SlideImage, SlideText, ButtonsContainer } from "./style";
import { Text } from "react-native";

interface SlideItemProps {
  imageSource: string;
  text: string;
  showSkipButton: boolean;
  showNextButton: boolean;
  showFinishButton: boolean;
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
  onSkip,
  onNext,
  onFinish
}) => {
  return (
    <SlideContainer>
      <SlideImage source={imageSource} resizeMode="contain" />
      <SlideText>{text}</SlideText>
      <ButtonsContainer>
        {showSkipButton && (
          <GenericButton onPress={onSkip} state="accent">
            <Text>Pular</Text>
          </GenericButton>
        )}
        {showNextButton && (
          <GenericButton onPress={onNext} state="accent">
            <Text>Próximo</Text>
          </GenericButton>
        )}
        {showFinishButton && (
          <GenericButton onPress={onFinish} state="accent">
            <Text>Finalizar</Text>
          </GenericButton>
        )}
      </ButtonsContainer>
    </SlideContainer>
  );
};

export default SlideItem;
