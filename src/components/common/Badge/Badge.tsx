import React from 'react'
import type { UserRole } from '@/types/auth.types'
import { ROLE_LABELS } from '@/utils/constants'
import './Badge.css'

export type BadgeVariant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'info'
  | 'neutral'
  | 'role'

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
  role?: UserRole
  size?: 'sm' | 'md'
  dot?: boolean
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  role,
  size = 'md',
  dot = false,
  className = '',
  ...props
}) => {
  const roleClass = role ? `scsms-badge--role-${role.toLowerCase().replace(/_/g, '-')}` : ''

  return (
    <span
      className={`scsms-badge scsms-badge--${variant} scsms-badge--${size} ${roleClass} ${className}`}
      {...props}
    >
      {dot && <span className="scsms-badge__dot" />}
      {role ? ROLE_LABELS[role] : children}
    </span>
  )
}
