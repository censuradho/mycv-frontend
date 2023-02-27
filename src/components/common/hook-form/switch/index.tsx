import { Switch } from '@/components/common'

import { Controller } from "react-hook-form";

import { SwitchFormProps } from './types'

export function SwitchForm (props: SwitchFormProps) {
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
        <Switch
          checked={field.value}
          ref={field.ref}
          onCheckedChange={checked => field.onChange(checked)}
          onBlur={field.onBlur}
          {...otherProps}
        />
      )}
    />
  )
}