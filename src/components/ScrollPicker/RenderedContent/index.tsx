import { RenderedContentProps } from "../type";
import { Sc } from "./style";

const RenderedContent = <Item,>({
  item,
  index,
  currentItemSelected,
  itemHeight
}: RenderedContentProps<Item>) => {
  return (
    <Sc.Text isSelected={index === currentItemSelected} yAxis={itemHeight}>
      {String(item)}
    </Sc.Text>
  );
};

export default RenderedContent;
