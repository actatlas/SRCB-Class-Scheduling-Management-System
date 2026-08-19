import React from 'react'
import './Button.css'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'success'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  fullWidth?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  className = '',
  disabled,
  ...props
}) => {
  return (
    <button
      className={`scsms-btn scsms-btn--${variant} scsms-btn--${size} ${fullWidth ? 'scsms-btn--full' : ''} ${isLoading ? 'scsms-btn--loading' : ''} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && <span className="scsms-btn__spinner" />}
      {!isLoading && leftIcon && <span className="scsms-btn__icon scsms-btn__icon--left">{leftIcon}</span>}
      <span className="scsms-btn__label">{children}</span>
      {!isLoading && rightIcon && <span className="scsms-btn__icon scsms-btn__icon--right">{rightIcon}</span>}
    </button>
  )
}
