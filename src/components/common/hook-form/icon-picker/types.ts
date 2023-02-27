import { IconPickerProps } from "@/components/common/icon-picker/types";
import { Control, FieldValues } from "react-hook-form";

export interface IconPickerForm extends Pick<IconPickerProps,
  | 'label'
  |  'errorMessage'
> {
  control: Control<FieldValues, any> | undefined
  name: string
}