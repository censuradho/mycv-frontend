import { styled } from 'stitches.config'

export const Container = styled('main', {

  '@table-min': {
    display: 'flex',
    height: '100vh'
  }
})

export const Form = styled('form', {
  width: '100%',
  padding: '2rem',
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
  flexDirection: 'column',
  border: '1px solid $border',
  borderRadius: '$default',
  
  '@table-min': {
    maxWidth: '500px',

  }
})

export const FormView = styled('section', {
  minHeight: '60vh',

  '@table-min': {
    display: 'flex',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  }
})
