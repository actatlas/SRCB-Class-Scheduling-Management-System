import React from 'react'
import { Users, ShieldCheck, Server, Plus, Activity } from 'lucide-react'
import { PageHeader } from '@/components/common/PageHeader/PageHeader'
import { StatCard } from '@/components/common/StatCard/StatCard'
import { Card, CardHeader, CardTitle, CardDescription, CardBody } from '@/components/common/Card/Card'
import { Button } from '@/components/common/Button/Button'
import { Badge } from '@/components/common/Badge/Badge'
import { EmptyState } from '@/components/common/EmptyState/EmptyState'

export const SuperAdminDashboard: React.FC = () => {
  return (
    <div>
      <PageHeader
        title="Super Admin Control Center"
        description="System-wide governance, user provisioning, security parameters, and audit logging."
        breadcrumbs={[{ label: 'Super Admin', path: '/super-admin/dashboard' }, { label: 'Dashboard' }]}
        badge={<Badge role="SUPER_ADMIN" size="sm" />}
        actions={
          <Button variant="primary" size="sm" leftIcon={<Plus size={16} />}>
            New User Account
          </Button>
        }
      />

      {/* Metric Cards Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '1.75rem' }}>
        <StatCard
          title="Total System Users"
          value="--"
          helperText="Ready for backend connection"
          icon={<Users size={22} />}
          variant="primary"
        />
        <StatCard
          title="Active Sessions"
          value="--"
          helperText="Live authenticated tokens"
          icon={<Activity size={22} />}
          variant="accent"
        />
        <StatCard
          title="System Health"
          value="Operational"
          helperText="API Gateway & Database ready"
          icon={<Server size={22} />}
          variant="success"
        />
        <StatCard
          title="Security Alerts"
          value="0"
          helperText="No suspicious log attempts"
          icon={<ShieldCheck size={22} />}
          variant="default"
        />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
        <Card variant="default">
          <CardHeader>
            <CardTitle>Recent Audit Trail</CardTitle>
            <CardDescription>Real-time security logs from the authentication and authorization layer</CardDescription>
          </CardHeader>
          <CardBody>
            <EmptyState
              title="No audit logs recorded yet"
              description="System logs will automatically stream here once the Express API backend is linked."
              icon={<ShieldCheck size={40} strokeWidth={1.5} />}
            />
          </CardBody>
        </Card>

        <Card variant="default">
          <CardHeader>
            <CardTitle>System Environment</CardTitle>
            <CardDescription>Deployment and infrastructure endpoints</CardDescription>
          </CardHeader>
          <CardBody>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.875rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.75rem', borderBottom: '1px solid var(--border-subtle)' }}>
                <span style={{ color: 'var(--text-muted)' }}>Frontend Engine</span>
                <span style={{ fontWeight: 600 }}>React 19 + Vite 8 (TypeScript)</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.75rem', borderBottom: '1px solid var(--border-subtle)' }}>
                <span style={{ color: 'var(--text-muted)' }}>API Target</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8125rem' }}>Node.js / Express</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.75rem', borderBottom: '1px solid var(--border-subtle)' }}>
                <span style={{ color: 'var(--text-muted)' }}>Role Model</span>
                <span style={{ fontWeight: 600 }}>5 Tier RBAC Enabled</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: 'var(--text-muted)' }}>Institution</span>
                <span style={{ fontWeight: 600 }}>Santa Rita College of Bataan</span>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}
