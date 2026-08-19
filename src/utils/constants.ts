import type { UserRole } from '@/types/auth.types'

export const APP_NAME = 'SRCB Class Scheduling Management System'
export const APP_SHORT_NAME = 'SRCB SCSMS'
export const APP_SUBTITLE = 'Santa Rita College of Bataan Scheduling Portal'

export const STORAGE_KEYS = {
  AUTH_TOKEN: 'scsms_auth_token',
  REFRESH_TOKEN: 'scsms_refresh_token',
  USER_DATA: 'scsms_user_data',
  THEME: 'scsms_theme',
  SIDEBAR_COLLAPSED: 'scsms_sidebar_collapsed',
} as const

export const ROLE_LABELS: Record<UserRole, string> = {
  SUPER_ADMIN: 'Super Admin',
  ADMIN: 'Admin',
  PROGRAM_HEAD: 'Program Head',
  TEACHER: 'Teacher',
  STUDENT: 'Student',
}

export const ROLE_DEFAULT_ROUTES: Record<UserRole, string> = {
  SUPER_ADMIN: '/super-admin/dashboard',
  ADMIN: '/admin/dashboard',
  PROGRAM_HEAD: '/program-head/dashboard',
  TEACHER: '/teacher/dashboard',
  STUDENT: '/student/dashboard',
}

export const ROLE_COLORS: Record<UserRole, { bg: string; text: string; border: string }> = {
  SUPER_ADMIN: {
    bg: 'rgba(239, 68, 68, 0.1)',
    text: '#ef4444',
    border: 'rgba(239, 68, 68, 0.25)',
  },
  ADMIN: {
    bg: 'rgba(14, 165, 233, 0.1)',
    text: '#0284c7',
    border: 'rgba(14, 165, 233, 0.25)',
  },
  PROGRAM_HEAD: {
    bg: 'rgba(139, 92, 246, 0.1)',
    text: '#8b5cf6',
    border: 'rgba(139, 92, 246, 0.25)',
  },
  TEACHER: {
    bg: 'rgba(16, 185, 129, 0.1)',
    text: '#059669',
    border: 'rgba(16, 185, 129, 0.25)',
  },
  STUDENT: {
    bg: 'rgba(245, 158, 11, 0.1)',
    text: '#d97706',
    border: 'rgba(245, 158, 11, 0.25)',
  },
}
