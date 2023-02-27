import { AutoCompleteProps } from "@/components/common/auto-complete/types";
import { Control } from "react-hook-form";

export interface AutoCompleteFormProps extends Pick<AutoCompleteProps,
  'onChange'  
  | 'label'
  | 'items'
  | 'fullWidth'
  |'errorMessage'
  | 'value'
  | 'onSelect'
> {
  control: Control<any, any> | undefined
  name: string
  keyName?: 'label' | 'value'
}