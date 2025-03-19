import { memo, useMemo } from "react";

import { RenderedContentProps } from "../type";
import { Sc } from "./style";

function RenderedContent<Item>({
  item,
  index,
  currentItemSelected,
  itemHeight
}: RenderedContentProps<Item>) {
  const isSelected = useMemo(() => index === currentItemSelected, [index, currentItemSelected]);

  return (
    <Sc.Text isSelected={isSelected} yAxis={itemHeight}>
      {String(item)}
    </Sc.Text>
  );
}

export default memo(RenderedContent);
