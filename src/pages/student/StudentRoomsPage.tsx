import React, { useState } from 'react'
import { MapPin, Search } from 'lucide-react'
import { PageHeader } from '@/components/common/PageHeader/PageHeader'
import { Card, CardBody } from '@/components/common/Card/Card'
import { Input } from '@/components/common/Input/Input'
import { EmptyState } from '@/components/common/EmptyState/EmptyState'

export const StudentRoomsPage: React.FC = () => {
  const [search, setSearch] = useState('')

  return (
    <div>
      <PageHeader
        title="My Classrooms & Campus Directory"
        description="Quick locator for assigned lecture halls, computer laboratories, and building locations for your enrolled classes."
        breadcrumbs={[
          { label: 'Student', path: '/student/dashboard' },
          { label: 'My Rooms' },
        ]}
      />

      <Card variant="default">
        <CardBody style={{ gap: '1.25rem' }}>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '240px' }}>
              <Input
                placeholder="Search campus room, lab, or building..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                leftIcon={<Search size={18} />}
              />
            </div>
          </div>

          <EmptyState
            title="Classroom directory ready"
            description="Locations and building directories for all your class sessions will appear here with floor numbers and navigation directions."
            icon={<MapPin size={44} strokeWidth={1.5} />}
          />
        </CardBody>
      </Card>
    </div>
  )
}
