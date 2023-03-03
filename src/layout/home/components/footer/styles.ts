import { styled } from 'stitches.config'

export const Container = styled('footer', {
  padding: '4rem 2rem',
  background: '$heading',
  backgroundImage: 'url(/white.png)',
  backgroundSize: ' 500px 1000px',
  backgroundPosition: 'left bottom',
  backgroundRepeat: 'no-repeat'
})


export const List = styled('ul', {
  listStyleType: 'none',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.2rem',

  li: {
    a: {
      color: '$ancesst8',
      fontWeight: 400,
      outline: 'none',

      '&:focus, &:hover': {
        color: '$primary',
      }
    }
  }
})