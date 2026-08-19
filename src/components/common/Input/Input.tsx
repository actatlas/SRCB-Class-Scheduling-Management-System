import React, { forwardRef } from 'react'
import './Input.css'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  helperText?: string
  error?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  containerClassName?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      helperText,
      error,
      leftIcon,
      rightIcon,
      containerClassName = '',
      className = '',
      id,
      disabled,
      required,
      ...props
    },
    ref
  ) => {
    const inputId = id || (label ? `input-${label.toLowerCase().replace(/\s+/g, '-')}` : undefined)

    return (
      <div className={`scsms-input-field ${containerClassName}`}>
        {label && (
          <label htmlFor={inputId} className="scsms-input-field__label">
            {label}
            {required && <span className="scsms-input-field__required">*</span>}
          </label>
        )}
        <div
          className={`scsms-input-wrapper ${error ? 'scsms-input-wrapper--error' : ''} ${disabled ? 'scsms-input-wrapper--disabled' : ''}`}
        >
          {leftIcon && <span className="scsms-input-wrapper__icon scsms-input-wrapper__icon--left">{leftIcon}</span>}
          <input
            ref={ref}
            id={inputId}
            disabled={disabled}
            className={`scsms-input ${className}`}
            {...props}
          />
          {rightIcon && <span className="scsms-input-wrapper__icon scsms-input-wrapper__icon--right">{rightIcon}</span>}
        </div>
        {error && <p className="scsms-input-field__error">{error}</p>}
        {!error && helperText && <p className="scsms-input-field__helper">{helperText}</p>}
      </div>
    )
  }
)

Input.displayName = 'Input'
