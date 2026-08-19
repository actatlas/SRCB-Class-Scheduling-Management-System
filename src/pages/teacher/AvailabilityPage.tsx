import React from 'react'
import { Clock, Save } from 'lucide-react'
import { PageHeader } from '@/components/common/PageHeader/PageHeader'
import { Card, CardHeader, CardTitle, CardDescription, CardBody } from '@/components/common/Card/Card'
import { Button } from '@/components/common/Button/Button'
import { Alert } from '@/components/feedback/Alert'

export const AvailabilityPage: React.FC = () => {
  return (
    <div>
      <PageHeader
        title="Availability & Teaching Preferences"
        description="Set your preferred time slots and days for the scheduling algorithm before term timetable creation."
        breadcrumbs={[
          { label: 'Teacher', path: '/teacher/dashboard' },
          { label: 'Availability' },
        ]}
        actions={
          <Button variant="primary" size="md" leftIcon={<Save size={16} />}>
            Submit Preferences
          </Button>
        }
      />

      <Alert
        type="info"
        message="Preferences submitted here will guide the Program Head and Admin when generating conflict-free master schedules."
        className="mb-4"
      />

      <Card variant="default">
        <CardHeader>
          <CardTitle>Weekly Availability Matrix</CardTitle>
          <CardDescription>Select time blocks where you are available to teach</CardDescription>
        </CardHeader>
        <CardBody>
          <div
            style={{
              padding: '2.5rem 1rem',
              textAlign: 'center',
              border: '1px dashed var(--border-medium)',
              borderRadius: 'var(--radius-lg)',
              color: 'var(--text-muted)',
            }}
          >
            <Clock size={40} style={{ margin: '0 auto 1rem', color: 'var(--text-subtle)' }} />
            <h4 style={{ color: 'var(--text-main)', marginBottom: '0.25rem' }}>Interactive Availability Grid</h4>
            <p style={{ fontSize: '0.875rem' }}>
              A time block selector (Monday through Saturday, 7:00 AM - 9:00 PM) will connect with the availability API endpoint.
            </p>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}
