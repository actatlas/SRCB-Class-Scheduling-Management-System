export type UserRole =
  | 'SUPER_ADMIN'
  | 'ADMIN'
  | 'PROGRAM_HEAD'
  | 'TEACHER'
  | 'STUDENT'

export interface User {
  id: string
  name: string
  email: string
  role: UserRole
  department?: string
  program?: string
  employeeId?: string
  studentId?: string
  avatarUrl?: string
  status: 'ACTIVE' | 'INACTIVE' | 'SUSPENDED'
  createdAt?: string
}

export interface AuthTokens {
  accessToken: string
  refreshToken?: string
  expiresAt?: number
}

export interface AuthState {
  user: User | null
  token: string | null
  role: UserRole | null
  isAuthenticated: boolean
  isLoading: boolean
}

export interface LoginCredentials {
  email: string
  password?: string
  role?: UserRole
}

export interface AuthResponse {
  user: User
  token: string
  refreshToken?: string
}
