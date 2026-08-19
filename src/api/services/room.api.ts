import { apiClient } from '../client'
import { API_ENDPOINTS } from '../config'
import type { Room } from '@/types/schedule.types'
import type { ApiResponse, QueryParams } from '@/types/api.types'

export const roomApi = {
  getAll: async (params?: QueryParams): Promise<ApiResponse<Room[]>> => {
    return apiClient.get<Room[]>(API_ENDPOINTS.rooms.base, params)
  },

  getById: async (id: string): Promise<ApiResponse<Room>> => {
    return apiClient.get<Room>(API_ENDPOINTS.rooms.byId(id))
  },

  create: async (roomData: Partial<Room>): Promise<ApiResponse<Room>> => {
    return apiClient.post<Room>(API_ENDPOINTS.rooms.base, roomData)
  },

  update: async (id: string, roomData: Partial<Room>): Promise<ApiResponse<Room>> => {
    return apiClient.put<Room>(API_ENDPOINTS.rooms.byId(id), roomData)
  },

  delete: async (id: string): Promise<ApiResponse<{ message: string }>> => {
    return apiClient.delete<{ message: string }>(API_ENDPOINTS.rooms.byId(id))
  },
}
