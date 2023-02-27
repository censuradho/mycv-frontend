import { EditorFormProps } from './types'
import { Editor } from '@/components/common'
import { Controller } from 'react-hook-form'

export function EditorForm (props: EditorFormProps) {
  const {
    control,
    name,
    ...otherProps
  } = props

  return (
    <Controller 
      name={name}
      control={control}
      render={({ field }) => (
        <Editor
          {...otherProps}
          {...field}
        />
      )}
    />
  )
}