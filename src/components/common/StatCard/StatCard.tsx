import React from 'react'
import './StatCard.css'

export interface StatCardProps {
  title: string
  value: string | number
  icon?: React.ReactNode
  helperText?: string
  trend?: {
    value: string
    isPositive?: boolean
  }
  variant?: 'primary' | 'accent' | 'warning' | 'success' | 'danger' | 'default'
  className?: string
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon,
  helperText,
  trend,
  variant = 'default',
  className = '',
}) => {
  return (
    <div className={`scsms-stat-card scsms-stat-card--${variant} ${className}`}>
      <div className="scsms-stat-card__content">
        <span className="scsms-stat-card__title">{title}</span>
        <div className="scsms-stat-card__value-row">
          <span className="scsms-stat-card__value">{value}</span>
          {trend && (
            <span
              className={`scsms-stat-card__trend ${
                trend.isPositive ? 'scsms-stat-card__trend--pos' : 'scsms-stat-card__trend--neg'
              }`}
            >
              {trend.isPositive ? '+' : ''}
              {trend.value}
            </span>
          )}
        </div>
        {helperText && <span className="scsms-stat-card__helper">{helperText}</span>}
      </div>

      {icon && <div className="scsms-stat-card__icon-wrapper">{icon}</div>}
    </div>
  )
}
