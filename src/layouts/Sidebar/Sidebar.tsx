import React from 'react'
import { NavLink } from 'react-router-dom'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { useAuth } from '@/hooks/useAuth'
import { getNavItemsForRole } from './navConfig'
import { Badge } from '@/components/common/Badge/Badge'
import logoImg from '@/assets/Logo.png'
import './Sidebar.css'

interface SidebarProps {
  isCollapsed: boolean
  onToggleCollapse: () => void
  isMobileOpen: boolean
  onCloseMobile: () => void
}

export const Sidebar: React.FC<SidebarProps> = ({
  isCollapsed,
  onToggleCollapse,
  isMobileOpen,
  onCloseMobile,
}) => {
  const { role } = useAuth()
  const navItems = getNavItemsForRole(role)

  return (
    <>
      {/* Mobile Backdrop */}
      {isMobileOpen && (
        <div className="scsms-sidebar-backdrop" onClick={onCloseMobile} />
      )}

      <aside
        className={`scsms-sidebar ${isCollapsed ? 'scsms-sidebar--collapsed' : ''} ${
          isMobileOpen ? 'scsms-sidebar--mobile-open' : ''
        }`}
      >
        {/* Brand Header */}
        <div className="scsms-sidebar__brand">
          <div className="scsms-sidebar__logo-container">
            <img src={logoImg} alt="SRCB Logo" className="scsms-sidebar__logo" />
            {!isCollapsed && (
              <div className="scsms-sidebar__brand-text">
                <span className="scsms-sidebar__brand-name">SRCB SCSMS</span>
                <span className="scsms-sidebar__brand-tag">Class Scheduling</span>
              </div>
            )}
          </div>
          <button
            type="button"
            className="scsms-sidebar__mobile-close"
            onClick={onCloseMobile}
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        {/* User Role Pill in Sidebar */}
        {!isCollapsed && role && (
          <div className="scsms-sidebar__role-box">
            <span className="scsms-sidebar__role-label">Active Workspace</span>
            <Badge role={role} size="sm" dot />
          </div>
        )}

        {/* Navigation List */}
        <nav className="scsms-sidebar__nav" aria-label="Main Navigation">
          <ul className="scsms-sidebar__nav-list">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <li key={item.id} className="scsms-sidebar__nav-item">
                  <NavLink
                    to={item.path}
                    onClick={onCloseMobile}
                    className={({ isActive }) =>
                      `scsms-sidebar__link ${isActive ? 'scsms-sidebar__link--active' : ''}`
                    }
                    title={isCollapsed ? item.title : undefined}
                  >
                    <span className="scsms-sidebar__link-icon">
                      <Icon size={20} />
                    </span>
                    {!isCollapsed && (
                      <span className="scsms-sidebar__link-text">{item.title}</span>
                    )}
                    {!isCollapsed && item.badge && (
                      <span className="scsms-sidebar__link-badge">{item.badge}</span>
                    )}
                  </NavLink>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Sidebar Footer with Collapse Toggle */}
        <div className="scsms-sidebar__footer">
          <button
            type="button"
            className="scsms-sidebar__collapse-btn"
            onClick={onToggleCollapse}
            aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
            {!isCollapsed && <span>Collapse Menu</span>}
          </button>
        </div>
      </aside>
    </>
  )
}
