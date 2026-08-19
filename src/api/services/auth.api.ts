import { apiClient } from '../client'
import { API_ENDPOINTS } from '../config'
import type { AuthResponse, LoginCredentials, User } from '@/types/auth.types'
import type { ApiResponse } from '@/types/api.types'

export const authApi = {
  login: async (credentials: LoginCredentials): Promise<ApiResponse<AuthResponse>> => {
    return apiClient.post<AuthResponse>(API_ENDPOINTS.auth.login, credentials)
  },

  logout: async (): Promise<ApiResponse<{ message: string }>> => {
    return apiClient.post<{ message: string }>(API_ENDPOINTS.auth.logout)
  },

  getCurrentUser: async (): Promise<ApiResponse<User>> => {
    return apiClient.get<User>(API_ENDPOINTS.auth.me)
  },

  refreshToken: async (refreshToken: string): Promise<ApiResponse<AuthResponse>> => {
    return apiClient.post<AuthResponse>(API_ENDPOINTS.auth.refreshToken, { refreshToken })
  },
}
