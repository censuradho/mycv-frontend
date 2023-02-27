import { appSettings } from '@/config/appSettings'
import axios from 'axios'

export const localApi = axios.create({
  baseURL: `${appSettings.siteUrl}/api`
})