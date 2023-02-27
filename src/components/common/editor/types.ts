export interface EditorProps {
  onChange?: (value: string) => void
  value?: string
  onFocus?: (event: FocusEvent) => void
  onBlur?: (event: FocusEvent) => void
  errorMessage?: string
  label?: string
  id?: string
}