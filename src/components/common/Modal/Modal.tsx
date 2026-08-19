import React, { useEffect } from 'react'
import { X } from 'lucide-react'
import './Modal.css'

export interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  description?: string
  children: React.ReactNode
  footer?: React.ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  children,
  footer,
  size = 'md',
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }

    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="scsms-modal-overlay" onClick={onClose}>
      <div
        className={`scsms-modal scsms-modal--${size}`}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <div className="scsms-modal__header">
          <div>
            {title && <h2 className="scsms-modal__title">{title}</h2>}
            {description && <p className="scsms-modal__description">{description}</p>}
          </div>
          <button
            type="button"
            className="scsms-modal__close-btn"
            onClick={onClose}
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        <div className="scsms-modal__content">{children}</div>

        {footer && <div className="scsms-modal__footer">{footer}</div>}
      </div>
    </div>
  )
}
