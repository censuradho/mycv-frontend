import * as AlertDialog from '@radix-ui/react-alert-dialog';
import { styled, keyframes } from 'stitches.config';

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' },
})

export const Overlay = styled(AlertDialog.Overlay, {
  backgroundColor: '$foregroundActiveOpacity',
  position: 'fixed',
  inset: 0,
  animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  zIndex: 4,
  backdropFilter: 'blur(5px)'
});

export const Content = styled(AlertDialog.Content, {
  backgroundColor: '$background',
  borderRadius: 6,
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '500px',
  maxHeight: '85vh',
  padding: 25,
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  zIndex: 4,
  '&:focus': { outline: 'none' },
})

export const List = styled('ul', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
  listStyleType: 'none'
})

export const Item = styled('li', {
  a: {
    outline: 'none',
    display: 'block',
    padding: '0.5rem',
    border: '1px solid transparent',
    borderRadius: '$default',
    '&:hover': { background: '$foreground' },
    '&:focus': { background:  '$foreground', borderColor: '$foregroundActive' }
  }
})


export const {
  Root,
  Trigger,
  Portal,
  Cancel
} = AlertDialog