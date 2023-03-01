import * as y from 'yup'

export const requestNewPasswordSchemaValidation = y.object({
  password: y.string().min(8),
})

