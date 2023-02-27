import  { ReactDatePickerProps } from "react-datepicker";

export interface DatePickerProps extends ReactDatePickerProps {
  fullWidth?: boolean
  label?: string
  errorMessage?: string
}