import React from 'react'
import { CalendarDays, Printer, Download } from 'lucide-react'
import { PageHeader } from '@/components/common/PageHeader/PageHeader'
import { Card, CardBody } from '@/components/common/Card/Card'
import { Button } from '@/components/common/Button/Button'
import { EmptyState } from '@/components/common/EmptyState/EmptyState'

export const StudentSchedulePage: React.FC = () => {
  return (
    <div>
      <PageHeader
        title="My Class Timetable"
        description="Official weekly schedule of registered courses, instructor info, and classroom assignments."
        breadcrumbs={[
          { label: 'Student', path: '/student/dashboard' },
          { label: 'My Schedule' },
        ]}
        actions={
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <Button variant="outline" size="sm" leftIcon={<Printer size={14} />}>
              Print Timetable
            </Button>
            <Button variant="secondary" size="sm" leftIcon={<Download size={14} />}>
              Download Certificate of Registration (COR)
            </Button>
          </div>
        }
      />

      <Card variant="default">
        <CardBody>
          <EmptyState
            title="Class timetable is not yet published"
            description="Your class schedules will appear in this timetable matrix once finalized and approved by your Department."
            icon={<CalendarDays size={44} strokeWidth={1.5} />}
          />
        </CardBody>
      </Card>
    </div>
  )
}
