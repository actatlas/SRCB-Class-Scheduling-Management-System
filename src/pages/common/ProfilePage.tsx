import React, { useState } from 'react'
import { User, Mail, Building, IdCard, Save } from 'lucide-react'
import { useAuth } from '@/hooks/useAuth'
import { PageHeader } from '@/components/common/PageHeader/PageHeader'
import { Card, CardHeader, CardTitle, CardDescription, CardBody } from '@/components/common/Card/Card'
import { Input } from '@/components/common/Input/Input'
import { Button } from '@/components/common/Button/Button'
import { Badge } from '@/components/common/Badge/Badge'
import { Alert } from '@/components/feedback/Alert'
import { getInitials } from '@/utils/formatters'

export const ProfilePage: React.FC = () => {
  const { user, role, updateUser } = useAuth()

  const [name, setName] = useState(user?.name || '')
  const [email, setEmail] = useState(user?.email || '')
  const [department, setDepartment] = useState(user?.department || '')
  const [savedSuccess, setSavedSuccess] = useState(false)

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault()
    updateUser({ name, email, department })
    setSavedSuccess(true)
    setTimeout(() => setSavedSuccess(false), 3000)
  }

  return (
    <div>
      <PageHeader
        title="User Profile"
        description="Manage your institutional identity, contact information, and role attributes."
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Profile' },
        ]}
      />

      {savedSuccess && (
        <Alert
          type="success"
          message="Your profile details have been successfully updated."
          className="mb-4"
          onClose={() => setSavedSuccess(false)}
        />
      )}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
        {/* Profile Card Summary */}
        <Card variant="default">
          <CardBody style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '1.5rem' }}>
            <div
              style={{
                width: 80,
                height: 80,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, var(--primary-600), var(--primary-800))',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.75rem',
                fontWeight: 700,
                marginBottom: '1rem',
              }}
            >
              {getInitials(name)}
            </div>

            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{name}</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '0.75rem' }}>{email}</p>

            {role && <Badge role={role} size="md" dot />}

            <div
              style={{
                width: '100%',
                marginTop: '1.5rem',
                paddingTop: '1.25rem',
                borderTop: '1px solid var(--border-subtle)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                fontSize: '0.8125rem',
                textAlign: 'left',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)' }}>
                <span>Account Status</span>
                <span style={{ color: 'var(--success-600)', fontWeight: 600 }}>Active</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)' }}>
                <span>Identifier</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                  {user?.employeeId || user?.studentId || user?.id}
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)' }}>
                <span>Institution</span>
                <span style={{ fontWeight: 600, color: 'var(--text-main)' }}>Santa Rita College of Bataan</span>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Edit Form */}
        <Card variant="default">
          <CardHeader>
            <CardTitle>Personal & Academic Details</CardTitle>
            <CardDescription>Update your contact info and department association</CardDescription>
          </CardHeader>
          <CardBody>
            <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <Input
                label="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                leftIcon={<User size={18} />}
                required
              />

              <Input
                label="Email Address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                leftIcon={<Mail size={18} />}
                required
              />

              <Input
                label="Department / Office"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                leftIcon={<Building size={18} />}
                placeholder="e.g. College of Computer Studies"
              />

              <Input
                label="ID Number"
                value={user?.employeeId || user?.studentId || ''}
                leftIcon={<IdCard size={18} />}
                disabled
                helperText="ID numbers are verified and managed by the Registrar & Admin."
              />

              <div style={{ marginTop: '0.5rem' }}>
                <Button type="submit" variant="primary" leftIcon={<Save size={16} />}>
                  Save Changes
                </Button>
              </div>
            </form>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}
