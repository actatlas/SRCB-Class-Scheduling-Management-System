export const PATHS = {
  // Public / Auth
  LOGIN: '/login',
  UNAUTHORIZED: '/unauthorized',
  NOT_FOUND: '/404',

  // Common Authenticated
  PROFILE: '/profile',

  // Super Admin
  SUPER_ADMIN: {
    ROOT: '/super-admin',
    DASHBOARD: '/super-admin/dashboard',
    USERS: '/super-admin/users',
    LOGS: '/super-admin/system-logs',
  },

  // Admin
  ADMIN: {
    ROOT: '/admin',
    DASHBOARD: '/admin/dashboard',
    PROGRAMS: '/admin/programs',
    COURSES: '/admin/courses',
    SUBJECTS: '/admin/subjects',
    FACULTY: '/admin/faculty',
    FACULTY_AVAILABILITY: '/admin/faculty-availability',
    BUILDINGS: '/admin/buildings',
    ROOMS: '/admin/rooms',
    SCHEDULES: '/admin/schedules',
    USERS: '/admin/users',
  },

  // Program Head
  PROGRAM_HEAD: {
    ROOT: '/program-head',
    DASHBOARD: '/program-head/dashboard',
    FACULTY: '/program-head/faculty',
    SUBJECTS: '/program-head/subjects',
    SCHEDULES: '/program-head/schedules',
  },

  // Teacher
  TEACHER: {
    ROOT: '/teacher',
    DASHBOARD: '/teacher/dashboard',
    MY_SCHEDULE: '/teacher/my-schedule',
    MY_AVAILABILITY: '/teacher/my-availability',
  },

  // Student
  STUDENT: {
    ROOT: '/student',
    DASHBOARD: '/student/dashboard',
    MY_SCHEDULE: '/student/my-schedule',
    MY_SUBJECTS: '/student/my-subjects',
    MY_ROOMS: '/student/my-rooms',
  },
} as const
