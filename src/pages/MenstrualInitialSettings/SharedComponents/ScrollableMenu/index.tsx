import ScrollPicker from "@components/ScrollPicker";

import { Sc } from "./style";
import { ScrollPickerProps } from "@components/ScrollPicker/type";

function ScrollableMenu({ onIndexChange, items }: ScrollPickerProps<number>) {
  return (
    <Sc.Container>
      <ScrollPicker items={items} onIndexChange={onIndexChange} />
    </Sc.Container>
  );
}

export default ScrollableMenu;
