import { EditorProps } from "@/components/common/editor/types";
import { Control } from "react-hook-form";

export interface EditorFormProps extends EditorProps {
  control: Control<any, any> | undefined
  name: string
}