import React, { useState } from "react";
import {
  FlatList,
  ListRenderItemInfo,
  NativeScrollEvent,
  NativeSyntheticEvent
} from "react-native";
import { ScrollPickerProps } from "./type";
import { Sc } from "./style";

/**
 * A picker component. It shows an array of selectable items.
 *
 * @param items - An array of items
 * @param onIndexChange - A function that is called when the selected index changes. It receives the index of the selected item as an argument.
 */
function ScrollPicker<Item>({ items, onIndexChange }: ScrollPickerProps<Item>) {
  const [currentItemSelected, setCurrentItemSelected] = useState<number>(1);

  const itemHeight = 56;
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
  const momentumScrollEnd = (scrollEvent: NativeSyntheticEvent<NativeScrollEvent>) => {
    const y = scrollEvent.nativeEvent.contentOffset.y;
    const index = Math.round(y / itemHeight);

    onIndexChange(index);
  };

  /**
   * Calculate the index of the selected item based on the scroll position once the scrolling event ends.
   * It then selects a new item with the current index.
   *
   * @param scrollEvent - The native scroll event.
   */
  const handleItemSelection = (scrollEvent: NativeSyntheticEvent<NativeScrollEvent>) => {
    const y = scrollEvent.nativeEvent.contentOffset.y;
    const index = Math.round(y / itemHeight);

    setCurrentItemSelected(index + 1);
  };

  return (
    <Sc.Container yAxis={itemBlockSize}>
      <FlatList
        data={modifiedItem}
        snapToInterval={itemHeight}
        renderItem={({ item, index }: ListRenderItemInfo<Item>) => (
          <Sc.Text isSelected={index === currentItemSelected} yAxis={itemHeight}>
            {String(item)}
          </Sc.Text>
        )}
        showsVerticalScrollIndicator={false}
        style={{ width: "100%" }}
        onMomentumScrollEnd={momentumScrollEnd}
        onScroll={handleItemSelection}
      />
      <Sc.IndicatorWrapper yAxis={itemHeight + 2}>
        <Sc.Indicator yAxis={itemHeight - 8} />
      </Sc.IndicatorWrapper>
    </Sc.Container>
  );
}

export default ScrollPicker;
