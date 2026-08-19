import React from 'react'
import { CalendarCheck, BookOpen, Clock, Building2, Download } from 'lucide-react'
import { PageHeader } from '@/components/common/PageHeader/PageHeader'
import { StatCard } from '@/components/common/StatCard/StatCard'
import { Card, CardHeader, CardTitle, CardDescription, CardBody } from '@/components/common/Card/Card'
import { Button } from '@/components/common/Button/Button'
import { Badge } from '@/components/common/Badge/Badge'
import { EmptyState } from '@/components/common/EmptyState/EmptyState'

export const TeacherDashboard: React.FC = () => {
  return (
    <div>
      <PageHeader
        title="Faculty Instructor Workspace"
        description="View your teaching timetable, room assignments, class lists, and submit schedule availability."
        breadcrumbs={[{ label: 'Teacher', path: '/teacher/dashboard' }, { label: 'Dashboard' }]}
        badge={<Badge role="TEACHER" size="sm" />}
        actions={
          <Button variant="outline" size="sm" leftIcon={<Download size={16} />}>
            Export My Timetable
          </Button>
        }
      />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '1.75rem' }}>
        <StatCard
          title="Assigned Classes"
          value="--"
          helperText="Active course sections"
          icon={<BookOpen size={22} />}
          variant="primary"
        />
        <StatCard
          title="Weekly Teaching Units"
          value="--"
          helperText="Approved teaching load"
          icon={<Clock size={22} />}
          variant="accent"
        />
        <StatCard
          title="Classroom Locations"
          value="--"
          helperText="Assigned campus rooms"
          icon={<Building2 size={22} />}
          variant="default"
        />
        <StatCard
          title="Schedule Status"
          value="Synchronized"
          helperText="Academic calendar active"
          icon={<CalendarCheck size={22} />}
          variant="success"
        />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
        <Card variant="default">
          <CardHeader>
            <CardTitle>Today's Teaching Schedule</CardTitle>
            <CardDescription>Upcoming class sessions and room assignments</CardDescription>
          </CardHeader>
          <CardBody>
            <EmptyState
              title="No classes scheduled for today"
              description="Your daily classes will appear here once the timetable is published by Academic Affairs."
              icon={<CalendarCheck size={40} strokeWidth={1.5} />}
            />
          </CardBody>
        </Card>

        <Card variant="default">
          <CardHeader>
            <CardTitle>Teaching Load Breakdown</CardTitle>
            <CardDescription>Subject assignments and contact hours</CardDescription>
          </CardHeader>
          <CardBody>
            <EmptyState
              title="Teaching load unassigned"
              description="Assigned subjects from your Department Head will be tracked here."
              icon={<BookOpen size={40} strokeWidth={1.5} />}
            />
          </CardBody>
        </Card>
      </div>
    </div>
  )
}
