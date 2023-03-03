import { FORM_ERROR_MESSAGES } from '@/constants/messages'
import * as y from 'yup'

export const contactValidationSchema = y.object({
  name: y.string().required(FORM_ERROR_MESSAGES.required),
  message: y.string().required(FORM_ERROR_MESSAGES.required),
  subject: y.string().required(FORM_ERROR_MESSAGES.required),
  email: y.string().email().required(FORM_ERROR_MESSAGES.required),
})