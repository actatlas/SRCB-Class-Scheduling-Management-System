import type { UserRole } from '@/types/auth.types'
import { ROLE_LABELS } from './constants'

export function formatRole(role?: UserRole | null): string {
  if (!role) return 'Unknown Role'
  return ROLE_LABELS[role] || role
}

export function formatTimeSlot(startTime: string, endTime: string): string {
  if (!startTime || !endTime) return ''
  const formatTime = (timeStr: string) => {
    const [hours, minutes] = timeStr.split(':').map(Number)
    if (isNaN(hours) || isNaN(minutes)) return timeStr
    const period = hours >= 12 ? 'PM' : 'AM'
    const adjustedHours = hours % 12 || 12
    return `${adjustedHours}:${minutes.toString().padStart(2, '0')} ${period}`
  }
  return `${formatTime(startTime)} - ${formatTime(endTime)}`
}

export function getInitials(name?: string): string {
  if (!name) return 'U'
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join('')
}
