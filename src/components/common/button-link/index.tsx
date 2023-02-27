import { forwardRef } from "react";
import { Icon } from "../icon";
import * as Styles from './styles'

import { ButtonLinkProps } from './types'

export const ButtonLink = forwardRef<any, ButtonLinkProps>((props, ref) => {
  const { children, icon, ...otherProps } = props

  return (
    <Styles.Anchor ref={ref} {...otherProps}>
      {icon && <Icon {...icon} />}
      {children}
    </Styles.Anchor>
  )
})