import { Props } from 'react-autocomplete'
export interface AutoCompleteProps extends Pick<Props, 
  'items' 
  |'getItemValue' 
  | 'onChange' 
  | 'onSelect'
  | 'selectOnBlur'
  | 'value'
> {
  label?: string
  errorMessage?: string
  id?: string
  fullWidth?: boolean
}