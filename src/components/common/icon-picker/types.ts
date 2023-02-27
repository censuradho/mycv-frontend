import { FocusEvent } from "react"

export interface IconPickerProps {
  label?: string
  value?: string
  errorMessage?: string
  onChange?: (value: string) => void
  onFocus?: (event: FocusEvent<Element, Element>) => void
  onBlur?: (event: FocusEvent) => void
}