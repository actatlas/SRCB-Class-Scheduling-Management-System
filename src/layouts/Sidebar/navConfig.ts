import {
  LayoutDashboard,
  Users,
  ShieldCheck,
  Building,
  Building2,
  CalendarDays,
  GraduationCap,
  Clock,
  BookOpen,
  CalendarCheck,
  Layers,
  MapPin,
  UserCheck,
} from 'lucide-react'
import type { NavItem } from '@/types/nav.types'
import type { UserRole } from '@/types/auth.types'

export const NAVIGATION_ITEMS: NavItem[] = [
  // Super Admin Navigation
  {
    id: 'super-admin-dashboard',
    title: 'Dashboard',
    path: '/super-admin/dashboard',
    icon: LayoutDashboard,
    roles: ['SUPER_ADMIN'],
  },
  {
    id: 'super-admin-users',
    title: 'User Management',
    path: '/super-admin/users',
    icon: Users,
    roles: ['SUPER_ADMIN'],
  },
  {
    id: 'super-admin-logs',
    title: 'System & Audit Logs',
    path: '/super-admin/system-logs',
    icon: ShieldCheck,
    roles: ['SUPER_ADMIN'],
  },

  // Admin Navigation
  {
    id: 'admin-dashboard',
    title: 'Dashboard',
    path: '/admin/dashboard',
    icon: LayoutDashboard,
    roles: ['ADMIN'],
  },
  {
    id: 'admin-programs',
    title: 'Programs',
    path: '/admin/programs',
    icon: GraduationCap,
    roles: ['ADMIN'],
  },
  {
    id: 'admin-courses',
    title: 'Courses',
    path: '/admin/courses',
    icon: Layers,
    roles: ['ADMIN'],
  },
  {
    id: 'admin-subjects',
    title: 'Subjects',
    path: '/admin/subjects',
    icon: BookOpen,
    roles: ['ADMIN'],
  },
  {
    id: 'admin-faculty',
    title: 'Faculty',
    path: '/admin/faculty',
    icon: Users,
    roles: ['ADMIN'],
  },
  {
    id: 'admin-faculty-availability',
    title: 'Faculty Availability',
    path: '/admin/faculty-availability',
    icon: Clock,
    roles: ['ADMIN'],
  },
  {
    id: 'admin-buildings',
    title: 'Buildings',
    path: '/admin/buildings',
    icon: Building,
    roles: ['ADMIN'],
  },
  {
    id: 'admin-rooms',
    title: 'Rooms',
    path: '/admin/rooms',
    icon: Building2,
    roles: ['ADMIN'],
  },
  {
    id: 'admin-schedules',
    title: 'Schedules',
    path: '/admin/schedules',
    icon: CalendarDays,
    roles: ['ADMIN'],
  },
  {
    id: 'admin-users',
    title: 'Users',
    path: '/admin/users',
    icon: UserCheck,
    roles: ['ADMIN'],
  },

  // Program Head Navigation
  {
    id: 'proghead-dashboard',
    title: 'Dashboard',
    path: '/program-head/dashboard',
    icon: LayoutDashboard,
    roles: ['PROGRAM_HEAD'],
  },
  {
    id: 'proghead-faculty',
    title: 'Faculty',
    path: '/program-head/faculty',
    icon: Users,
    roles: ['PROGRAM_HEAD'],
  },
  {
    id: 'proghead-subjects',
    title: 'Subjects',
    path: '/program-head/subjects',
    icon: BookOpen,
    roles: ['PROGRAM_HEAD'],
  },
  {
    id: 'proghead-schedules',
    title: 'Schedules',
    path: '/program-head/schedules',
    icon: CalendarDays,
    roles: ['PROGRAM_HEAD'],
  },

  // Teacher Navigation
  {
    id: 'teacher-dashboard',
    title: 'Dashboard',
    path: '/teacher/dashboard',
    icon: LayoutDashboard,
    roles: ['TEACHER'],
  },
  {
    id: 'teacher-schedule',
    title: 'My Schedule',
    path: '/teacher/my-schedule',
    icon: CalendarCheck,
    roles: ['TEACHER'],
  },
  {
    id: 'teacher-availability',
    title: 'My Availability',
    path: '/teacher/my-availability',
    icon: Clock,
    roles: ['TEACHER'],
  },

  // Student Navigation
  {
    id: 'student-dashboard',
    title: 'Dashboard',
    path: '/student/dashboard',
    icon: LayoutDashboard,
    roles: ['STUDENT'],
  },
  {
    id: 'student-schedule',
    title: 'My Schedule',
    path: '/student/my-schedule',
    icon: CalendarDays,
    roles: ['STUDENT'],
  },
  {
    id: 'student-subjects',
    title: 'My Subjects',
    path: '/student/my-subjects',
    icon: BookOpen,
    roles: ['STUDENT'],
  },
  {
    id: 'student-rooms',
    title: 'My Rooms',
    path: '/student/my-rooms',
    icon: MapPin,
    roles: ['STUDENT'],
  },
]

export function getNavItemsForRole(role?: UserRole | null): NavItem[] {
  if (!role) return []
  return NAVIGATION_ITEMS.filter((item) => item.roles.includes(role))
}
