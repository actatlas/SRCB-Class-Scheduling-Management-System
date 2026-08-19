import React from 'react'
import { BookOpen, CheckSquare, Users, Clock, Plus } from 'lucide-react'
import { PageHeader } from '@/components/common/PageHeader/PageHeader'
import { StatCard } from '@/components/common/StatCard/StatCard'
import { Card, CardHeader, CardTitle, CardDescription, CardBody } from '@/components/common/Card/Card'
import { Button } from '@/components/common/Button/Button'
import { Badge } from '@/components/common/Badge/Badge'
import { EmptyState } from '@/components/common/EmptyState/EmptyState'

export const ProgramHeadDashboard: React.FC = () => {
  return (
    <div>
      <PageHeader
        title="Program Head Portal"
        description="Department curriculum planning, subject offerings, instructor workload allocations, and timetable endorsements."
        breadcrumbs={[{ label: 'Program Head', path: '/program-head/dashboard' }, { label: 'Dashboard' }]}
        badge={<Badge role="PROGRAM_HEAD" size="sm" />}
        actions={
          <Button variant="primary" size="sm" leftIcon={<Plus size={16} />}>
            Propose Subject Load
          </Button>
        }
      />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '1.75rem' }}>
        <StatCard
          title="Program Curriculum"
          value="--"
          helperText="Active course offerings"
          icon={<BookOpen size={22} />}
          variant="primary"
        />
        <StatCard
          title="Pending Approvals"
          value="--"
          helperText="Schedules awaiting review"
          icon={<CheckSquare size={22} />}
          variant="warning"
        />
        <StatCard
          title="Department Faculty"
          value="--"
          helperText="Assigned instructors"
          icon={<Users size={22} />}
          variant="accent"
        />
        <StatCard
          title="Total Sections"
          value="--"
          helperText="Year levels & blocks"
          icon={<Clock size={22} />}
          variant="default"
        />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
        <Card variant="default">
          <CardHeader>
            <CardTitle>Schedule Endorsement Queue</CardTitle>
            <CardDescription>Timetable slots submitted for Department Head review</CardDescription>
          </CardHeader>
          <CardBody>
            <EmptyState
              title="No pending schedule reviews"
              description="When faculty or admins submit draft timetables for your department, they will be listed here for approval."
              icon={<CheckSquare size={40} strokeWidth={1.5} />}
            />
          </CardBody>
        </Card>

        <Card variant="default">
          <CardHeader>
            <CardTitle>Curriculum Load Distribution</CardTitle>
            <CardDescription>Teaching units and faculty loading tracker</CardDescription>
          </CardHeader>
          <CardBody>
            <EmptyState
              title="Workload summary ready"
              description="Instructor load distribution reports will be generated here from /api/schedules."
              icon={<BookOpen size={40} strokeWidth={1.5} />}
            />
          </CardBody>
        </Card>
      </div>
    </div>
  )
}
