import { ChangeEvent } from "react";

export interface MarkDownEditorProps {
  onChange?: (data: { text: string; html: string }, event?: ChangeEvent<HTMLTextAreaElement> | undefined) => void | undefined
  label?: string
  errorMessage?: string
}