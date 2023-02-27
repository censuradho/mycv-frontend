import { SwitchProps as RadixSwitchProps, PrimitiveButtonProps } from '@radix-ui/react-switch'

export interface SwitchProps extends Pick<RadixSwitchProps,
  'value'
  | 'defaultChecked'
  | 'checked'
  | 'onCheckedChange'
  | 'disabled'
>, Pick<PrimitiveButtonProps, 'onBlur'> {
  label?: string
  errorMessage?: string
  id?: string
}