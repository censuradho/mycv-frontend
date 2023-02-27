import { CreateCurriculum } from "@/services/api/curriculum/types"
import { Control, UseFormRegister } from "react-hook-form"

export interface EmploymentHistoryProps {
  register: UseFormRegister<any>
  errors?: any
  control: Control<any, any>
  experiences?: CreateCurriculum['experiences']
  onRemove?: (id: string) => void
}