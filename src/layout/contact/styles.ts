import { styled } from 'stitches.config'

export const Container = styled('main', {
  minHeight: 'calc(100vh - 60px)',
  width: '100%',
  padding: '7rem 2rem'
})

export const Form = styled('form', {
  width: '100%',
  padding: '3rem 0',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem'
})