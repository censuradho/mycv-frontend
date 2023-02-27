import { styled } from 'stitches.config'
import * as Switch from '@radix-ui/react-switch';

export const Container = styled('div', {
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
})

export const Root = styled(Switch.Root, {
  all: 'unset',
  width: 42,
  height: 25,
  backgroundColor: '$foreground',
  cursor: 'pointer',
  borderRadius: '9999px',
  position: 'relative',
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  '&:focus': { boxShadow: `0 0 0 2px black` },
  '&[data-state="checked"]': { backgroundColor: '$primary' },
});

export const Thumb = styled(Switch.Thumb, {
  display: 'block',
  width: 21,
  height: 21,
  backgroundColor: '$background',
  borderRadius: '9999px',
  transition: 'transform 100ms',
  transform: 'translateX(2px)',
  willChange: 'transform',
  '&[data-state="checked"]': { transform: 'translateX(19px)' },
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
