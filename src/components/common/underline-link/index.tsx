import { UnderlineLinkProps } from './types'
import * as Styles from './styles'
import { PropsWithChildren } from 'react'
import Link from 'next/link'

export function UnderlineLink (props: PropsWithChildren<UnderlineLinkProps>) {
  const {
    children,
    type = 'next-link',
    href,
    target
  } = props

  const renderLink = () => {
    if (type === 'native') return <a href={href} target={target}>{children}</a>
    return <Link href={href}>{children}</Link>
  }

  return (
    <Styles.Container>
      {renderLink()}
    </Styles.Container>
  )
}