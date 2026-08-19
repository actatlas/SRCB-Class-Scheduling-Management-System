import React, { useState } from 'react'
import { BookOpen, Search, Filter, Plus } from 'lucide-react'
import { PageHeader } from '@/components/common/PageHeader/PageHeader'
import { Card, CardBody } from '@/components/common/Card/Card'
import { Input } from '@/components/common/Input/Input'
import { Button } from '@/components/common/Button/Button'
import { EmptyState } from '@/components/common/EmptyState/EmptyState'

export const ProgramHeadSubjectsPage: React.FC = () => {
  const [search, setSearch] = useState('')

  return (
    <div>
      <PageHeader
        title="Department Subject Offerings"
        description="Configure semester subject prospectuses, prerequisites, and unit credits for your degree program."
        breadcrumbs={[
          { label: 'Program Head', path: '/program-head/dashboard' },
          { label: 'Subjects' },
        ]}
        actions={
          <Button variant="primary" size="md" leftIcon={<Plus size={16} />}>
            Propose Subject
          </Button>
        }
      />

      <Card variant="default">
        <CardBody style={{ gap: '1.25rem' }}>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '240px' }}>
              <Input
                placeholder="Search department subjects..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                leftIcon={<Search size={18} />}
              />
            </div>
            <Button variant="outline" leftIcon={<Filter size={16} />}>
              Year & Semester
            </Button>
          </div>

          <EmptyState
            title="No department subjects configured"
            description="Manage the curriculum subjects and laboratory courses for your academic department."
            icon={<BookOpen size={44} strokeWidth={1.5} />}
          />
        </CardBody>
      </Card>
    </div>
  )
}
