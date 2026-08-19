import React, { useState } from 'react'
import { Users, Search, Filter, Plus } from 'lucide-react'
import { PageHeader } from '@/components/common/PageHeader/PageHeader'
import { Card, CardBody } from '@/components/common/Card/Card'
import { Input } from '@/components/common/Input/Input'
import { Button } from '@/components/common/Button/Button'
import { EmptyState } from '@/components/common/EmptyState/EmptyState'

export const ProgramHeadFacultyPage: React.FC = () => {
  const [search, setSearch] = useState('')

  return (
    <div>
      <PageHeader
        title="Department Faculty Roster"
        description="View and manage assigned instructors, teaching qualifications, and workload distribution within your program."
        breadcrumbs={[
          { label: 'Program Head', path: '/program-head/dashboard' },
          { label: 'Faculty' },
        ]}
        actions={
          <Button variant="primary" size="md" leftIcon={<Plus size={16} />}>
            Assign Instructor
          </Button>
        }
      />

      <Card variant="default">
        <CardBody style={{ gap: '1.25rem' }}>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '240px' }}>
              <Input
                placeholder="Search program instructors by name or ID..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                leftIcon={<Search size={18} />}
              />
            </div>
            <Button variant="outline" leftIcon={<Filter size={16} />}>
              Teaching Load Status
            </Button>
          </div>

          <EmptyState
            title="No instructors assigned to this department"
            description="Assign departmental instructors to plan course offerings and teaching schedules."
            icon={<Users size={44} strokeWidth={1.5} />}
          />
        </CardBody>
      </Card>
    </div>
  )
}
