import { styled } from 'stitches.config'

export const Container = styled('div', {
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
})

export const Label = styled("label", {
  cursor: "pointer",
  fontSize: "$xsm",
  color: '$heading',
  fontWeight: 500
});


export const ErrorMessage = styled('span', {
  color: "$error",
  fontSize: '$xsm'
});

export const List = styled('ul', {
  background: '$foreground',
  padding: '1rem',
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.5rem',
  listStyleType: 'none',
  maxHeight: '250px',
  overflowY: 'auto'
})

export const Button = styled('button', {
  width: '40px',
  height: '40px',
  borderRadius: '$default',
  
  variants: {
    active: {
      true: {
        background: '$primaryLighter',
      }
    }
  }
})