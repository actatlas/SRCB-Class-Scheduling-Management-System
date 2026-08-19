export interface ApiResponse<T = unknown> {
  success: boolean
  message?: string
  data: T
  meta?: PaginationMeta
  timestamp?: string
}

export interface ApiErrorResponse {
  success: false
  message: string
  errors?: Record<string, string[]>
  statusCode?: number
  timestamp?: string
}

export interface PaginationMeta {
  page: number
  limit: number
  total: number
  totalPages: number
  hasNextPage: boolean
  hasPreviousPage: boolean
}

export interface QueryParams {
  page?: number
  limit?: number
  search?: string
  sortBy?: string
  sortOrder?: 'asc' | 'desc'
  [key: string]: unknown
}
