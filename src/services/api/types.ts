export interface Meta {
  count: number,
  page: number,
  take: number,
  totalPages: number
}

export interface Pagination<T> {
  data: T[]
  meta: Meta
}

export interface PaginationOptions {
  q?: string
  take?: number
}