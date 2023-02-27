import { InputFormProps } from '@/components/common/hook-form/input/types'

export interface InputPasswordProps extends Omit<InputFormProps, 
  'type'
  | 'leftIcon'
  | 'onLeftIconClick'
> {

}