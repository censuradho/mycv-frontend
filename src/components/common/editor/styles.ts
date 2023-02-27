import { styled } from 'stitches.config'
import {  EditorContent as TipTapEditorContent } from '@tiptap/react'

export const Container = styled('div', {
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  
  '.ProseMirror': {
    padding: '0 1rem 1rem 1rem',
    borderBottom: '2px solid transparent',
    marginTop: 'auto',
    minHeight: '200px',
    '&:focus': {
      borderBottom: '2px solid $primary',
      outline: 'none'
    }
  }
})

export const Content = styled('div', {
  background: '$foreground',
})

export const Editor = styled(TipTapEditorContent, {
  li: {
    marginLeft: '1.5rem'
  },
})

export const Label = styled("label", {
  cursor: "pointer",
  fontSize: "$xsm",
  color: '$heading',
  fontWeight: 500
});

export const ErrorMessage = styled('span', {
  color: "$error",
  fontSize: '$xsm'
});