import React, { useState } from 'react'
import { UserCheck, Plus, Search, Filter } from 'lucide-react'
import { PageHeader } from '@/components/common/PageHeader/PageHeader'
import { Card, CardBody } from '@/components/common/Card/Card'
import { Input } from '@/components/common/Input/Input'
import { Button } from '@/components/common/Button/Button'
import { EmptyState } from '@/components/common/EmptyState/EmptyState'
import { Modal } from '@/components/common/Modal/Modal'
import { Select } from '@/components/common/Select/Select'

export const AdminUsersPage: React.FC = () => {
  const [search, setSearch] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div>
      <PageHeader
        title="Administrative & Academic Users"
        description="View and manage user accounts associated with scheduling operations."
        breadcrumbs={[
          { label: 'Admin', path: '/admin/dashboard' },
          { label: 'Users' },
        ]}
        actions={
          <Button variant="primary" size="md" leftIcon={<Plus size={16} />} onClick={() => setIsModalOpen(true)}>
            Add User
          </Button>
        }
      />

      <Card variant="default">
        <CardBody style={{ gap: '1.25rem' }}>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '240px' }}>
              <Input
                placeholder="Search users by name, email, or role..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                leftIcon={<Search size={18} />}
              />
            </div>
            <Button variant="outline" leftIcon={<Filter size={16} />}>
              Filter Role
            </Button>
          </div>

          <EmptyState
            title="No user records loaded"
            description="Manage user credentials and departmental roles from the administrative panel."
            icon={<UserCheck size={44} strokeWidth={1.5} />}
            action={
              <Button variant="primary" size="sm" leftIcon={<Plus size={16} />} onClick={() => setIsModalOpen(true)}>
                Create User
              </Button>
            }
          />
        </CardBody>
      </Card>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Add System User"
        description="Create an account for program heads, faculty, or students."
        footer={
          <>
            <Button variant="outline" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={() => setIsModalOpen(false)}>
              Save User
            </Button>
          </>
        }
      >
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Input label="Full Name" placeholder="e.g. Maria Santos" required />
          <Input label="Email Address" type="email" placeholder="m.santos@srcb.edu.ph" required />
          <Select
            label="User Role"
            options={[
              { value: 'ADMIN', label: 'Admin' },
              { value: 'PROGRAM_HEAD', label: 'Program Head' },
              { value: 'TEACHER', label: 'Teacher' },
              { value: 'STUDENT', label: 'Student' },
            ]}
            required
          />
        </form>
      </Modal>
    </div>
  )
}
