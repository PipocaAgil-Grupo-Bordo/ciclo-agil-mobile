import { paragraphs } from "@constants/terms";
import { View, Text } from "react-native";

import { Sc } from "./style";

const { privacyPolicy, termsOfUse } = paragraphs;

function Terms() {
  return (
    <Sc.Container>
      <Sc.Topic>
        <Text>Termos de Uso</Text>
      </Sc.Topic>

      {termsOfUse.map((element, i) => (
        <View key={i}>
          <Sc.TopicParagraph>{element.title}</Sc.TopicParagraph>

          <Sc.Paragraph>{element.text}</Sc.Paragraph>
        </View>
      ))}

      <Sc.Topic>
        <Text>Política de Privacidade</Text>
      </Sc.Topic>

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
