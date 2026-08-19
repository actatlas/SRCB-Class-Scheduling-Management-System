import { apiClient } from '../client'
import { API_ENDPOINTS } from '../config'
import type { ScheduleSlot } from '@/types/schedule.types'
import type { ApiResponse, QueryParams } from '@/types/api.types'

export const scheduleApi = {
  getAll: async (params?: QueryParams): Promise<ApiResponse<ScheduleSlot[]>> => {
    return apiClient.get<ScheduleSlot[]>(API_ENDPOINTS.schedules.base, params)
  },

  getById: async (id: string): Promise<ApiResponse<ScheduleSlot>> => {
    return apiClient.get<ScheduleSlot>(API_ENDPOINTS.schedules.byId(id))
  },

  getBySection: async (sectionId: string): Promise<ApiResponse<ScheduleSlot[]>> => {
    return apiClient.get<ScheduleSlot[]>(API_ENDPOINTS.schedules.bySection(sectionId))
  },

  getByInstructor: async (instructorId: string): Promise<ApiResponse<ScheduleSlot[]>> => {
    return apiClient.get<ScheduleSlot[]>(API_ENDPOINTS.schedules.byInstructor(instructorId))
  },

  getByRoom: async (roomId: string): Promise<ApiResponse<ScheduleSlot[]>> => {
    return apiClient.get<ScheduleSlot[]>(API_ENDPOINTS.schedules.byRoom(roomId))
  },

  create: async (slotData: Partial<ScheduleSlot>): Promise<ApiResponse<ScheduleSlot>> => {
    return apiClient.post<ScheduleSlot>(API_ENDPOINTS.schedules.base, slotData)
  },

  update: async (id: string, slotData: Partial<ScheduleSlot>): Promise<ApiResponse<ScheduleSlot>> => {
    return apiClient.put<ScheduleSlot>(API_ENDPOINTS.schedules.byId(id), slotData)
  },

  delete: async (id: string): Promise<ApiResponse<{ message: string }>> => {
    return apiClient.delete<{ message: string }>(API_ENDPOINTS.schedules.byId(id))
  },

  validateConflicts: async (slotData: Partial<ScheduleSlot>): Promise<ApiResponse<{ hasConflict: boolean; conflicts: string[] }>> => {
    return apiClient.post<{ hasConflict: boolean; conflicts: string[] }>(API_ENDPOINTS.schedules.validateConflicts, slotData)
  },
}
