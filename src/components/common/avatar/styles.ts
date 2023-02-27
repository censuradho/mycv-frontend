import { styled } from 'stitches.config'

export const Container = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '50%',
  background: '$primary',
  strong: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 800,
    lineHeight: 0,
    fontSize: '1vw',
    color: '$heading',
    textTransform: 'uppercase'
  }
})
