import { Dispatch, SetStateAction } from "react";

export interface Modalprops {
  title: string;
  textContent: string;
  buttonText: string;
  onPress: () => void;
  setReadyToNext: Dispatch<SetStateAction<boolean>>;
}
