import React, { useState, useRef } from "react";
import { View, ScrollView, Dimensions } from "react-native";

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
  imageSource: string;
  text: string;
  title?: string; // Adicionando title para corresponder ao SlideItem
}

const slides: Slide[] = [
  {
    id: 1,
    imageSource: FirstImage,
    text: "O primeiro passo para transformar e impactar positivamente o cuidado com a sua saúde menstrual.",
    title: "Ciclo Ágil"
  },
  {
    id: 2,
    imageSource: SecondImage,
    text: "Facilita o registro e a visualização clara do ciclo, incluindo menstruação, ovulação e período fértil."
  },
  {
    id: 3,
    imageSource: ThirdImage,
    text: "Alertas personalizáveis e relatórios claros ajudam a acompanhar o ciclo e identificar padrões.",
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
      <ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false}
        pagingEnabled={false} // Removendo pagingEnabled para controle manual
      >
        {slides.map((slide, index) => (
          <View key={slide.id} style={{ width }}>
            <SlideItem
              imageSource={slide.imageSource}
              text={slide.text}
              showSkipButton={index < 2}
              showNextButton={index < 2}
              showFinishButton={index === 2}
              onSkip={goToPage}
              onNext={handleNext}
              onFinish={goToPage}
            />
          </View>
        ))}
      </ScrollView>

      <Sc.paginationContainer>
        {slides.map((_, index) => (
          <Sc.paginationDot
            key={index}
            style={index === currentSlide ? Sc.activeDot : Sc.inactiveDot}
          />
        ))}
      </Sc.paginationContainer>
    </PageContainer>
  );
}

export default OnboardingCarousel;
