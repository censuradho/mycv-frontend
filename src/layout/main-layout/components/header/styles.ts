import { styled, keyframes  } from 'stitches.config'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export const Container = styled('header', {
  height: '3.75rem',
  width: '100%',
  borderBottom: '1px solid $border',
  backdropFilter: 'blur(5px)',
  top: 0,
  position: 'sticky',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 1rem'
})

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

export const Content = styled(DropdownMenu.Content, {
  minWidth: 220,
  backgroundColor: '$background',
  borderRadius: '$default',
  padding: 5,
  boxShadow:
    '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
  animationDuration: '400ms',
  animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
  willChange: 'transform, opacity',
  '&[data-state="open"]': {
    '&[data-side="top"]': { animationName: slideDownAndFade },
    '&[data-side="right"]': { animationName: slideLeftAndFade },
    '&[data-side="bottom"]': { animationName: slideUpAndFade },
    '&[data-side="left"]': { animationName: slideRightAndFade },
  },
});

export const Item = styled(DropdownMenu.Item, {
  all: 'unset',
  fontSize: 13,
  lineHeight: 1,
  display: 'flex',
  alignItems: 'center',
  height: 25,
  padding: '6px 24px',
  position: 'relative',
  userSelect: 'none',
  color: '$text',
  cursor: 'pointer',
  fontWeight: 600,

  '&:hover, &:focus': {
    color: '$primary'
  },
  '&[data-disabled]': {
    // color: mauve.mauve8,
    pointerEvents: 'none',
  },

  '&[data-highlighted]': {
    // backgroundColor: violet.violet9,
    // color: violet.violet1,
  },
});


export const Trigger = styled(DropdownMenu.Trigger, {
  outline: 'none',
  border: '2px solid transparent',
  borderRadius: '50%',

  '&:focus, &:hover': {
    borderColor: '$ancesst0'
  }
})

export const {
  Root,
  Portal
} = DropdownMenu