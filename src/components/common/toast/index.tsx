import * as Styles from './styles'
import { ToastProps } from './types'

export function Toast (props: ToastProps) {
  const { 
    onOpenChange,
    open,
    message
  } = props


  return (
    <Styles.Provider>
      <Styles.Root
        duration={3000}
        open={open} 
        onOpenChange={onOpenChange}
      >
        <Styles.Title>{message?.title}</Styles.Title>
        <Styles.Description>{message?.description}</Styles.Description>
      </Styles.Root>
      <Styles.Viewport />
    </Styles.Provider>
  )
}