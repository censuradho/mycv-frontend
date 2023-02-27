import { styled } from 'stitches.config'

export const Anchor = styled('a', {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  transition: '.2s',
  justifyContent: 'center',
  position: 'relative',
  whiteSpace: 'nowrap',
  borderRadius: '3px',

  height: '3.125rem',
  '&:disabled': {
    cursor: 'not-allowed'
  },
  variants: {
    fullWidth: {
      true: {
        width: '100%'
      }
    },
    size: {
      md: {
        paddingRight: '4rem',
        paddingLeft: '4rem',
      }
    },
    variant: {
      primary: {
        background: '$heading',
        padding: '0.7rem 1rem',
        border: '1px solid transparent',

        '&:disabled': {
          background: '$disabled'
        },
        '> *': {
          color: '$background',
          fontWeight: 600
        },
        '&:hover': {
          background: '$ancesst0',
          borderColor: 'white',

          '> *': {
            color: 'white',
          },
        },
      },

      secondary: {
        background: '$primaryLight',
        padding: '0.7rem 1rem',
        fontWeight: 500,
        borderRadius: '$default',
        border: '2px solid transparent',
        
        '&:hover, &:focus': {
          borderColor: '$ancesst0',
        },
        '*': {
          color: '$heading'
        }
      }
    }
  },
  defaultVariants: {
    variant: 'primary'
  }
})
