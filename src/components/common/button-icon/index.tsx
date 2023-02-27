import { Icon } from '../icon'
import * as Styles from './styles'
import { ButtonIconProps } from './types'

export function ButtonIcon (props: ButtonIconProps) {
  const {
    icon,
    label,
    ...otherProps
  } = props

  return (
    <Styles.Button aria-label={label} {...otherProps}>
      <Icon {...icon}  />
    </Styles.Button>
  )
}