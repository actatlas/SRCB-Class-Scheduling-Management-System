import React from 'react'
import './Spinner.css'

export interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  color?: 'primary' | 'white' | 'slate'
  className?: string
  label?: string
}

export const Spinner: React.FC<SpinnerProps> = ({
  size = 'md',
  color = 'primary',
  className = '',
  label,
}) => {
  return (
    <div className={`scsms-spinner-wrapper ${className}`} role="status">
      <div className={`scsms-spinner scsms-spinner--${size} scsms-spinner--${color}`} />
      {label && <span className="scsms-spinner__label">{label}</span>}
      <span className="visually-hidden">Loading...</span>
    </div>
  )
}
