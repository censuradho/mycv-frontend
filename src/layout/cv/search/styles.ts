import { styled } from 'stitches.config'

export const Container = styled('main', {
  marginTop: '4rem',
  marginBottom: '2rem'
})

export const List = styled('ul', {
  listStyleType: 'none',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  gap: '1rem',
  flexWrap: 'wrap'
})

export const Form = styled('form', {
  width: '100%',
  maxWidth: '25rem',
})

export const Header = styled('header', {
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  alignItems: 'center',
  justifyContent: 'center'
})