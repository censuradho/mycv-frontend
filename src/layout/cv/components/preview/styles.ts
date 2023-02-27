import { styled, keyframes } from 'stitches.config'
import * as Dialog from '@radix-ui/react-dialog';

export const Container = styled('div', {})


const contentShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});



export const Overlay = styled(Dialog.Overlay, {
  position: 'fixed',
  inset: 0,
});


export const Content = styled(Dialog.Content, {
  backgroundColor: '$background',
  position: 'fixed',
  top: '0',
  left: '0',
  width: '100%',
  minHeight: '100vh',
  animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  '&:focus': { outline: 'none' },
  display: 'flex',
  flexDirection: 'column',
});

export const Header = styled('header', {
  background: '$foreground',
  padding: '1rem',
  display: 'flex'
})

export const Trigger = styled(Dialog.Trigger, {
  width: '3.75rem',
  height: '3.75rem',
  borderRadius: '50%',
  background: '$primary',
  position: 'fixed',
  bottom: '1rem',
  right: '1rem'
})

export const CanvasView = styled('div', {
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
})

export const Canvas = styled('canvas', {
})

export const {
  Root,
  Portal,
  Close
} = Dialog
