import { UseFormRegisterReturn  } from "react-hook-form/dist/types";
import { InputProps } from '@/components/common/input/types'

export interface InputFormProps extends InputProps {
  register: UseFormRegisterReturn 
}