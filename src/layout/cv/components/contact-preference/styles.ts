import { styled } from 'stitches.config'
import * as RadioGroup from '@radix-ui/react-radio-group';

export const Container = styled('div', {
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
})


export const Root = styled(RadioGroup.Root, {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '1rem',
  alignItems: 'center'
});

export const Item = styled(RadioGroup.Item, {
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 40,
  height: 40,
  borderRadius: '$default',
  backgroundColor: '$foreground',
  cursor: 'pointer',

  '&[aria-checked="true"]': {
    backgroundColor: '$primaryLighter',

    path: {
      fill: '$primary'
    }
  },
  '&:hover': { 
    opacity: 0.8
  },
  '&:focus': { 
    outline: '2px solid $heading'
  },
});

export const Indicator = styled(RadioGroup.Indicator, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  position: 'relative',
});

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