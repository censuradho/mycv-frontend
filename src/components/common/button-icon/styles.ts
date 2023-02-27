import { styled } from "stitches.config";

export const Button = styled("button", {
  width: '2.1875rem',
  height: '2.1875rem',
  border: 'transparent 1px solid',
  outline: 'none',
  borderRadius: '50%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  
  '&:focus': {
    borderColor: '$heading',
  }
});
