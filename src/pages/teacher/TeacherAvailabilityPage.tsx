import React from 'react'
import { Clock, Save } from 'lucide-react'
import { PageHeader } from '@/components/common/PageHeader/PageHeader'
import { Card, CardHeader, CardTitle, CardDescription, CardBody } from '@/components/common/Card/Card'
import { Button } from '@/components/common/Button/Button'
import { Alert } from '@/components/feedback/Alert'

export const TeacherAvailabilityPage: React.FC = () => {
  return (
    <div>
      <PageHeader
        title="My Availability & Preferences"
        description="Specify your available teaching hours, preferred days, and schedule constraints for upcoming terms."
        breadcrumbs={[
          { label: 'Teacher', path: '/teacher/dashboard' },
          { label: 'My Availability' },
        ]}
        actions={
          <Button variant="primary" size="md" leftIcon={<Save size={16} />}>
            Submit Preferences
          </Button>
        }
      />

      <Alert
        type="info"
        message="Your availability submissions will be evaluated by your Program Head and the Academic Dean when allocating course loads."
        className="mb-4"
      />

      <Card variant="default">
        <CardHeader>
          <CardTitle>Weekly Teaching Availability Matrix</CardTitle>
          <CardDescription>Select time blocks where you are available for instruction (Monday - Saturday)</CardDescription>
        </CardHeader>
        <CardBody>
          <div
            style={{
              padding: '3rem 1.5rem',
              textAlign: 'center',
              border: '1px dashed var(--border-medium)',
              borderRadius: 'var(--radius-lg)',
              color: 'var(--text-muted)',
              backgroundColor: 'var(--bg-subtle)',
            }}
          >
            <Clock size={44} style={{ margin: '0 auto 1rem', color: 'var(--text-subtle)' }} />
            <h4 style={{ color: 'var(--text-main)', marginBottom: '0.375rem' }}>Interactive Faculty Time Grid</h4>
            <p style={{ fontSize: '0.875rem', maxWidth: 480, margin: '0 auto' }}>
              Drag-and-select availability matrix will connect to the backend schedule solver to honor your instructional time preferences.
            </p>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}
