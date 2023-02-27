import { SelectProps as RadixSelectProps, SelectTriggerProps } from '@radix-ui/react-select'
import { VariantProps } from '@stitches/react'

import { Container } from './styles'

interface Option {
  label: string
  value: string | number | false
}

export interface SelectProps extends 
  Pick<RadixSelectProps,
    'autoComplete'
    | 'required'
    | 'value'
    | 'onValueChange'
    | 'defaultValue'
    | 'name'
  >,
  VariantProps<typeof Container>,
  Pick<SelectTriggerProps, 
    'onBlur' 
    | 'onFocus'> {
    label?: string
    id?: string,
    options: Option[]
    placeholder?: string
    errorMessage?: string
}