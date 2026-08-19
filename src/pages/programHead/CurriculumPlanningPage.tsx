import React, { useState } from 'react'
import { BookOpen, Plus, Search, Filter } from 'lucide-react'
import { PageHeader } from '@/components/common/PageHeader/PageHeader'
import { Card, CardBody } from '@/components/common/Card/Card'
import { Input } from '@/components/common/Input/Input'
import { Button } from '@/components/common/Button/Button'
import { EmptyState } from '@/components/common/EmptyState/EmptyState'

export const CurriculumPlanningPage: React.FC = () => {
  const [search, setSearch] = useState('')

  return (
    <div>
      <PageHeader
        title="Curriculum Planning & Subjects"
        description="Design course prospectuses, pre-requisite trees, and semester subject loads."
        breadcrumbs={[
          { label: 'Program Head', path: '/program-head/dashboard' },
          { label: 'Curriculum Planning' },
        ]}
        actions={
          <Button variant="primary" size="md" leftIcon={<Plus size={16} />}>
            Add Subject Offering
          </Button>
        }
      />

      <Card variant="default">
        <CardBody style={{ gap: '1.25rem' }}>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '240px' }}>
              <Input
                placeholder="Search subject by code or title (e.g. CS101, IT312)..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                leftIcon={<Search size={18} />}
              />
            </div>
            <Button variant="outline" leftIcon={<Filter size={16} />}>
              Year Level
            </Button>
          </div>

          <EmptyState
            title="No curriculum subjects found"
            description="Subject prospectuses and curriculum requirements configured via /api/curriculums will appear here."
            icon={<BookOpen size={44} strokeWidth={1.5} />}
            action={
              <Button variant="primary" size="sm" leftIcon={<Plus size={16} />}>
                Add First Subject
              </Button>
            }
          />
        </CardBody>
      </Card>
    </div>
  )
}
