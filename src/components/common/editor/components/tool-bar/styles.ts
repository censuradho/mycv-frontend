import { styled } from 'stitches.config'

export const Container = styled('header', {
  background: '$foreground',
  padding: '1rem',
})

export const List = styled('ul', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  listStyleType: 'none'
})

export const Button = styled('button', {

  '&:hover, &:focus': {
    opacity: 0.8,
    path: {
      fill: '$primary',
    }
  },

  variants: {
    active: {
      true: {
        path: {
          fill: '$primary',
        }
      }
    }
  }
})