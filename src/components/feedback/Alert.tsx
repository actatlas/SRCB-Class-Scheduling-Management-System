import React from 'react'
import { AlertCircle, CheckCircle2, Info, AlertTriangle, X } from 'lucide-react'
import './Alert.css'

export type AlertType = 'info' | 'success' | 'warning' | 'error'

export interface AlertProps {
  type?: AlertType
  title?: string
  message: string | React.ReactNode
  onClose?: () => void
  action?: React.ReactNode
  className?: string
}

export const Alert: React.FC<AlertProps> = ({
  type = 'info',
  title,
  message,
  onClose,
  action,
  className = '',
}) => {
  const getIcon = () => {
    switch (type) {
      case 'success':
        return <CheckCircle2 size={20} />
      case 'warning':
        return <AlertTriangle size={20} />
      case 'error':
        return <AlertCircle size={20} />
      case 'info':
      default:
        return <Info size={20} />
    }
  }

  return (
    <div className={`scsms-alert scsms-alert--${type} ${className}`} role="alert">
      <div className="scsms-alert__icon">{getIcon()}</div>
      <div className="scsms-alert__content">
        {title && <h4 className="scsms-alert__title">{title}</h4>}
        <div className="scsms-alert__message">{message}</div>
        {action && <div className="scsms-alert__action">{action}</div>}
      </div>
      {onClose && (
        <button
          type="button"
          className="scsms-alert__close"
          onClick={onClose}
          aria-label="Dismiss alert"
        >
          <X size={16} />
        </button>
      )}
    </div>
  )
}
