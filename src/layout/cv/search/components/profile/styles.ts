import { styled } from 'stitches.config'

export const Container = styled('div', {
  border: '2px solid $border',
  padding: '1rem',
  borderRadius: '$default',
  minWidth: '300px',
  
  '&:hover': {
    borderColor: '$heading'
  }
})