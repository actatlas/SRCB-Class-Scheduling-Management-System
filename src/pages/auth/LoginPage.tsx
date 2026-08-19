import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Mail, Lock, ArrowRight, Sparkles } from 'lucide-react'
import { useAuth } from '@/hooks/useAuth'
import { Button } from '@/components/common/Button/Button'
import { Input } from '@/components/common/Input/Input'
import { Badge } from '@/components/common/Badge/Badge'
import { Alert } from '@/components/feedback/Alert'
import { ROLE_DEFAULT_ROUTES, ROLE_LABELS } from '@/utils/constants'
import type { UserRole } from '@/types/auth.types'
import logoImg from '@/assets/Logo.png'
import './LoginPage.css'

const DEMO_PRESETS: { role: UserRole; email: string; desc: string }[] = [
  { role: 'SUPER_ADMIN', email: 'superadmin@srcb.edu.ph', desc: 'System configuration & user administration' },
  { role: 'ADMIN', email: 'admin@srcb.edu.ph', desc: 'Academic master scheduling & rooms' },
  { role: 'PROGRAM_HEAD', email: 'programhead.cs@srcb.edu.ph', desc: 'Department curriculum & review' },
  { role: 'TEACHER', email: 'faculty.instructor@srcb.edu.ph', desc: 'Class schedules & availability' },
  { role: 'STUDENT', email: 'student.sample@srcb.edu.ph', desc: 'Student timetable & enrolled subjects' },
]

export const LoginPage: React.FC = () => {
  const { login, isLoading } = useAuth()
  const navigate = useNavigate()

  const [email, setEmail] = useState('admin@srcb.edu.ph')
  const [password, setPassword] = useState('••••••••')
  const [selectedRole, setSelectedRole] = useState<UserRole>('ADMIN')
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!email) {
      setError('Please enter your institutional email address.')
      return
    }

    try {
      await login({ email, password, role: selectedRole })
      const targetPath = ROLE_DEFAULT_ROUTES[selectedRole] || '/admin/dashboard'
      navigate(targetPath)
    } catch {
      setError('Invalid credentials or failed to connect to authentication service.')
    }
  }

  const handleSelectPreset = (preset: typeof DEMO_PRESETS[0]) => {
    setEmail(preset.email)
    setSelectedRole(preset.role)
    setError(null)
  }

  return (
    <div className="scsms-login-card">
      <div className="scsms-login-card__header">
        <div className="scsms-login-card__logo-wrapper">
          <img src={logoImg} alt="SRCB Logo" className="scsms-login-card__logo" />
        </div>
        <h1 className="scsms-login-card__title">Sign in to SRCB SCSMS</h1>
        <p className="scsms-login-card__subtitle">
          Enter your institutional credentials to access your scheduling portal.
        </p>
      </div>

      {error && (
        <Alert
          type="error"
          message={error}
          onClose={() => setError(null)}
          className="scsms-login-card__alert"
        />
      )}

      {/* Quick Role Tester Selector */}
      <div className="scsms-login-card__presets">
        <div className="scsms-login-card__presets-title">
          <Sparkles size={14} />
          <span>Quick Role Selection (Demo)</span>
        </div>
        <div className="scsms-login-card__presets-list">
          {DEMO_PRESETS.map((preset) => {
            const isSelected = selectedRole === preset.role
            return (
              <button
                key={preset.role}
                type="button"
                className={`scsms-login-preset ${isSelected ? 'scsms-login-preset--selected' : ''}`}
                onClick={() => handleSelectPreset(preset)}
              >
                <div className="scsms-login-preset__top">
                  <Badge role={preset.role} size="sm" dot />
                  {isSelected && <span className="scsms-login-preset__active-dot" />}
                </div>
                <span className="scsms-login-preset__desc">{preset.desc}</span>
              </button>
            )
          })}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="scsms-login-form">
        <Input
          label="Institutional Email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="name@srcb.edu.ph"
          leftIcon={<Mail size={18} />}
        />

        <Input
          label="Password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          leftIcon={<Lock size={18} />}
        />

        <Button
          type="submit"
          variant="primary"
          size="lg"
          fullWidth
          isLoading={isLoading}
          rightIcon={<ArrowRight size={18} />}
        >
          Sign In as {ROLE_LABELS[selectedRole]}
        </Button>
      </form>

      <div className="scsms-login-card__footer">
        <p>Santa Rita College of Bataan Class Scheduling Management System</p>
      </div>
    </div>
  )
}
