import { useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { forwardRef } from 'react'

import { ToolBar } from './components'

import * as Styles from './styles'
import { EditorProps } from './types'

export const Editor = forwardRef<any, EditorProps>((props, ref) => {
  const { 
    onChange, 
    value,
    onBlur,
    onFocus,
    errorMessage,
    label,
    id,
    type = 'html',
    options,
  } = props
  const editor = useEditor({
    extensions: [
      StarterKit.configure(options)
    ],
    content: value || undefined,
    onUpdate({ editor }) {
      const types = {
        html: editor.getHTML(),
        text: editor.getText()
      }

      const value = types[type]
      const parsedValue = value === '<p></p>' ? '' : value
      onChange?.(parsedValue)
    },
    onFocus({ event }) {
      onFocus?.(event)
    },
    onBlur({ event }) {
      onBlur?.(event)
    }
  })

  return (
    <Styles.Container>
      <Styles.Label htmlFor={id}>{label}</Styles.Label>
      <Styles.Content>
        <ToolBar editor={editor} />
        <Styles.Editor 
          ref={ref} 
          id={id} 
          editor={editor}  
        />
      </Styles.Content>
      <Styles.ErrorMessage>{errorMessage}</Styles.ErrorMessage>
    </Styles.Container>
  )
})