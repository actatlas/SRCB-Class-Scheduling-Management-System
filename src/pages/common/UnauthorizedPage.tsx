import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ShieldAlert, ArrowLeft, Home } from 'lucide-react'
import { Button } from '@/components/common/Button/Button'
import { useAuth } from '@/hooks/useAuth'
import { ROLE_DEFAULT_ROUTES, ROLE_LABELS } from '@/utils/constants'

export const UnauthorizedPage: React.FC = () => {
  const navigate = useNavigate()
  const { role } = useAuth()

  const handleReturn = () => {
    if (role) {
      navigate(ROLE_DEFAULT_ROUTES[role])
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
          backgroundColor: 'var(--danger-50)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--danger-600)',
          marginBottom: '1.5rem',
        }}
      >
        <ShieldAlert size={44} strokeWidth={1.5} />
      </div>

      <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Access Restricted</h1>
      <p
        style={{
          color: 'var(--text-muted)',
          maxWidth: 480,
          marginBottom: '2rem',
          fontSize: '0.9375rem',
          lineHeight: 1.6,
        }}
      >
        Your current account role (<strong>{role ? ROLE_LABELS[role] : 'Guest'}</strong>) does not
        have permission to access this module or perform this action.
      </p>

      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
        <Button variant="outline" onClick={() => navigate(-1)} leftIcon={<ArrowLeft size={16} />}>
          Go Back
        </Button>
        <Button variant="primary" onClick={handleReturn} leftIcon={<Home size={16} />}>
          Go to My Dashboard
        </Button>
      </div>
    </div>
  )
}
