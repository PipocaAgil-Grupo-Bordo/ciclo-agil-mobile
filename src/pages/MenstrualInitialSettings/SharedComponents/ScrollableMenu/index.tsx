import ScrollPicker from "@components/ScrollPicker";
import { Sc } from "./style";
import { ScrollableMenuProps } from "./type";

function ScrollableMenu({ onIndexChange, items }: ScrollableMenuProps<number>) {
  return (
    <Sc.Container>
      <ScrollPicker items={items} onIndexChange={onIndexChange} />
    </Sc.Container>
  );
}

export default ScrollableMenu;
