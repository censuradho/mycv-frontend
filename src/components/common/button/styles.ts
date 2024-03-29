import { styled } from 'stitches.config'

export const Button = styled('button', {
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
        background: '$primary',
        padding: '0.7rem 1.4rem',
        border: '1px solid transparent',
        textTransform: 'uppercase',
        letterSpacing: '0.05rem',

        '&:disabled': {
          opacity: 0.7
        },
        '> *': {
          color: '$background',
          fontWeight: 600
        },
        '&:hover': {
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
      },

      danger: {
        background: '$error',
        '*': {
          color: '#fff',
        },
        padding: '0.7rem 1.4rem',
        letterSpacing: '0.05rem',
        textTransform: 'uppercase',
        border: '2px solid transparent',

        '&:hover, &:focus': {
          borderColor: '$heading'
        }

      },
      letter: {
        background: 'none',
        height: 'auto',
        fontWeight: 600,
        textTransform: 'uppercase',
        letterSpacing: '0.05rem',
        '> *': {
          color: '$primary'
        }
      },
      highlight: {
        background: '$ancesst6',
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
      },
    }
  },
  defaultVariants: {
    variant: 'primary'
  }
})

export const LoaderContainer = styled('div', {

})