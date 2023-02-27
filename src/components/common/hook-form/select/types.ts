import { Control } from "react-hook-form"

import { SelectProps } from "@/components/common/select/types"

export interface SelectFormProps extends SelectProps {
  control: Control<any, any> | undefined
  name: string
}