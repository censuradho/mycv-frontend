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
      }
    }
  },
  defaultVariants: {
    variant: 'primary'
  }
})

export const LoaderContainer = styled('div', {

})