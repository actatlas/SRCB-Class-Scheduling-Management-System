import React, { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Menu,
  Moon,
  Sun,
  LogOut,
  User,
  Layers,
} from 'lucide-react'
import { useAuth } from '@/hooks/useAuth'
import { useTheme } from '@/hooks/useTheme'
import { Badge } from '@/components/common/Badge/Badge'
import { getInitials } from '@/utils/formatters'
import { ROLE_LABELS, ROLE_DEFAULT_ROUTES } from '@/utils/constants'
import type { UserRole } from '@/types/auth.types'
import './Header.css'

interface HeaderProps {
  onOpenMobileNav: () => void
}

const AVAILABLE_ROLES: UserRole[] = [
  'SUPER_ADMIN',
  'ADMIN',
  'PROGRAM_HEAD',
  'TEACHER',
  'STUDENT',
]

export const Header: React.FC<HeaderProps> = ({ onOpenMobileNav }) => {
  const { user, role, logout, switchRole } = useAuth()
  const { theme, toggleTheme } = useTheme()
  const navigate = useNavigate()

  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [isRolePickerOpen, setIsRolePickerOpen] = useState(false)

  const profileRef = useRef<HTMLDivElement>(null)
  const rolePickerRef = useRef<HTMLDivElement>(null)

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false)
      }
      if (rolePickerRef.current && !rolePickerRef.current.contains(event.target as Node)) {
        setIsRolePickerOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleRoleSwitch = (newRole: UserRole) => {
    switchRole(newRole)
    setIsRolePickerOpen(false)
    const targetRoute = ROLE_DEFAULT_ROUTES[newRole]
    navigate(targetRoute)
  }

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <header className="scsms-header">
      <div className="scsms-header__left">
        <button
          type="button"
          className="scsms-header__menu-btn"
          onClick={onOpenMobileNav}
          aria-label="Open mobile navigation"
        >
          <Menu size={22} />
        </button>

        <div className="scsms-header__brand-info">
          <span className="scsms-header__institution">Santa Rita College of Bataan</span>
          <span className="scsms-header__system-title">Class Scheduling Management System</span>
        </div>
      </div>

      <div className="scsms-header__right">
        {/* Quick Role Switcher for seamless development/testing */}
        <div className="scsms-header__role-switcher-container" ref={rolePickerRef}>
          <button
            type="button"
            className="scsms-header__role-switcher-btn"
            onClick={() => setIsRolePickerOpen((prev) => !prev)}
            title="Switch user role view"
          >
            <Layers size={16} className="scsms-header__role-icon" />
            <span className="scsms-header__role-name">
              Role: <strong>{role ? ROLE_LABELS[role] : 'Select'}</strong>
            </span>
          </button>

          {isRolePickerOpen && (
            <div className="scsms-header__dropdown scsms-header__role-dropdown">
              <div className="scsms-header__dropdown-header">
                <span>Switch Role View</span>
              </div>
              <div className="scsms-header__dropdown-body">
                {AVAILABLE_ROLES.map((r) => (
                  <button
                    key={r}
                    type="button"
                    className={`scsms-header__role-option ${r === role ? 'scsms-header__role-option--active' : ''}`}
                    onClick={() => handleRoleSwitch(r)}
                  >
                    <Badge role={r} size="sm" dot />
                    {r === role && <span className="scsms-header__current-tag">Current</span>}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Theme Toggle */}
        <button
          type="button"
          className="scsms-header__icon-btn"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
          title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
        >
          {theme === 'light' ? <Moon size={19} /> : <Sun size={19} />}
        </button>

        {/* User Profile Menu */}
        <div className="scsms-header__profile-container" ref={profileRef}>
          <button
            type="button"
            className="scsms-header__profile-btn"
            onClick={() => setIsProfileOpen((prev) => !prev)}
            aria-expanded={isProfileOpen}
          >
            <div className="scsms-header__avatar">{getInitials(user?.name)}</div>
            <div className="scsms-header__user-info">
              <span className="scsms-header__user-name">{user?.name || 'User'}</span>
              <span className="scsms-header__user-role">{role ? ROLE_LABELS[role] : ''}</span>
            </div>
          </button>

          {isProfileOpen && (
            <div className="scsms-header__dropdown scsms-header__profile-dropdown">
              <div className="scsms-header__profile-dropdown-user">
                <div className="scsms-header__avatar scsms-header__avatar--large">
                  {getInitials(user?.name)}
                </div>
                <div>
                  <div className="scsms-header__profile-dropdown-name">{user?.name}</div>
                  <div className="scsms-header__profile-dropdown-email">{user?.email}</div>
                  {role && <Badge role={role} size="sm" className="mt-1" />}
                </div>
              </div>

              <div className="scsms-header__dropdown-divider" />

              <button
                type="button"
                className="scsms-header__dropdown-item"
                onClick={() => {
                  setIsProfileOpen(false)
                  navigate('/profile')
                }}
              >
                <User size={16} />
                <span>My Profile</span>
              </button>

              <button
                type="button"
                className="scsms-header__dropdown-item scsms-header__dropdown-item--danger"
                onClick={handleLogout}
              >
                <LogOut size={16} />
                <span>Log Out</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
