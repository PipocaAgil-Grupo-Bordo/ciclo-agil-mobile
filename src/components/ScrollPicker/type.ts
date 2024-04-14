export interface ScrollPickerProps<Item> {
  items: Item[];
  onIndexChange: (index: number) => void;
}

export interface YAxisStyle {
  yAxis: number;
}

export interface isSelectedTextStyle extends YAxisStyle {
  isSelected: boolean;
}
