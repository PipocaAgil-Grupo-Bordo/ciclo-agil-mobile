export interface ScrollPickerProps<Item> {
  items: Item[];
  onIndexChange: (index: number) => void;
}

export interface yAxisStyle {
  yAxis: number
}