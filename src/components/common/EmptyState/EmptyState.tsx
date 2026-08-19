import React from 'react'
import { CalendarX } from 'lucide-react'
import './EmptyState.css'

export interface EmptyStateProps {
  title: string
  description?: string
  icon?: React.ReactNode
  action?: React.ReactNode
  className?: string
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  description,
  icon,
  action,
  className = '',
}) => {
  return (
    <div className={`scsms-empty-state ${className}`}>
      <div className="scsms-empty-state__icon">
        {icon || <CalendarX size={44} strokeWidth={1.5} />}
      </div>
      <h3 className="scsms-empty-state__title">{title}</h3>
      {description && <p className="scsms-empty-state__description">{description}</p>}
      {action && <div className="scsms-empty-state__action">{action}</div>}
    </div>
  )
}
