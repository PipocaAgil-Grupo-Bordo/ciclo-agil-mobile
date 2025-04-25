import React, { useState, useRef } from "react";
import { View, ScrollView, Dimensions, ImageSourcePropType } from "react-native";

import PageContainer from "@components/PageContainer";
import SlideItem from "@components/SlideItem";
import { Sc } from "./style";

import FirstImage from "@images/carousel/first-slide.png";
import SecondImage from "@images/carousel/second-slide.png";
import ThirdImage from "@images/carousel/third-slide.png";
import { useNavigation } from "@react-navigation/native";
import { NavigationType } from "@routes/type";

interface Slide {
  id: number;
  imageSource: ImageSourcePropType;
  text: string;
  title?: string; // Adicionando title para corresponder ao SlideItem
}

const slides: Slide[] = [
  {
    id: 1,
    imageSource: FirstImage,
    text: "O primeiro passo para transformar e\n impactar positivamente o cuidado com\n a sua saúde menstrual.",
    title: "Ciclo Ágil"
  },
  {
    id: 2,
    imageSource: SecondImage,
    text: "Facilita o registro e a visualização clara\n do ciclo, incluindo menstruação,\n ovulação e período fértil."
  },
  {
    id: 3,
    imageSource: ThirdImage,
    text: "Alertas personalizáveis e relatórios claros\n ajudam a acompanhar o ciclo e\n identificar padrões.",
    title: "26 dias"
  }
];

const { width } = Dimensions.get("window");

function OnboardingCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollViewRef = useRef<ScrollView>(null);
  const navigation = useNavigation<NavigationType>();

  const goToPage = () => {
    navigation.navigate("LastPeriod");
  };

  const goToSlide = (slideIndex: number) => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ x: slideIndex * width, y: 0, animated: true });
      setCurrentSlide(slideIndex);
    }
  };

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      goToSlide(currentSlide + 1);
    }
  };

  return (
    <PageContainer>
      <Sc.container>
        <Sc.contentContainer>
          <ScrollView
            ref={scrollViewRef}
            horizontal
            showsHorizontalScrollIndicator={true}
            scrollEnabled={true}
            pagingEnabled={true}
          >
            {slides.map((slide, index) => (
              <View key={slide.id} style={{ width }}>
                <SlideItem
                  imageSource={slide.imageSource}
                  text={slide.text}
                  showSkipButton={true}
                  skipDisabled={index === 2}
                  showNextButton={index < 2}
                  showFinishButton={index === 2}
                  onSkip={goToPage}
                  onNext={handleNext}
                  onFinish={goToPage}
                />
              </View>
            ))}
          </ScrollView>
        </Sc.contentContainer>

        <Sc.paginationContainer>
          {slides.map((_, index) => (
            <Sc.paginationDot key={index} active={index === currentSlide} />
          ))}
        </Sc.paginationContainer>
      </Sc.container>
    </PageContainer>
  );
}

export default OnboardingCarousel;
