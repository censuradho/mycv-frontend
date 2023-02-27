import { Input } from "@/components/common"
import { InputFormProps } from "./types"

export function InputForm (props: InputFormProps) {
  const { register, ...otherProps } = props

  return (
    <Input 
      {...register}
      {...otherProps}
    />
  )
}