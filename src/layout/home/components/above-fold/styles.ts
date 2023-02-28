import { styled } from 'stitches.config'

export const Container = styled('section', {
  paddingTop: '4rem',
  paddingBottom: '2rem',
  display: 'flex',
  alignItems: 'center',
  gap: '3rem',
  flexDirection: 'column',
  overflow: 'hidden',
  '@table-min': {
    flexDirection: 'row',
    height: 'calc(100vh - 60px)',
    overflow: 'unset',
  }
})

export const Content = styled('div', {
  maxWidth: '500px',
  display: 'flex',
  minHeight: '40vh',
  flexDirection: 'column',
  gap: '0.5rem',
  padding: '0 2rem',
  position: 'relative',
  zIndex: 3,
  textAlign: 'center',
  alignItems: 'center',
  '@smartphone-min': {
    minHeight: 'auto',
  },

  '@table-min': {
    textAlign: 'unset',
    alignItems: 'unset',
  }
})


export const BgFigure = styled('figure', {
  position: 'absolute',
  zIndex: -1,
  top: '-100%',
  left: '50%',
  width: '600px',
  height: '600px',
  img: {
    objectFit: 'contain'
  },

  '@table-min': {
    left: '-100%',
  }
})

export const FigureView = styled('div', {
  width: '100%',

  '@table-min': {
    position: 'absolute',
    height: '70vh',
    display: 'flex',
    alignItems: 'center',
  },
  '@laptops-min': {
    position: 'absolute',
    right: 0,
    zIndex: 1
  }
})

export const Figure = styled('figure', {
  width: '100%',
  height: '300px',
  position: 'relative',

  img: {
    objectFit: 'cover',
  },

  '@smartphone-min': {
    height: '500px',
  },

  '@table-min': {
    width: '50%',
    position: 'absolute',
    right: 0,
    height: '600px',
  }
})
