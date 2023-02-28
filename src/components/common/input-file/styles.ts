import { styled } from 'stitches.config'

export const Input = styled('input', {
  '&::-webkit-file-upload-button': {
    visibility: 'hidden'
  },
  visibility: 'hidden',
  width: 1,
  height: 1,
  pointerEvents: 'none'
})

export const Button = styled('button', {
  width: '60px',
  height: '60px',
  background: '$foreground',
  borderRadius: '$default',
})

export const Label = styled('label', {
  color: '$heading',
  cursor: 'pointer',
  fontWeight: 500,
  fontSize: 'xsm'
})

export const ImageView = styled('figure', {
  position: 'relative',
  img: {
    borderRadius: '$default',
    objectFit: 'cover'
  },

  variants: {
    loading: {
      true: {
        '&::before': {
          content: '',
          display: 'block',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '3.75rem',
          height: '3.75rem',
          backdropFilter: 'blur(2px)'
        }
      }
    }
  }
})

export const Container = styled('div', {
  '&:hover, &:focus': {
    [`${Label}`]: {
      color: '$primary'
    },
    [`${Button}`]: {
      background: '$primaryLighter',
      path: {
        fill: '$primary'
      }
    }
  },
})