import { styled } from 'stitches.config'

export const Container = styled('main', {
  minHeight: 'calc(100vh - 60px)',
  margin: '4rem 0',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  padding: '0 2rem',
  
  hr: {
    height: '1px',
    width: '100%',
    background: '$foreground'
  }
})

export const Section = styled('section', {
  margin: '3.7rem 0',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem'
})

export const Title = styled('h2', {
  fontSize: '$md',
})