import { styled } from 'stitches.config'

export const Container = styled('div', {
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  
  textarea: {
    backgroundColor: '$foreground !important',
  },
  section: {
    border: 'none !important'
  },
  '.rc-md-navigation, .rc-md-editor': {
    border: 'none !important'
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
