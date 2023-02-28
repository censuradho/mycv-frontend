import { styled } from 'stitches.config'

export const Container = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '0 2rem',
  margin: '7rem 0',
  gap: '4rem',

  '@table-min': {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
})

export const Figure = styled('figure', {
  width: '18.6875rem',
  height: '28.25rem',
  position: 'relative',
  img: {
    objectFit: 'contain',
    borderRadius: '$default'
  }
})

export const Block = styled('div', {
  background: '$primaryLight',
  padding: '1rem',
  width: '299px',
  height: '329px',
  borderRadius: '$default',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1.4rem',
  position: 'relative',
  strong: {
    textTransform: 'uppercase'
  },
  
})

export const BlockTitle = styled('strong', {
  fontSize: '33px',
  fontWeight: 800,
  color: '#fff',
})

export const Blocks = styled ('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  gap: '2rem',

  '@table-min': {
    justifyContent: 'flex-end',
  },
  [`${Block}:nth-child(2)`]: {
    order: 1,

  },
})