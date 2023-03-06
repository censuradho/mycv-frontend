import { styled } from 'stitches.config'

export const Container = styled('main', {})

export const Header = styled('div', {
  background: '$foreground',
  padding: '4rem 2rem',

  '@table-min': {
    minHeight: '18.75rem',
    display: 'flex',
    alignItems: 'center'
  },
})


export const ContentView = styled('section', {
  padding: '3rem 2rem',

  h2: {
    display: 'block',
    marginBottom: '1.5rem',
    lineHeight: '2.5rem'
  },
  h3: {
    display: 'block',
    marginBottom: '1.3rem',
    fontWeight: '500',
    lineHeight: '2rem'
  },
  p: {
    display: 'inline-block',
    lineHeight: '1.9rem',
    margin: '10px 0',
  },
  'ul, ol': {
    margin: '10px 0',

    paddingLeft: '1rem',
    li: {
      paddingBottom: '0.8rem'
    }
  }
})