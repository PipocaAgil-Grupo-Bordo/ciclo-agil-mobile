import { GenericButtonProps } from "@components/GenericButton/type";

export interface ButtonsProps {
  isLoading: boolean;
  nextWithData: () => void;
  nextWithoutData: () => void;
}
