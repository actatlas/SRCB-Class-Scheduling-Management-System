import React, { useState } from 'react'
import { Clock, Search, Filter } from 'lucide-react'
import { PageHeader } from '@/components/common/PageHeader/PageHeader'
import { Card, CardBody } from '@/components/common/Card/Card'
import { Input } from '@/components/common/Input/Input'
import { Button } from '@/components/common/Button/Button'
import { EmptyState } from '@/components/common/EmptyState/EmptyState'

export const FacultyAvailabilityPage: React.FC = () => {
  const [search, setSearch] = useState('')

  return (
    <div>
      <PageHeader
        title="Faculty Availability Overview"
        description="Inspect submitted weekly time availability, preferred teaching blocks, and part-time time windows."
        breadcrumbs={[
          { label: 'Admin', path: '/admin/dashboard' },
          { label: 'Faculty Availability' },
        ]}
        actions={
          <Button variant="outline" size="md" leftIcon={<Filter size={16} />}>
            Filter Department
          </Button>
        }
      />

      <Card variant="default">
        <CardBody style={{ gap: '1.25rem' }}>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '240px' }}>
              <Input
                placeholder="Search faculty by name or department..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                leftIcon={<Search size={18} />}
              />
            </div>
          </div>

          <EmptyState
            title="No availability records submitted"
            description="Faculty teaching preferences submitted from their portals will be visualized here to prevent scheduling clashes."
            icon={<Clock size={44} strokeWidth={1.5} />}
          />
        </CardBody>
      </Card>
    </div>
  )
}
