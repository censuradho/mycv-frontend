import { styled } from 'stitches.config'

export const Main = styled('main', {
  width: '100%',
  minHeight: 'calc(100vh - 60px)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: '$background',
})

export const Header = styled('header', {
  width: '100%',
  marginBottom: '3rem',
  display: 'flex',
  justifyContent: 'space-between',
})


export const Section = styled('section', {
  width: '100%',
  padding: '2rem 1rem',

  '@table-min': {
    maxWidth: '70%',
  }
})

export const Form = styled('form', {
  width: '100%',
  maxWidth: '28.125rem',
  padding: '1rem',
  margin: '0 auto',
  gap: '1rem',
  display: 'flex',
  flexDirection: 'column'
})

