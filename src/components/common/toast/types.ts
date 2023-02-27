import { ToastProps as RadixToastProps } from "@radix-ui/react-toast"

type RootRadixToastProps = Pick<RadixToastProps, 'onOpenChange' | 'open'>

export interface ToastMessage {
  title: string
  description?: string
}

export interface ToastProps extends RootRadixToastProps {
  message?: ToastMessage | null
}