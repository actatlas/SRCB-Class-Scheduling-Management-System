import { apiClient } from '../client'
import { API_ENDPOINTS } from '../config'
import type { Department } from '@/types/schedule.types'
import type { ApiResponse, QueryParams } from '@/types/api.types'

export const departmentApi = {
  getAll: async (params?: QueryParams): Promise<ApiResponse<Department[]>> => {
    return apiClient.get<Department[]>(API_ENDPOINTS.departments.base, params)
  },

  getById: async (id: string): Promise<ApiResponse<Department>> => {
    return apiClient.get<Department>(API_ENDPOINTS.departments.byId(id))
  },

  create: async (deptData: Partial<Department>): Promise<ApiResponse<Department>> => {
    return apiClient.post<Department>(API_ENDPOINTS.departments.base, deptData)
  },

  update: async (id: string, deptData: Partial<Department>): Promise<ApiResponse<Department>> => {
    return apiClient.put<Department>(API_ENDPOINTS.departments.byId(id), deptData)
  },

  delete: async (id: string): Promise<ApiResponse<{ message: string }>> => {
    return apiClient.delete<{ message: string }>(API_ENDPOINTS.departments.byId(id))
  },
}
