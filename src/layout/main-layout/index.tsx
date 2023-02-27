import { PropsWithChildren } from 'react'
import { Header } from './components'
import * as Styles from './styles'

export function MainLayout ({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}