import { DatePickerFormProps } from "./types";

import { DatePicker } from "@/components/common";
import { Controller } from "react-hook-form";
import { format } from "@/lib/date-fns";

export function DatePickerForm (props: DatePickerFormProps) {
  const { 
    control,
    name,
    ...otherProps 
  } = props

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <DatePicker
          {...otherProps}
          {...field}
          value={field.value && format(new Date(field.value), String(otherProps?.dateFormat) || 'dd/mm/yyyy')}
        />
      )}
    />

  )
}