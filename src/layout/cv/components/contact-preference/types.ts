import { IconNames } from "@/components/common/icon/types";
import { Control } from "react-hook-form";

interface Option {
  icon: IconNames
  value: string
  label: string
  id: string
}

export interface ContactPreferenceProps {
  options: Option[]
  name: string
  control: Control<any, any> | undefined
  errorMessage?: string
}