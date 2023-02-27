import { Controller } from "react-hook-form";
import { Select } from "@/components/common";
import { SelectFormProps } from "./types";

export function SelectForm (props: SelectFormProps) {
  const {
    control,
    name,
    onValueChange,
    ...otherProps
  } = props

  return (
    <Controller 
      control={control}
      name={name}
      render={({ field }) => (
        <Select
          ref={field.ref}
          value={field.value}
          onBlur={field.onBlur}
          onValueChange={value => {
            field.onChange(value)
            onValueChange?.(value)
          }}
          {...otherProps}
        />
      )}
    />
  )
}