import React from 'react'
import { CalendarDays, Filter, Plus } from 'lucide-react'
import { PageHeader } from '@/components/common/PageHeader/PageHeader'
import { Card, CardBody } from '@/components/common/Card/Card'
import { Button } from '@/components/common/Button/Button'
import { EmptyState } from '@/components/common/EmptyState/EmptyState'

export const ProgramHeadSchedulesPage: React.FC = () => {
  return (
    <div>
      <PageHeader
        title="Department Class Schedules"
        description="Review, adjust section timetables, and endorse department schedules for administrative approval."
        breadcrumbs={[
          { label: 'Program Head', path: '/program-head/dashboard' },
          { label: 'Schedules' },
        ]}
        actions={
          <div style={{ display: 'flex', gap: '0.625rem' }}>
            <Button variant="outline" size="md" leftIcon={<Filter size={16} />}>
              Filter by Section
            </Button>
            <Button variant="primary" size="md" leftIcon={<Plus size={16} />}>
              New Section Schedule
            </Button>
          </div>
        }
      />

      <Card variant="default">
        <CardBody>
          <EmptyState
            title="No section schedules for your program"
            description="Build section timetables, allocate faculty instructors, and verify classroom availability."
            icon={<CalendarDays size={44} strokeWidth={1.5} />}
          />
        </CardBody>
      </Card>
    </div>
  )
}
