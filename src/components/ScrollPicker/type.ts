export interface ScrollPickerProps<Item> {
  items: Item[];
  onIndexChange: (index: number) => void;
}

export interface RenderedContentProps<Item> {
  item: Item;
  index: number;
  currentItemSelected: number;
  itemHeight: number;
}

export interface YAxisStyle {
  yAxis: number;
}

export interface isSelectedTextStyle extends YAxisStyle {
  isSelected: boolean;
}
