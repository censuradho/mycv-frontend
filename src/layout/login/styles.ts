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
export const InfoView = styled('div', {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '2rem',
})

export const Figure = styled('figure', {
  width: '300px',
  height: '400px',
  position: 'relative',

  img: {
    objectFit: 'contain',
    boxShadow: '-12px 14px 43px 0px #00000008',
  },

  '@table-min': {
    width: '400px',
    height: '500px',
  }
})