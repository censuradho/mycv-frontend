import { styled } from 'stitches.config'

export const Container = styled('div', {
  background: '$primary',
  borderRadius: '$default',
  height: '25.8125rem',
  margin: '4rem 0',
  backgroundImage: 'url(/white.png)',
  backgroundPosition: 'top left',
  padding: '1rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: '3rem'
})

export const Form = styled('form', {
  width: '100%',
  maxWidth: '31.25rem',
})