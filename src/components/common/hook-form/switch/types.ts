import { SwitchProps } from "@/components/common/switch/types";
import { Control, FieldValues } from "react-hook-form";

export interface SwitchFormProps extends Pick<SwitchProps,
  | 'label'
  | 'id'
  |  'errorMessage'
> {
  control: Control<FieldValues, any> | undefined
  name: string
}