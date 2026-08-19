import React from 'react'
import { CalendarCheck, Printer, Download } from 'lucide-react'
import { PageHeader } from '@/components/common/PageHeader/PageHeader'
import { Card, CardBody } from '@/components/common/Card/Card'
import { Button } from '@/components/common/Button/Button'
import { EmptyState } from '@/components/common/EmptyState/EmptyState'

export const TeacherSchedulePage: React.FC = () => {
  return (
    <div>
      <PageHeader
        title="My Weekly Teaching Schedule"
        description="Comprehensive weekly calendar view of your class lectures, laboratory periods, and room assignments."
        breadcrumbs={[
          { label: 'Teacher', path: '/teacher/dashboard' },
          { label: 'My Schedule' },
        ]}
        actions={
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <Button variant="outline" size="sm" leftIcon={<Printer size={14} />}>
              Print Timetable
            </Button>
            <Button variant="secondary" size="sm" leftIcon={<Download size={14} />}>
              Download PDF
            </Button>
          </div>
        }
      />

      <Card variant="default">
        <CardBody>
          <EmptyState
            title="Weekly timetable not yet loaded"
            description="Faculty schedule slots queried from /api/schedules/instructor/:id will render in a weekly calendar matrix."
            icon={<CalendarCheck size={44} strokeWidth={1.5} />}
          />
        </CardBody>
      </Card>
    </div>
  )
}
