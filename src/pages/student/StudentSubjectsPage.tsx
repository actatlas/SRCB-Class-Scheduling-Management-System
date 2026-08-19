import React, { useState } from 'react'
import { BookOpen, Search, Download } from 'lucide-react'
import { PageHeader } from '@/components/common/PageHeader/PageHeader'
import { Card, CardBody } from '@/components/common/Card/Card'
import { Input } from '@/components/common/Input/Input'
import { Button } from '@/components/common/Button/Button'
import { EmptyState } from '@/components/common/EmptyState/EmptyState'

export const StudentSubjectsPage: React.FC = () => {
  const [search, setSearch] = useState('')

  return (
    <div>
      <PageHeader
        title="My Enrolled Subjects"
        description="Official list of registered courses, instructor info, units, and subject syllabus outlines."
        breadcrumbs={[
          { label: 'Student', path: '/student/dashboard' },
          { label: 'My Subjects' },
        ]}
        actions={
          <Button variant="outline" size="md" leftIcon={<Download size={16} />}>
            Export Course List
          </Button>
        }
      />

      <Card variant="default">
        <CardBody style={{ gap: '1.25rem' }}>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '240px' }}>
              <Input
                placeholder="Search your subjects by code or descriptive title..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                leftIcon={<Search size={18} />}
              />
            </div>
          </div>

          <EmptyState
            title="No registered subjects loaded"
            description="Your officially enrolled courses from the Registrar will display here with instructor details and credit units."
            icon={<BookOpen size={44} strokeWidth={1.5} />}
          />
        </CardBody>
      </Card>
    </div>
  )
}
