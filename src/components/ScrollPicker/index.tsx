import React, { useState } from "react";
import {
  FlatList,
  ListRenderItemInfo,
  NativeScrollEvent,
  NativeSyntheticEvent
} from "react-native";
import { ScrollPickerProps } from "./type";
import { Sc } from "./style";
import RenderedContent from "./RenderedContent";

/**
 * Render a scrollable array of selectable items
 *
 * @param items - An array of items
 * @param onIndexChange - A function that is called when the selected index changes. It receives the index of the selected item as an argument.
 */
function ScrollPicker<Item>({ items, onIndexChange }: ScrollPickerProps<Item>) {
  const [currentItemSelected, setCurrentItemSelected] = useState<number>(1);

  const itemHeight = 44.8;
  const columnAmount = 4;
  const itemBlockSize = itemHeight * columnAmount;

  // Workaround to ensure there's a non-selectable first and two last items for now
  const modifiedItem = [items[items.length - 1], ...items, items[0], items[1]];

  /**
   * Calculate the index of the selected item based on the scroll position once the scrolling event ends.
   * It then fires the callback function with the current index.
   *
   * @param scrollEvent - The native scroll event.
   */
  function momentumScrollEnd(scrollEvent: NativeSyntheticEvent<NativeScrollEvent>) {
    const { y } = scrollEvent.nativeEvent.contentOffset;
    const index = Math.round(y / itemHeight);

    onIndexChange(index);
  }

  /**
   * Calculate the index of the selected item based on the scroll position once the scrolling event ends.
   * It then selects a new item with the current index.
   *
   * @param scrollEvent - The native scroll event.
   */
  function handleItemSelection(scrollEvent: NativeSyntheticEvent<NativeScrollEvent>) {
    const { y } = scrollEvent.nativeEvent.contentOffset;
    const index = Math.round(y / itemHeight);

    setCurrentItemSelected(index + 1);
  }

  return (
    <Sc.Container yAxis={itemBlockSize}>
      <FlatList
        data={modifiedItem}
        snapToInterval={itemHeight}
        renderItem={({ item, index }: ListRenderItemInfo<Item>) => (
          <RenderedContent
            item={item}
            index={index}
            currentItemSelected={currentItemSelected}
            itemHeight={itemHeight} />
        )}
        showsVerticalScrollIndicator={false}
        style={{ width: "100%" }}
        onMomentumScrollEnd={momentumScrollEnd}
        onScroll={handleItemSelection} />

      <Sc.IndicatorWrapper yAxis={itemHeight}>
        <Sc.Indicator yAxis={itemHeight} />
      </Sc.IndicatorWrapper>
    </Sc.Container>
  );
}

export default ScrollPicker;
