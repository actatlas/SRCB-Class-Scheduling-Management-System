import React from 'react'
import { CalendarDays, Building2, Users, AlertTriangle, Plus } from 'lucide-react'
import { PageHeader } from '@/components/common/PageHeader/PageHeader'
import { StatCard } from '@/components/common/StatCard/StatCard'
import { Card, CardHeader, CardTitle, CardDescription, CardBody } from '@/components/common/Card/Card'
import { Button } from '@/components/common/Button/Button'
import { Badge } from '@/components/common/Badge/Badge'
import { EmptyState } from '@/components/common/EmptyState/EmptyState'

export const AdminDashboard: React.FC = () => {
  return (
    <div>
      <PageHeader
        title="Admin Academic Overview"
        description="Comprehensive master scheduling, facilities allocation, and departmental coordination."
        breadcrumbs={[{ label: 'Admin', path: '/admin/dashboard' }, { label: 'Dashboard' }]}
        badge={<Badge role="ADMIN" size="sm" />}
        actions={
          <Button variant="primary" size="sm" leftIcon={<Plus size={16} />}>
            Create Timetable
          </Button>
        }
      />

      {/* Metrics */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '1.75rem' }}>
        <StatCard
          title="Master Schedules"
          value="--"
          helperText="Active semester timetables"
          icon={<CalendarDays size={22} />}
          variant="primary"
        />
        <StatCard
          title="Rooms & Labs"
          value="--"
          helperText="Total campus facilities"
          icon={<Building2 size={22} />}
          variant="accent"
        />
        <StatCard
          title="Faculty Instructors"
          value="--"
          helperText="Active teaching staff"
          icon={<Users size={22} />}
          variant="default"
        />
        <StatCard
          title="Detected Conflicts"
          value="0"
          helperText="Zero overlap violations"
          icon={<AlertTriangle size={22} />}
          variant="success"
        />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
        <Card variant="default">
          <CardHeader>
            <CardTitle>Academic Term Status</CardTitle>
            <CardDescription>Current semester timetable generation status</CardDescription>
          </CardHeader>
          <CardBody>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.875rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.75rem', borderBottom: '1px solid var(--border-subtle)' }}>
                <span style={{ color: 'var(--text-muted)' }}>Active Academic Year</span>
                <span style={{ fontWeight: 600 }}>A.Y. 2026-2027</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.75rem', borderBottom: '1px solid var(--border-subtle)' }}>
                <span style={{ color: 'var(--text-muted)' }}>Semester Term</span>
                <span style={{ fontWeight: 600 }}>1st Semester</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.75rem', borderBottom: '1px solid var(--border-subtle)' }}>
                <span style={{ color: 'var(--text-muted)' }}>Timetable Generation</span>
                <Badge variant="warning" size="sm" dot>Planning Phase</Badge>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)' }}>Publish Status</span>
                <Badge variant="secondary" size="sm">Draft Mode</Badge>
              </div>
            </div>
          </CardBody>
        </Card>

        <Card variant="default">
          <CardHeader>
            <CardTitle>Master Schedule Feed</CardTitle>
            <CardDescription>Live timetable allocation records</CardDescription>
          </CardHeader>
          <CardBody>
            <EmptyState
              title="Timetable records ready to populate"
              description="Schedules configured via /api/schedules will be rendered in this master view."
              icon={<CalendarDays size={40} strokeWidth={1.5} />}
            />
          </CardBody>
        </Card>
      </div>
    </div>
  )
}
