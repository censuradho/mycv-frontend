import { IconPicker, Switch } from '@/components/common'

import { Controller } from "react-hook-form";

import { IconPickerForm } from './types'

export function IconPickerForm (props: IconPickerForm) {
  const {
    control,
    name,
    ...otherProps
  } = props

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <IconPicker
          value={field.value}
          onChange={checked => field.onChange(checked)}
          onBlur={field.onBlur}
          {...otherProps}
        />
      )}
    />
  )
}