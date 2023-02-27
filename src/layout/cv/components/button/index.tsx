import { Icon } from '@/components/common'
import { PropsWithChildren } from 'react'
import * as Styles from './styles'
import { ButtonProps } from './types'

export function Button (props: PropsWithChildren<ButtonProps>) {
  const { children, ...otherProps } = props

  return (
    <Styles.Button {...otherProps} type="button">
      <Icon name="add" color="primary"/>
      {children}
    </Styles.Button>
  )
}