import { Extension, Mark, Node } from "@tiptap/react"
import { StarterKitOptions } from "@tiptap/starter-kit"

type ChangeReturnType = 'text' | 'html'

export type Extensions = Record<string, Extension | Node | Mark>
export interface EditorProps {
  onChange?: (value: string) => void
  value?: string
  type?: ChangeReturnType
  onFocus?: (event: FocusEvent) => void
  onBlur?: (event: FocusEvent) => void
  errorMessage?: string
  label?: string
  id?: string
  options?: Partial<StarterKitOptions>
}