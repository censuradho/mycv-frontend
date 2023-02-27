import { DatePickerProps } from "@/components/common/date-picker/types";
import { Control, FieldValues } from "react-hook-form";

export interface DatePickerFormProps extends Pick<DatePickerProps,
  | 'label'
  | 'id'
  | 'fullWidth'
  | 'showMonthYearPicker'
  | 'dateFormat'
  | 'errorMessage'
  | 'disabled'
> {
  control: Control<FieldValues, any> | undefined
  name: string
  
}