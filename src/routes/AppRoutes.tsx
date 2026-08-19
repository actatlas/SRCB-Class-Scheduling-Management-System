import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'
import { ROLE_DEFAULT_ROUTES } from '@/utils/constants'

// Layouts
import { AppLayout } from '@/layouts/AppLayout'
import { AuthLayout } from '@/layouts/AuthLayout'

// Gates
import { ProtectedRoute } from './ProtectedRoute'
import { RoleRoute } from './RoleRoute'

// Pages - Auth & Common
import { LoginPage } from '@/pages/auth/LoginPage'
import { NotFoundPage } from '@/pages/common/NotFoundPage'
import { UnauthorizedPage } from '@/pages/common/UnauthorizedPage'
import { ProfilePage } from '@/pages/common/ProfilePage'

// Pages - Super Admin
import { SuperAdminDashboard } from '@/pages/superAdmin/SuperAdminDashboard'
import { UserManagementPage } from '@/pages/superAdmin/UserManagementPage'
import { SystemLogsPage } from '@/pages/superAdmin/SystemLogsPage'

// Pages - Admin
import { AdminDashboard } from '@/pages/admin/AdminDashboard'
import { ProgramsPage } from '@/pages/admin/ProgramsPage'
import { CoursesPage } from '@/pages/admin/CoursesPage'
import { SubjectsPage } from '@/pages/admin/SubjectsPage'
import { FacultyPage } from '@/pages/admin/FacultyPage'
import { FacultyAvailabilityPage } from '@/pages/admin/FacultyAvailabilityPage'
import { BuildingsPage } from '@/pages/admin/BuildingsPage'
import { RoomsManagementPage } from '@/pages/admin/RoomsManagementPage'
import { ScheduleManagementPage } from '@/pages/admin/ScheduleManagementPage'
import { AdminUsersPage } from '@/pages/admin/AdminUsersPage'

// Pages - Program Head
import { ProgramHeadDashboard } from '@/pages/programHead/ProgramHeadDashboard'
import { ProgramHeadFacultyPage } from '@/pages/programHead/ProgramHeadFacultyPage'
import { ProgramHeadSubjectsPage } from '@/pages/programHead/ProgramHeadSubjectsPage'
import { ProgramHeadSchedulesPage } from '@/pages/programHead/ProgramHeadSchedulesPage'
import { CurriculumPlanningPage } from '@/pages/programHead/CurriculumPlanningPage'
import { ScheduleReviewPage } from '@/pages/programHead/ScheduleReviewPage'

// Pages - Teacher
import { TeacherDashboard } from '@/pages/teacher/TeacherDashboard'
import { TeacherSchedulePage } from '@/pages/teacher/TeacherSchedulePage'
import { TeacherAvailabilityPage } from '@/pages/teacher/TeacherAvailabilityPage'

// Pages - Student
import { StudentDashboard } from '@/pages/student/StudentDashboard'
import { StudentSchedulePage } from '@/pages/student/StudentSchedulePage'
import { StudentSubjectsPage } from '@/pages/student/StudentSubjectsPage'
import { StudentRoomsPage } from '@/pages/student/StudentRoomsPage'

// Smart index redirect component
const RootRedirect: React.FC = () => {
  const { isAuthenticated, role } = useAuth()

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  const defaultRoute = role ? ROLE_DEFAULT_ROUTES[role] : '/login'
  return <Navigate to={defaultRoute} replace />
}

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Root redirect */}
      <Route path="/" element={<RootRedirect />} />

      {/* Guest / Auth Routes */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<LoginPage />} />
      </Route>

      {/* Protected Application Routes */}
      <Route
        element={
          <ProtectedRoute>
            <AppLayout />
          </ProtectedRoute>
        }
      >
        {/* Common Profile */}
        <Route path="/profile" element={<ProfilePage />} />

        {/* Super Admin Routes */}
        <Route
          path="/super-admin/dashboard"
          element={
            <RoleRoute allowedRoles={['SUPER_ADMIN']}>
              <SuperAdminDashboard />
            </RoleRoute>
          }
        />
        <Route
          path="/super-admin/users"
          element={
            <RoleRoute allowedRoles={['SUPER_ADMIN']}>
              <UserManagementPage />
            </RoleRoute>
          }
        />
        <Route
          path="/super-admin/system-logs"
          element={
            <RoleRoute allowedRoles={['SUPER_ADMIN']}>
              <SystemLogsPage />
            </RoleRoute>
          }
        />

        {/* Admin Routes */}
        <Route
          path="/admin/dashboard"
          element={
            <RoleRoute allowedRoles={['ADMIN']}>
              <AdminDashboard />
            </RoleRoute>
          }
        />
        <Route
          path="/admin/programs"
          element={
            <RoleRoute allowedRoles={['ADMIN']}>
              <ProgramsPage />
            </RoleRoute>
          }
        />
        <Route
          path="/admin/courses"
          element={
            <RoleRoute allowedRoles={['ADMIN']}>
              <CoursesPage />
            </RoleRoute>
          }
        />
        <Route
          path="/admin/subjects"
          element={
            <RoleRoute allowedRoles={['ADMIN']}>
              <SubjectsPage />
            </RoleRoute>
          }
        />
        <Route
          path="/admin/faculty"
          element={
            <RoleRoute allowedRoles={['ADMIN']}>
              <FacultyPage />
            </RoleRoute>
          }
        />
        <Route
          path="/admin/faculty-availability"
          element={
            <RoleRoute allowedRoles={['ADMIN']}>
              <FacultyAvailabilityPage />
            </RoleRoute>
          }
        />
        <Route
          path="/admin/buildings"
          element={
            <RoleRoute allowedRoles={['ADMIN']}>
              <BuildingsPage />
            </RoleRoute>
          }
        />
        <Route
          path="/admin/rooms"
          element={
            <RoleRoute allowedRoles={['ADMIN']}>
              <RoomsManagementPage />
            </RoleRoute>
          }
        />
        <Route
          path="/admin/schedules"
          element={
            <RoleRoute allowedRoles={['ADMIN']}>
              <ScheduleManagementPage />
            </RoleRoute>
          }
        />
        <Route
          path="/admin/users"
          element={
            <RoleRoute allowedRoles={['ADMIN']}>
              <AdminUsersPage />
            </RoleRoute>
          }
        />

        {/* Program Head Routes */}
        <Route
          path="/program-head/dashboard"
          element={
            <RoleRoute allowedRoles={['PROGRAM_HEAD']}>
              <ProgramHeadDashboard />
            </RoleRoute>
          }
        />
        <Route
          path="/program-head/faculty"
          element={
            <RoleRoute allowedRoles={['PROGRAM_HEAD']}>
              <ProgramHeadFacultyPage />
            </RoleRoute>
          }
        />
        <Route
          path="/program-head/subjects"
          element={
            <RoleRoute allowedRoles={['PROGRAM_HEAD']}>
              <ProgramHeadSubjectsPage />
            </RoleRoute>
          }
        />
        <Route
          path="/program-head/schedules"
          element={
            <RoleRoute allowedRoles={['PROGRAM_HEAD']}>
              <ProgramHeadSchedulesPage />
            </RoleRoute>
          }
        />
        <Route
          path="/program-head/curriculum"
          element={
            <RoleRoute allowedRoles={['PROGRAM_HEAD']}>
              <CurriculumPlanningPage />
            </RoleRoute>
          }
        />
        <Route
          path="/program-head/schedule-review"
          element={
            <RoleRoute allowedRoles={['PROGRAM_HEAD']}>
              <ScheduleReviewPage />
            </RoleRoute>
          }
        />

        {/* Teacher Routes */}
        <Route
          path="/teacher/dashboard"
          element={
            <RoleRoute allowedRoles={['TEACHER']}>
              <TeacherDashboard />
            </RoleRoute>
          }
        />
        <Route
          path="/teacher/my-schedule"
          element={
            <RoleRoute allowedRoles={['TEACHER']}>
              <TeacherSchedulePage />
            </RoleRoute>
          }
        />
        <Route
          path="/teacher/my-availability"
          element={
            <RoleRoute allowedRoles={['TEACHER']}>
              <TeacherAvailabilityPage />
            </RoleRoute>
          }
        />
        <Route
          path="/teacher/availability"
          element={
            <RoleRoute allowedRoles={['TEACHER']}>
              <TeacherAvailabilityPage />
            </RoleRoute>
          }
        />

        {/* Student Routes */}
        <Route
          path="/student/dashboard"
          element={
            <RoleRoute allowedRoles={['STUDENT']}>
              <StudentDashboard />
            </RoleRoute>
          }
        />
        <Route
          path="/student/my-schedule"
          element={
            <RoleRoute allowedRoles={['STUDENT']}>
              <StudentSchedulePage />
            </RoleRoute>
          }
        />
        <Route
          path="/student/my-subjects"
          element={
            <RoleRoute allowedRoles={['STUDENT']}>
              <StudentSubjectsPage />
            </RoleRoute>
          }
        />
        <Route
          path="/student/enrolled-subjects"
          element={
            <RoleRoute allowedRoles={['STUDENT']}>
              <StudentSubjectsPage />
            </RoleRoute>
          }
        />
        <Route
          path="/student/my-rooms"
          element={
            <RoleRoute allowedRoles={['STUDENT']}>
              <StudentRoomsPage />
            </RoleRoute>
          }
        />

        {/* General authenticated errors */}
        <Route path="/unauthorized" element={<UnauthorizedPage />} />
      </Route>

      {/* Catch-all 404 Route */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
