import { DialogProps } from '@radix-ui/react-alert-dialog'


export interface DialogAlertProps extends Pick<DialogProps, 'onOpenChange' | 'open'> {
  title?: string
  description?: string
  onConfirm?: () => void
  onCancel?: () => void
  loading?: boolean
}