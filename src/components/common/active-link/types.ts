import { LinkProps } from "next/link";
import { ReactNode} from 'react'

export type ActiveLinkProps = LinkProps & {
  children: ReactNode
  exact?: boolean
}