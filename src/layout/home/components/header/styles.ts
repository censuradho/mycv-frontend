import { styled } from 'stitches.config'

export const Container = styled('header', {
  height: '3.75rem',
  width: '100%',
  borderBottom: '1px solid $border',
  backdropFilter: 'blur(5px)',
  position: 'sticky',
  top: 0,
  zIndex: 10,
  display: 'flex',
  alignItems: 'center',
  padding: '0 2rem'
})