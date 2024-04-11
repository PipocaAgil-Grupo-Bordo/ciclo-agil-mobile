import { paragraphs } from "assets/constants/terms";
import { Sc } from "./style";
import { View } from "react-native";

const { privacyPolicy, termsOfUse } = paragraphs;

const Terms: React.FC = () => {
  return (
    <View>
      <Sc.topic>Termos de Uso</Sc.topic>
      {termsOfUse.map((element, i) => (
        <View key={i}>
          <Sc.topicParagraph>{element.title}</Sc.topicParagraph>
          <Sc.paragraph>{element.text}</Sc.paragraph>
        </View>
      ))}
      <Sc.topic>Política de Privacidade</Sc.topic>
      {privacyPolicy.map((element, i) => (
        <View key={i}>
          <Sc.topicParagraph>{element.title}</Sc.topicParagraph>
          <Sc.paragraph>{element.text}</Sc.paragraph>
        </View>
      ))}
    </View>
  );
};

export default Terms;
