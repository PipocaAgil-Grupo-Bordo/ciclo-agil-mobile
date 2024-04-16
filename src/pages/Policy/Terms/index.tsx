import { paragraphs } from "@constants/terms";
import { Sc } from "./style";

const { privacyPolicy, termsOfUse } = paragraphs;

const Terms: React.FC = () => {
  return (
    <Sc.Container>
      <Sc.Topic>Termos de Uso</Sc.Topic>
      {termsOfUse.map((element, i) => (
        <Sc.Container key={i}>
          <Sc.TopicParagraph>{element.title}</Sc.TopicParagraph>
          <Sc.Paragraph>{element.text}</Sc.Paragraph>
        </Sc.Container>
      ))}
      <Sc.Topic>Política de Privacidade</Sc.Topic>
      {privacyPolicy.map((element, i) => (
        <Sc.Container key={i}>
          <Sc.TopicParagraph>{element.title}</Sc.TopicParagraph>
          <Sc.Paragraph>{element.text}</Sc.Paragraph>
        </Sc.Container>
      ))}
    </Sc.Container>
  );
};

export default Terms;
