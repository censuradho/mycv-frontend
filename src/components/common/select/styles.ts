import { styled } from 'stitches.config'
import * as Select from '@radix-ui/react-select';

export const Container = styled('div', {
  display: "flex",
  flexDirection: "column",
  gap: "0.5rem",
  variants: {
    fullWidth: {
      true: {
        width: '100%'
      }
    }
  }
})


export const Trigger = styled(Select.SelectTrigger, {
  all: 'unset',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderRadius: 4,
  padding: '0 1rem',
  fontSize: 13,
  lineHeight: 1,
  height: '48px',
  gap: 5,
  borderBottom: '2px solid $transparent',
  backgroundColor: '$foreground',
  color: '$heading',
  '&:hover': { 
    borderColor: '$primary',
    color: '$ancesst8'
  },
  '&[data-placeholder]': { color: '$ancesst7' },
});


export const Content = styled(Select.Content, {
  overflow: 'hidden',
  backgroundColor: '$background',
  borderRadius: '$default',
  boxShadow:
    '0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
});

export const Viewport = styled(Select.Viewport, {
  padding: 5,
});

export const Item = styled(Select.Item, {
  fontSize: 13,
  lineHeight: 1,
  color: '$text',
  borderRadius: 3,
  display: 'flex',
  alignItems: 'center',
  height: '2rem',
  cursor: 'pointer',
  padding: '0 35px 0 25px',
  position: 'relative',
  userSelect: 'none',

  '&[data-disabled]': {
    color: '$ancesst6',
    pointerEvents: 'none',
  },

  '&[data-highlighted]': {
    outline: 'none',
    backgroundColor: '$primary',
    '*': {
      color: '#fff',
    }
  },
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

const scrollButtonStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 25,
  backgroundColor: 'white',
  color: '$primary',
  cursor: 'default',
};

export const ScrollUpButton = styled(Select.ScrollUpButton, scrollButtonStyles);

export const ScrollDownButton = styled(Select.ScrollDownButton, scrollButtonStyles);

export const {
  Root,
  Portal,
  Value,
  ItemText
} = Select