import { Controller } from "react-hook-form";
import { AutoComplete } from "@/components/common/auto-complete";
import { AutoCompleteFormProps } from "./types";

export function AutoCompleteForm (props: AutoCompleteFormProps) {
  const {
    control,
    keyName,
    onSelect,
    onChange,
    ...otherProps
  } = props

  return (
    <Controller
      control={control}
      name={otherProps.name}
      render={({ field }) => {

        return (
          <AutoComplete
            getItemValue={(value: any) => keyName ? value[keyName] : value}
            onSelect={(value, item) => {
              field.onChange(value)
              onSelect?.(value, item)
            }}
            onChange={(event, value) => {
              field.onChange(value)
              onChange?.(event, value)
            }}
            {...otherProps}
          />
        )
      }}
    />
  )

}