import { forwardRef } from 'react'
import { Box } from '../box'
import * as Styles from './styles'
import { SwitchProps } from './types'

export const Switch = forwardRef<any, SwitchProps>((props: SwitchProps, ref) => {
  const {
    errorMessage,
    label,
    id,
    ...otherProps
  } = props

  return (
    <Styles.Container>
      <Box gap={0.5} alignItems="center">
        <Styles.Root id={id} ref={ref} {...otherProps}>
          <Styles.Thumb />
        </Styles.Root>
        <Styles.Label htmlFor={id}>{label}</Styles.Label>
      </Box>
      <Styles.ErrorMessage>{errorMessage}</Styles.ErrorMessage>
    </Styles.Container>
  )
}) 