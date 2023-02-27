import { styled, keyframes } from 'stitches.config'
import * as Accordion from '@radix-ui/react-accordion';

export const Container = styled('div', {})

const slideDown = keyframes({
  from: { height: 0 },
  to: { height: 'var(--radix-accordion-content-height)' },
});

const slideUp = keyframes({
  from: { height: 'var(--radix-accordion-content-height)' },
  to: { height: 0 },
});

export const Root = styled(Accordion.Root, {
  borderRadius: 6,
  width: '100%',
  backgroundColor: '$background',
  border: '1px solid $border',
});

export const Item = styled(Accordion.Item, {
  overflow: 'hidden',
  marginTop: 1,

  '&:first-child': {
    marginTop: 0,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },

  '&:last-child': {
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },

  '&:focus-within': {
    position: 'relative',
    zIndex: 1,
  },
});

export const Header = styled(Accordion.Header, {
  all: 'unset',
  display: 'flex',
  cursor: 'pointer',
  alignItems: 'center',
  padding: '0 20px',
});

export const IconView = styled('div', {
  transition: 'transform 300ms cubic-bezier(0.87, 0, 0.13, 1)',
  '[data-state=open] &': { transform: 'rotate(180deg)' },
});

export const Trigger = styled(Accordion.Trigger, {
  all: 'unset',
  fontFamily: 'inherit',
  backgroundColor: 'transparent',
  padding: '0.5rem 0',
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontSize: 15,
  lineHeight: 1,
  color: '$heading',
  fontWeight: 600,

  '&:hover, &:focus': {
    strong: {
      color: '$primary'
    }
  }
});

export const Content = styled(Accordion.Content, {
  overflow: 'hidden',
  fontSize: 15,
  // color: mauve.mauve11,
  // backgroundColor: mauve.mauve2,

  '&[data-state="open"]': {
    animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1)`,
  },
});