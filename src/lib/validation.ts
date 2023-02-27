import { FORM_ERROR_MESSAGES } from '@/constants/messages'
import * as y from 'yup'

export const signInWithEmailPasswordValidationSchema = y.object({
  email: y.string().required(FORM_ERROR_MESSAGES.required),
  password: y.string().required(FORM_ERROR_MESSAGES.required),
})