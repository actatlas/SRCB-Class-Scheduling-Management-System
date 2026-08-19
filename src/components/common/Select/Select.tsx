import React, { forwardRef } from 'react'
import { ChevronDown } from 'lucide-react'
import './Select.css'

export interface SelectOption {
  value: string | number
  label: string
  disabled?: boolean
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  options: SelectOption[]
  error?: string
  helperText?: string
  placeholder?: string
  containerClassName?: string
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      label,
      options,
      error,
      helperText,
      placeholder,
      containerClassName = '',
      className = '',
      id,
      disabled,
      required,
      ...props
    },
    ref
  ) => {
    const selectId = id || (label ? `select-${label.toLowerCase().replace(/\s+/g, '-')}` : undefined)

    return (
      <div className={`scsms-select-field ${containerClassName}`}>
        {label && (
          <label htmlFor={selectId} className="scsms-select-field__label">
            {label}
            {required && <span className="scsms-select-field__required">*</span>}
          </label>
        )}
        <div
          className={`scsms-select-wrapper ${error ? 'scsms-select-wrapper--error' : ''} ${disabled ? 'scsms-select-wrapper--disabled' : ''}`}
        >
          <select
            ref={ref}
            id={selectId}
            disabled={disabled}
            className={`scsms-select ${className}`}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((opt) => (
              <option key={opt.value} value={opt.value} disabled={opt.disabled}>
                {opt.label}
              </option>
            ))}
          </select>
          <span className="scsms-select-wrapper__icon">
            <ChevronDown size={16} />
          </span>
        </div>
        {error && <p className="scsms-select-field__error">{error}</p>}
        {!error && helperText && <p className="scsms-select-field__helper">{helperText}</p>}
      </div>
    )
  }
)

Select.displayName = 'Select'
