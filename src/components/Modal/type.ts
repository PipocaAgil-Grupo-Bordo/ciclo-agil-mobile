import { Dispatch, SetStateAction } from "react";

export interface Modalprops {
  title: string;
  textContent: string;
  buttonText: string;
  setReadyToNext: Dispatch<SetStateAction<boolean>>;
}
