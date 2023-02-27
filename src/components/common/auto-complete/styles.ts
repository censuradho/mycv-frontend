import { styled } from 'stitches.config'

export const Container = styled('div', {
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  width: '100%',

  input: {
    border: 'none',
    borderBottom: '2px solid transparent',
    background: '$foreground',
    width: "100%",
    height: "3rem",
    outline: "none",
    padding: "0 1rem",
    color: "$text",
    fontWeight: 500,
  
    "&::placeholder": {
      color: "$ancesst6",
      fontSize: "0.8rem",
      fontWeight: "400",
    },
  
    "&:focus": {
      borderColor: "$primary",
    },
  },

  'input + dev': {
    boxShadow:
    '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
  }
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


export const Item = styled('div', {
  background: '$background',
  padding: "0 1rem",
  height: "3rem",
  display: 'flex',
  alignItems: 'center',
  fontWeight: 600,
  cursor: 'pointer',

  '&:hover': {
    background: '$primaryLighter',
    color: '$primary'
  },
  variants: {
    active: {
      true: {

      }
    }
  }
})
