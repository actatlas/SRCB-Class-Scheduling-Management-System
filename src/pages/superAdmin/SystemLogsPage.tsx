import React from 'react'
import { ShieldCheck, RefreshCw, Download } from 'lucide-react'
import { PageHeader } from '@/components/common/PageHeader/PageHeader'
import { Card, CardBody } from '@/components/common/Card/Card'
import { Button } from '@/components/common/Button/Button'
import { EmptyState } from '@/components/common/EmptyState/EmptyState'

export const SystemLogsPage: React.FC = () => {
  return (
    <div>
      <PageHeader
        title="System & Audit Logs"
        description="Immutable record of security events, timetable revisions, and user access history."
        breadcrumbs={[
          { label: 'Super Admin', path: '/super-admin/dashboard' },
          { label: 'System Logs' },
        ]}
        actions={
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <Button variant="outline" size="sm" leftIcon={<RefreshCw size={14} />}>
              Refresh
            </Button>
            <Button variant="secondary" size="sm" leftIcon={<Download size={14} />}>
              Export Logs
            </Button>
          </div>
        }
      />

      <Card variant="default">
        <CardBody>
          <EmptyState
            title="Audit log database stream is idle"
            description="All user authentication attempts, schedule overrides, and administrative modifications will be indexed here once the Express logging middleware is connected."
            icon={<ShieldCheck size={44} strokeWidth={1.5} />}
          />
        </CardBody>
      </Card>
    </div>
  )
}
