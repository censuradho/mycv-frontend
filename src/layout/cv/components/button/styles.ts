import { styled } from 'stitches.config'

export const Button = styled('button', {
  color: '$primary',
  display: 'flex',
  justifyContent: 'flex-start',
  height: '40px',
  alignItems: 'center',
  gap: '1rem',
  padding: '0.5rem',
  width: '100%',
  
  '&:hover, &:focus': {
    background: '$primaryLighter'
  }
})