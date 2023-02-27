import { FORM_ERROR_MESSAGES } from '@/constants/messages'
import * as y from 'yup'

const experienceSchemaValidation = y.object({
  employer: y.string().required(FORM_ERROR_MESSAGES.required),
  title: y.string().required(FORM_ERROR_MESSAGES.required),
  description: y.string().required(FORM_ERROR_MESSAGES.required),
  is_main: y.boolean(),
  initial_date: y
    .date()
    .required(FORM_ERROR_MESSAGES.required)
    .typeError(FORM_ERROR_MESSAGES.invalid),
  final_date: y
    .date()
    .required(FORM_ERROR_MESSAGES.required)
    .typeError(FORM_ERROR_MESSAGES.invalid),
})

const educationValidationSchema = y.object({
  title: y.string().required(FORM_ERROR_MESSAGES.required),
  level: y.string().required(FORM_ERROR_MESSAGES.required),
  institution_name: y.string().required(FORM_ERROR_MESSAGES.required),
  situation: y.string().required(FORM_ERROR_MESSAGES.required),
  initial_date: y
    .date()
    .required(FORM_ERROR_MESSAGES.required)
    .typeError(FORM_ERROR_MESSAGES.invalid),
  final_date: y
    .date()
    .required(FORM_ERROR_MESSAGES.required)
    .typeError(FORM_ERROR_MESSAGES.invalid),
  is_main: y.boolean(),
})

const skillValidationSchema = y.object({
  name: y.string().required(FORM_ERROR_MESSAGES.required),
})

const portfolioValidationSchema = y.object({
  icon: y.string(),
  link: y.string().url().required(FORM_ERROR_MESSAGES.required),
  name: y.string().required(FORM_ERROR_MESSAGES.required)
})

export const curriculumValidationSchema = y.object({
  title: y.string().required(FORM_ERROR_MESSAGES.required),
  presentation: y.string().required(FORM_ERROR_MESSAGES.required),
  phone: y.string().required(FORM_ERROR_MESSAGES.required),
  public_email: y.string().email(FORM_ERROR_MESSAGES.invalid).required(FORM_ERROR_MESSAGES.required),
  contact_preference: y.string().required(FORM_ERROR_MESSAGES.required),
  first_name: y.string().required(FORM_ERROR_MESSAGES.required),
  last_name: y.string().required(FORM_ERROR_MESSAGES.required),
  is_pcd: y.boolean(),
  experiences: y.array().of(experienceSchemaValidation).nullable(),
  educations: y.array().of(educationValidationSchema).nullable(),
  skills: y.array().of(skillValidationSchema).nullable(),
  portfolios: y.array().of(portfolioValidationSchema).nullable()
})