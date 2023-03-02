import { styled } from 'stitches.config'

export const Container = styled('main', {
  marginTop: '4rem',
})

export const List = styled('ul', {
  listStyleType: 'none',
  display: 'flex',
  justifyContent: 'space-between',
  gap: '2rem',
  flexWrap: 'wrap'
})

export const Form = styled('form', {
  width: '100%',
  maxWidth: '25rem'
})