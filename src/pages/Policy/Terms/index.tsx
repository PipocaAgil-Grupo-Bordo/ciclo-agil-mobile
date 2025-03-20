import { paragraphs } from "@constants/terms";
import { View } from "react-native";

import { Sc } from "./style";

const { termsOfUse } = paragraphs;

function Terms() {
  return (
    <Sc.Container>
      {termsOfUse.map((element, i) => (
        <View key={i}>
          <Sc.TopicParagraph>{element.title}</Sc.TopicParagraph>

          <Sc.Paragraph>{element.text}</Sc.Paragraph>
        </View>
      ))}
    </Sc.Container>
  );
}

export default Terms;
