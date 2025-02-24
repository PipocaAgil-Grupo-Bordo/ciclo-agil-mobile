import { paragraphs } from "@constants/terms";
import { View } from "react-native";

import { Sc } from "./style";

const { privacyPolicy, termsOfUse } = paragraphs;

function Terms() {
  return (
    <Sc.Container>
      <Sc.Topic>Termos de Uso</Sc.Topic>

      {termsOfUse.map((element, i) => (
        <View key={i}>
          <Sc.TopicParagraph>{element.title}</Sc.TopicParagraph>

          <Sc.Paragraph>{element.text}</Sc.Paragraph>
        </View>
      ))}

      <Sc.Topic>Política de Privacidade</Sc.Topic>

      {privacyPolicy.map((element, i) => (
        <View key={i}>
          <Sc.TopicParagraph>{element.title}</Sc.TopicParagraph>

          <Sc.Paragraph>{element.text}</Sc.Paragraph>
        </View>
      ))}
    </Sc.Container>
  );
}

export default Terms;
