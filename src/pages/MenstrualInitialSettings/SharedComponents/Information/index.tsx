import { Sc } from "./style";
import { InformationProps } from "./type";

const Information: React.FC<InformationProps> = ({ text }) => {
  return (
    <Sc.Container>
      <Sc.Text>{text}</Sc.Text>
    </Sc.Container>
  );
};

export default Information;
