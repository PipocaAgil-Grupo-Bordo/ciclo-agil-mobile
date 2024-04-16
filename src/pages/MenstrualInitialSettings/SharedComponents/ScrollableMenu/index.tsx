import ScrollPicker from "@components/ScrollPicker";
import { Sc } from "./style";
import { ScrollableMenuProps } from "./type";

const ScrollableMenu: React.FC<ScrollableMenuProps<number>> = ({ onIndexChange, items }) => {
  return (
    <Sc.Container>
      <ScrollPicker items={items} onIndexChange={onIndexChange} />
    </Sc.Container>
  );
};

export default ScrollableMenu;
