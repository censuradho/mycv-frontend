import { InputHTMLAttributes } from "react";

type RootInputProps = Pick<InputHTMLAttributes<HTMLInputElement>,
  | 'onFocus'
  | 'onBlur'
  | 'disabled'
  | 'id'
>
type FileTypes = 'image/apng'
  | 'image/bmp'
  | 'image/gif'
  | 'image/jpeg'
  | 'image/pjpeg'
  | 'image/png'
  | 'image/svg+xml'
  | 'image/tiff'
  | 'image/webp'
  | 'image/x-icon'

export interface InputFileProps extends RootInputProps {
  accept: FileTypes[]
  loading?: boolean
  onChange?: (file: File | null) => void
}