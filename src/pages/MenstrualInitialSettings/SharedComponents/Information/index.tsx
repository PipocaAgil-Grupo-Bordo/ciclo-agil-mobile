import { Sc } from "./style";
import { InformationProps } from "./type";

function Information({ text }: InformationProps) {
  return (
    <Sc.Container>
      <Sc.Text>{text}</Sc.Text>
    </Sc.Container>
  );
}

export default Information;
