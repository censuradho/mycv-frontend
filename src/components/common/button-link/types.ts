
import { VariantProps } from '@stitches/react'
import {
  AnchorHTMLAttributes, ComponentProps, ReactNode
} from 'react'
import { Icon } from '../icon';
import { Anchor } from './styles'

type RootAnchorProps = Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'target' | 'href'>;

export interface ButtonLinkProps
  extends VariantProps<typeof Anchor>,
    RootAnchorProps {
  children: ReactNode;
  icon?: ComponentProps<typeof Icon>;
}