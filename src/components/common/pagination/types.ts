export interface PaginationProps {
  totalPages: number
  currentPage: number
  onPageChange: (index: number) => void

}