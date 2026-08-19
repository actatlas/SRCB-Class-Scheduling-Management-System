import React, { useState } from 'react'
import { Layers, Plus, Search } from 'lucide-react'
import { PageHeader } from '@/components/common/PageHeader/PageHeader'
import { Card, CardBody } from '@/components/common/Card/Card'
import { Input } from '@/components/common/Input/Input'
import { Button } from '@/components/common/Button/Button'
import { EmptyState } from '@/components/common/EmptyState/EmptyState'

export const DepartmentsPage: React.FC = () => {
  const [search, setSearch] = useState('')

  return (
    <div>
      <PageHeader
        title="Academic Departments"
        description="Organize institutional colleges, academic programs, and department head assignments."
        breadcrumbs={[
          { label: 'Admin', path: '/admin/dashboard' },
          { label: 'Academic Departments' },
        ]}
        actions={
          <Button variant="primary" size="md" leftIcon={<Plus size={16} />}>
            Add Department
          </Button>
        }
      />

      <Card variant="default">
        <CardBody style={{ gap: '1.25rem' }}>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '240px' }}>
              <Input
                placeholder="Search departments by code or name..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                leftIcon={<Search size={18} />}
              />
            </div>
          </div>

          <EmptyState
            title="No academic departments configured"
            description="Create academic units (e.g. College of Computer Studies, College of Education) via /api/departments."
            icon={<Layers size={44} strokeWidth={1.5} />}
            action={
              <Button variant="primary" size="sm" leftIcon={<Plus size={16} />}>
                Create Department
              </Button>
            }
          />
        </CardBody>
      </Card>
    </div>
  )
}
