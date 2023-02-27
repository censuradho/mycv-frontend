import { appSettings } from '@/config/appSettings'
import axios from 'axios'

export const ninjaApi = axios.create({
  baseURL: 'https://api.api-ninjas.com/v1',
  headers: {
    'X-Api-Key': appSettings.ninjaApiKey
  },
})