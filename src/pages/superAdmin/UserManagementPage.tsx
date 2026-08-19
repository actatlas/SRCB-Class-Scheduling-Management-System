import React, { useState } from 'react'
import { Plus, Search, Filter, UserPlus } from 'lucide-react'
import { PageHeader } from '@/components/common/PageHeader/PageHeader'
import { Card, CardBody } from '@/components/common/Card/Card'
import { Input } from '@/components/common/Input/Input'
import { Button } from '@/components/common/Button/Button'
import { Table, type Column } from '@/components/common/Table/Table'
import { EmptyState } from '@/components/common/EmptyState/EmptyState'
import { Modal } from '@/components/common/Modal/Modal'
import { Select } from '@/components/common/Select/Select'
import type { User } from '@/types/auth.types'

export const UserManagementPage: React.FC = () => {
  const [search, setSearch] = useState('')
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const [users] = useState<User[]>([]) // Clean foundation state

  const columns: Column<User>[] = [
    { key: 'name', header: 'Name' },
    { key: 'email', header: 'Email' },
    { key: 'role', header: 'Role' },
    { key: 'department', header: 'Department' },
    { key: 'status', header: 'Status' },
  ]

  return (
    <div>
      <PageHeader
        title="User Management"
        description="Provision, assign roles, and manage institutional user accounts across all departments."
        breadcrumbs={[
          { label: 'Super Admin', path: '/super-admin/dashboard' },
          { label: 'User Management' },
        ]}
        actions={
          <Button
            variant="primary"
            size="md"
            leftIcon={<UserPlus size={16} />}
            onClick={() => setIsCreateModalOpen(true)}
          >
            Create User
          </Button>
        }
      />

      <Card variant="default">
        <CardBody style={{ gap: '1.25rem' }}>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '240px' }}>
              <Input
                placeholder="Search users by name, email, or employee ID..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                leftIcon={<Search size={18} />}
              />
            </div>
            <Button variant="outline" leftIcon={<Filter size={16} />}>
              Filter Roles
            </Button>
          </div>

          {users.length === 0 ? (
            <EmptyState
              title="No user records loaded"
              description="Connect to the backend user service (/api/users) to populate and manage SRCB user accounts."
              action={
                <Button
                  variant="primary"
                  size="sm"
                  leftIcon={<Plus size={16} />}
                  onClick={() => setIsCreateModalOpen(true)}
                >
                  Create First User
                </Button>
              }
            />
          ) : (
            <Table
              columns={columns}
              data={users}
              rowKey={(u) => u.id}
            />
          )}
        </CardBody>
      </Card>

      {/* Create User Foundation Modal */}
      <Modal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        title="Create New User Account"
        description="Add a new academic personnel, administrator, or student record."
        footer={
          <>
            <Button variant="outline" onClick={() => setIsCreateModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={() => setIsCreateModalOpen(false)}>
              Save User
            </Button>
          </>
        }
      >
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Input label="Full Name" placeholder="e.g. Maria Santos" required />
          <Input label="Institutional Email" type="email" placeholder="m.santos@srcb.edu.ph" required />
          <Select
            label="System Role"
            options={[
              { value: 'SUPER_ADMIN', label: 'Super Admin' },
              { value: 'ADMIN', label: 'Admin' },
              { value: 'PROGRAM_HEAD', label: 'Program Head' },
              { value: 'TEACHER', label: 'Teacher' },
              { value: 'STUDENT', label: 'Student' },
            ]}
            required
          />
          <Input label="Department / College" placeholder="e.g. College of Computer Studies" />
          <Input label="Employee or Student ID" placeholder="e.g. 2026-0045" />
        </form>
      </Modal>
    </div>
  )
}
