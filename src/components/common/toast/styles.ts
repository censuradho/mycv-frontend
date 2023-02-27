import { keyframes, styled } from 'stitches.config'
import * as Toast from '@radix-ui/react-toast';

export const Viewport = styled(Toast.Viewport, {
  position: 'fixed',
  top: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: '1rem',
  gap: 10,
  width: 390,
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none',
});

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
});

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${16}px))` },
  to: { transform: 'translateX(0)' },
});

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + ${16}px))` },
});


export const Root = styled(Toast.Root, {
  backgroundColor: '$tertiary',
  padding: '1rem',
  display: 'grid',
  gridTemplateAreas: '"title action" "description action"',
  gridTemplateColumns: 'auto max-content',
  columnGap: 15,
  alignItems: 'center',

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`,
  },
  '&[data-swipe="move"]': {
    transform: 'translateX(var(--radix-toast-swipe-move-x))',
  },
  '&[data-swipe="cancel"]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },
  '&[data-swipe="end"]': {
    animation: `${swipeOut} 100ms ease-out`,
  },
});


export const Title = styled(Toast.Title, {
  gridArea: 'title',
  marginBottom: 5,
  fontWeight: 500,
  color: '$heading',
  fontSize: '$md',
});

export const Description = styled(Toast.Description, {
  gridArea: 'description',
  margin: 0,
  color: '$heading',
  fontSize: '$sm',
  lineHeight: 1.3,
});

export const Action = styled(Toast.Action, {
  gridArea: 'action',
});

export const { 
  Provider,
  Close
} = Toast

export const Container = styled('div', {})