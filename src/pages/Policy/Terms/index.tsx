import { paragraphs } from "assets/constants/terms";
import { Sc } from "./style";

const { privacyPolicy, termsOfUse } = paragraphs;
const Terms: React.FC = () => {
  return (
    <>
      <Sc.topic>Termos de Uso</Sc.topic>
      {termsOfUse.map(() => {})}
      <Sc.topic>Política de Privacidade</Sc.topic>
      {privacyPolicy.map(() => {})}
    </>
  );
};

export default Terms;
