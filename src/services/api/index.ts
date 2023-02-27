import { appSettings } from '@/config/appSettings'
import axios from 'axios'

export const api = axios.create({
  baseURL: appSettings.backend_url
})
