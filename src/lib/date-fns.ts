import { 
  format as rootFormat,
  formatDistance as rootFormatDistance 
} from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'

export function format (date: number | Date, format: string) {
  return rootFormat(date, format, {
    locale: ptBr
  })
}

export function formatDistance (date: number | Date, baseDate: number | Date) {
  return rootFormatDistance(date, baseDate, {
    locale: ptBr
  })
}