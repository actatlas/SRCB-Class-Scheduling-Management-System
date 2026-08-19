export const API_CONFIG = {
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api',
  timeoutMs: 15000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
}

export const API_ENDPOINTS = {
  auth: {
    login: '/auth/login',
    logout: '/auth/logout',
    me: '/auth/me',
    refreshToken: '/auth/refresh-token',
  },
  users: {
    base: '/users',
    byId: (id: string) => `/users/${id}`,
    byRole: (role: string) => `/users/role/${role}`,
  },
  schedules: {
    base: '/schedules',
    byId: (id: string) => `/schedules/${id}`,
    bySection: (sectionId: string) => `/schedules/section/${sectionId}`,
    byInstructor: (instructorId: string) => `/schedules/instructor/${instructorId}`,
    byRoom: (roomId: string) => `/schedules/room/${roomId}`,
    validateConflicts: '/schedules/validate-conflicts',
    publish: (id: string) => `/schedules/${id}/publish`,
  },
  rooms: {
    base: '/rooms',
    byId: (id: string) => `/rooms/${id}`,
    availability: '/rooms/availability',
  },
  departments: {
    base: '/departments',
    byId: (id: string) => `/departments/${id}`,
  },
  curriculum: {
    base: '/curriculums',
    byId: (id: string) => `/curriculums/${id}`,
    subjects: '/subjects',
  },
}
