import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Home, FileQuestion } from 'lucide-react'
import { Button } from '@/components/common/Button/Button'
import { useAuth } from '@/hooks/useAuth'
import { ROLE_DEFAULT_ROUTES } from '@/utils/constants'

export const NotFoundPage: React.FC = () => {
  const navigate = useNavigate()
  const { role, isAuthenticated } = useAuth()

  const handleGoHome = () => {
    if (isAuthenticated && role) {
      navigate(ROLE_DEFAULT_ROUTES[role] || '/')
    } else {
      navigate('/login')
    }
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '70vh',
        textAlign: 'center',
        padding: '2rem',
      }}
    >
      <div
        style={{
          width: 80,
          height: 80,
          borderRadius: '50%',
          backgroundColor: 'var(--bg-muted)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--text-subtle)',
          marginBottom: '1.5rem',
        }}
      >
        <FileQuestion size={44} strokeWidth={1.5} />
      </div>

      <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Page Not Found</h1>
      <p
        style={{
          color: 'var(--text-muted)',
          maxWidth: 460,
          marginBottom: '2rem',
          fontSize: '0.9375rem',
          lineHeight: 1.6,
        }}
      >
        The scheduling route or page you are looking for does not exist or has been moved.
      </p>

      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
        <Button variant="outline" onClick={() => navigate(-1)} leftIcon={<ArrowLeft size={16} />}>
          Go Back
        </Button>
        <Button variant="primary" onClick={handleGoHome} leftIcon={<Home size={16} />}>
          Return to Dashboard
        </Button>
      </div>
    </div>
  )
}
