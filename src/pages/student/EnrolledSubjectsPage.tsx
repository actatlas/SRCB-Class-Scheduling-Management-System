import React from 'react'
import { GraduationCap, Download } from 'lucide-react'
import { PageHeader } from '@/components/common/PageHeader/PageHeader'
import { Card, CardBody } from '@/components/common/Card/Card'
import { Button } from '@/components/common/Button/Button'
import { EmptyState } from '@/components/common/EmptyState/EmptyState'

export const EnrolledSubjectsPage: React.FC = () => {
  return (
    <div>
      <PageHeader
        title="Enrolled Subjects & Units"
        description="List of registered subjects, credit units, prerequisites, and assigned teaching faculty."
        breadcrumbs={[
          { label: 'Student', path: '/student/dashboard' },
          { label: 'Enrolled Subjects' },
        ]}
        actions={
          <Button variant="outline" size="md" leftIcon={<Download size={16} />}>
            Export Subject List
          </Button>
        }
      />

      <Card variant="default">
        <CardBody>
          <EmptyState
            title="No enrolled subjects listed"
            description="Enrolled subjects from the academic registrar database will be shown here."
            icon={<GraduationCap size={44} strokeWidth={1.5} />}
          />
        </CardBody>
      </Card>
    </div>
  )
}
