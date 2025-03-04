/* eslint-disable @typescript-eslint/no-explicit-any */
import { Control, FieldErrors } from "react-hook-form";
import { TextInputProps } from "react-native";

export interface GenericInputProps extends TextInputProps, StyledInputProps {
  label: string;
  control: Control<any>;
  name: string;
}

export interface StyledInputProps {
  errors: FieldErrors<any>;
  name: string;
  isFocused?: boolean;
}
