import { styled } from 'stitches.config'

export const Container = styled('div', {
  border: '2px solid $border',
  padding: '1rem',
  borderRadius: '$default',
  maxWidth: '300px',
  width: '100%',
  
  '&:hover': {
    borderColor: '$heading'
  }
})