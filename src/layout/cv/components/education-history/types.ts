import { CreateCurriculum } from "@/services/api/curriculum/types"
import { Control, UseFormRegister } from "react-hook-form"

export interface EducationHistoryProps {
  register: UseFormRegister<any>
  errors?: any
  control: Control<any, any>
  data?: CreateCurriculum['educations']
  onRemove?: (id: string) => void
}