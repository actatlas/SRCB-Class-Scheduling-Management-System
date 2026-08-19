import React from 'react'
import { Filter, CheckCircle2 } from 'lucide-react'
import { PageHeader } from '@/components/common/PageHeader/PageHeader'
import { Card, CardBody } from '@/components/common/Card/Card'
import { Button } from '@/components/common/Button/Button'
import { EmptyState } from '@/components/common/EmptyState/EmptyState'

export const ScheduleReviewPage: React.FC = () => {
  return (
    <div>
      <PageHeader
        title="Schedule Review & Approval"
        description="Verify department section assignments, room utilization, and faculty conflict checks before final publishing."
        breadcrumbs={[
          { label: 'Program Head', path: '/program-head/dashboard' },
          { label: 'Schedule Review' },
        ]}
        actions={
          <Button variant="outline" size="md" leftIcon={<Filter size={16} />}>
            Filter by Program
          </Button>
        }
      />

      <Card variant="default">
        <CardBody>
          <EmptyState
            title="All submitted schedules reviewed"
            description="There are no outstanding schedule drafts awaiting department endorsement."
            icon={<CheckCircle2 size={44} strokeWidth={1.5} />}
          />
        </CardBody>
      </Card>
    </div>
  )
}
