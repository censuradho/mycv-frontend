import { DatePickerFormProps } from "./types";

import { DatePicker } from "@/components/common";
import { Controller } from "react-hook-form";

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
        />
      )}
    />

  )
}