import type { LucideIcon } from 'lucide-react'
import type { UserRole } from './auth.types'

export interface NavItem {
  id: string
  title: string
  path: string
  icon: LucideIcon
  roles: UserRole[]
  badge?: string | number
  badgeVariant?: 'primary' | 'warning' | 'danger' | 'success' | 'neutral'
  children?: Omit<NavItem, 'icon'>[]
}

export interface NavSection {
  title?: string
  items: NavItem[]
}
