import { styled } from 'stitches.config'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  alignItems: 'center'
})

export const CurrentPageInput = styled('input', {
  border: 'none',
  outline: 'none',
  width: '5rem',
  padding: 0,
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
  color: '$heading',
  fontWeight: 500,
  background: '$foreground',
  borderRadius: '$default',
  '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
    '-webkit-appearance': 'none',
    margin: 0
  }
})

export const Bullet = styled('button', {
  fontWeight: 500,
  color: '$heading',
  width: '30px',
  height: '30px',
  background: '$ancesst6',
  borderRadius: '50%',
  border: '1px solid transparent',
  outline: 'none',
  
  '&:hover, &:focus': {
    borderColor: '$ancesst0',
  },

  variants: {
    active: {
      true: {
        background: '$primary',
      }
    }
  }
})
