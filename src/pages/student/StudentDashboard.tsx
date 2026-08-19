import React from 'react'
import { CalendarDays, GraduationCap, Building2, Clock, Download } from 'lucide-react'
import { PageHeader } from '@/components/common/PageHeader/PageHeader'
import { StatCard } from '@/components/common/StatCard/StatCard'
import { Card, CardHeader, CardTitle, CardDescription, CardBody } from '@/components/common/Card/Card'
import { Button } from '@/components/common/Button/Button'
import { Badge } from '@/components/common/Badge/Badge'
import { EmptyState } from '@/components/common/EmptyState/EmptyState'

export const StudentDashboard: React.FC = () => {
  return (
    <div>
      <PageHeader
        title="Student Class Portal"
        description="Access your official class schedule, enrolled courses, instructor designations, and campus classroom locations."
        breadcrumbs={[{ label: 'Student', path: '/student/dashboard' }, { label: 'Dashboard' }]}
        badge={<Badge role="STUDENT" size="sm" />}
        actions={
          <Button variant="outline" size="sm" leftIcon={<Download size={16} />}>
            Print Schedule (COR)
          </Button>
        }
      />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '1.75rem' }}>
        <StatCard
          title="Enrolled Subjects"
          value="--"
          helperText="Current semester load"
          icon={<GraduationCap size={22} />}
          variant="primary"
        />
        <StatCard
          title="Total Units"
          value="--"
          helperText="Academic unit credit"
          icon={<Clock size={22} />}
          variant="accent"
        />
        <StatCard
          title="Campus Building"
          value="Main Campus"
          helperText="SRCB Academic Facilities"
          icon={<Building2 size={22} />}
          variant="default"
        />
        <StatCard
          title="Section Block"
          value="--"
          helperText="Assigned block section"
          icon={<CalendarDays size={22} />}
          variant="warning"
        />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
        <Card variant="default">
          <CardHeader>
            <CardTitle>Today's Classes</CardTitle>
            <CardDescription>Scheduled lectures and laboratory sessions for today</CardDescription>
          </CardHeader>
          <CardBody>
            <EmptyState
              title="No classes scheduled for today"
              description="Your daily schedule will appear here when term schedules are published by the Registrar."
              icon={<CalendarDays size={40} strokeWidth={1.5} />}
            />
          </CardBody>
        </Card>

        <Card variant="default">
          <CardHeader>
            <CardTitle>Academic Information</CardTitle>
            <CardDescription>Enrollment details & term status</CardDescription>
          </CardHeader>
          <CardBody>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.875rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.75rem', borderBottom: '1px solid var(--border-subtle)' }}>
                <span style={{ color: 'var(--text-muted)' }}>Academic Term</span>
                <span style={{ fontWeight: 600 }}>1st Sem, A.Y. 2026-2027</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.75rem', borderBottom: '1px solid var(--border-subtle)' }}>
                <span style={{ color: 'var(--text-muted)' }}>Enrollment Status</span>
                <Badge variant="success" size="sm" dot>Officially Enrolled</Badge>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.75rem', borderBottom: '1px solid var(--border-subtle)' }}>
                <span style={{ color: 'var(--text-muted)' }}>Department</span>
                <span style={{ fontWeight: 600 }}>College of Computer Studies</span>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}
