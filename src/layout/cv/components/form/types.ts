import { CreateCurriculum } from "@/services/api/curriculum/types";

export interface CurriculumFormProps {
  defaultValue?: CreateCurriculum | null
  onRefresh?: () => Promise<void>
}