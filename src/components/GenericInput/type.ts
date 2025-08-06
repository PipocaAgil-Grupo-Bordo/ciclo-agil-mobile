/* eslint-disable @typescript-eslint/no-explicit-any */
import { Control, FieldErrors, FieldValues, Path } from "react-hook-form";
import { TextInputProps } from "react-native";

export interface GenericInputProps<T extends FieldValues = FieldValues>
  extends TextInputProps,
    Omit<StyledInputProps<T>, "name"> {
  label: string;
  control: Control<T>;
  name: Path<T>;
}

export interface StyledInputProps<T extends FieldValues = FieldValues> {
  errors: FieldErrors<T>;
  name: string;
  isFocused?: boolean;
}
