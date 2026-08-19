import { apiClient } from '../client'
import { API_ENDPOINTS } from '../config'
import type { User, UserRole } from '@/types/auth.types'
import type { ApiResponse, QueryParams } from '@/types/api.types'

export const userApi = {
  getAll: async (params?: QueryParams): Promise<ApiResponse<User[]>> => {
    return apiClient.get<User[]>(API_ENDPOINTS.users.base, params)
  },

  getById: async (id: string): Promise<ApiResponse<User>> => {
    return apiClient.get<User>(API_ENDPOINTS.users.byId(id))
  },

  getByRole: async (role: UserRole): Promise<ApiResponse<User[]>> => {
    return apiClient.get<User[]>(API_ENDPOINTS.users.byRole(role))
  },

  create: async (userData: Partial<User>): Promise<ApiResponse<User>> => {
    return apiClient.post<User>(API_ENDPOINTS.users.base, userData)
  },

  update: async (id: string, userData: Partial<User>): Promise<ApiResponse<User>> => {
    return apiClient.put<User>(API_ENDPOINTS.users.byId(id), userData)
  },

  delete: async (id: string): Promise<ApiResponse<{ message: string }>> => {
    return apiClient.delete<{ message: string }>(API_ENDPOINTS.users.byId(id))
  },
}
