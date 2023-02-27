import { InputForm } from "@/components/common/hook-form";
import { useState } from "react";
import { InputPasswordProps } from "./types";

export function InputPassword (props: InputPasswordProps) {
  const [isShow, setIsShow] = useState(false)

  return (
    <InputForm
      type={isShow ? 'text' : 'password'}
      onLeftIconClick={() => setIsShow(prevState => !prevState)}
      leftIcon={{
        name: isShow ? 'eyeClose' : 'eye',
      }}
      {...props} 
    />
  )
}