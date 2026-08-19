import { createContext } from 'react'
import type { User, UserRole, LoginCredentials, AuthState } from '@/types/auth.types'

export interface AuthContextType extends AuthState {
  login: (credentials: LoginCredentials) => Promise<void>
  logout: () => void
  switchRole: (role: UserRole) => void
  updateUser: (userData: Partial<User>) => void
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const ROLE_USER_TEMPLATES: Record<UserRole, User> = {
  SUPER_ADMIN: {
    id: 'usr_super_admin_01',
    name: 'Super Admin User',
    email: 'superadmin@srcb.edu.ph',
    role: 'SUPER_ADMIN',
    department: 'Systems Administration',
    status: 'ACTIVE',
    employeeId: 'SA-2026-001',
  },
  ADMIN: {
    id: 'usr_admin_01',
    name: 'Academic Dean / Admin',
    email: 'admin@srcb.edu.ph',
    role: 'ADMIN',
    department: 'Academic Affairs',
    status: 'ACTIVE',
    employeeId: 'ADM-2026-002',
  },
  PROGRAM_HEAD: {
    id: 'usr_proghead_01',
    name: 'Program Head (CS/IT)',
    email: 'programhead.cs@srcb.edu.ph',
    role: 'PROGRAM_HEAD',
    department: 'College of Computer Studies',
    program: 'BS Information Technology',
    status: 'ACTIVE',
    employeeId: 'PH-2026-003',
  },
  TEACHER: {
    id: 'usr_teacher_01',
    name: 'Faculty Instructor',
    email: 'faculty.instructor@srcb.edu.ph',
    role: 'TEACHER',
    department: 'College of Computer Studies',
    status: 'ACTIVE',
    employeeId: 'FAC-2026-004',
  },
  STUDENT: {
    id: 'usr_student_01',
    name: 'Enrolled Student',
    email: 'student.sample@srcb.edu.ph',
    role: 'STUDENT',
    department: 'College of Computer Studies',
    program: 'BS Information Technology',
    studentId: '2023-00124',
    status: 'ACTIVE',
  },
}
