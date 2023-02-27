import { CreateCurriculum } from "@/services/api/curriculum/types"
import { Control, UseFormRegister } from "react-hook-form"

export interface SkillsProps {
  register: UseFormRegister<any>
  errors?: any
  control: Control<any, any>
  data?: CreateCurriculum['skills']
  onRemove?: (id: string) => void
}