import React, { useState } from 'react'
import { BookOpen, Plus, Search, Filter } from 'lucide-react'
import { PageHeader } from '@/components/common/PageHeader/PageHeader'
import { Card, CardBody } from '@/components/common/Card/Card'
import { Input } from '@/components/common/Input/Input'
import { Button } from '@/components/common/Button/Button'
import { EmptyState } from '@/components/common/EmptyState/EmptyState'
import { Modal } from '@/components/common/Modal/Modal'
import { Select } from '@/components/common/Select/Select'

export const SubjectsPage: React.FC = () => {
  const [search, setSearch] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div>
      <PageHeader
        title="Subjects Catalog"
        description="Master repository of academic subjects, credit units, lecture hours, and lab allocations."
        breadcrumbs={[
          { label: 'Admin', path: '/admin/dashboard' },
          { label: 'Subjects' },
        ]}
        actions={
          <Button variant="primary" size="md" leftIcon={<Plus size={16} />} onClick={() => setIsModalOpen(true)}>
            Add Subject
          </Button>
        }
      />

      <Card variant="default">
        <CardBody style={{ gap: '1.25rem' }}>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '240px' }}>
              <Input
                placeholder="Search subjects by code or descriptive title..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                leftIcon={<Search size={18} />}
              />
            </div>
            <Button variant="outline" leftIcon={<Filter size={16} />}>
              Filter Department
            </Button>
          </div>

          <EmptyState
            title="No subject offerings recorded"
            description="Add academic subjects with units and lecture/lab breakdown for term timetable generation."
            icon={<BookOpen size={44} strokeWidth={1.5} />}
            action={
              <Button variant="primary" size="sm" leftIcon={<Plus size={16} />} onClick={() => setIsModalOpen(true)}>
                Add First Subject
              </Button>
            }
          />
        </CardBody>
      </Card>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Create New Subject"
        description="Add a subject offering with lecture and lab contact hours."
        footer={
          <>
            <Button variant="outline" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={() => setIsModalOpen(false)}>
              Save Subject
            </Button>
          </>
        }
      >
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Input label="Subject Code" placeholder="e.g. IT 312, MATH 101" required />
          <Input label="Descriptive Title" placeholder="e.g. Web Systems and Technologies" required />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.75rem' }}>
            <Input label="Credit Units" type="number" placeholder="3" required />
            <Input label="Lecture Hrs" type="number" placeholder="2" required />
            <Input label="Lab Hrs" type="number" placeholder="3" required />
          </div>
          <Select
            label="Department"
            options={[
              { value: 'CCS', label: 'College of Computer Studies' },
              { value: 'COE', label: 'College of Education' },
              { value: 'CBA', label: 'College of Business Administration' },
              { value: 'CAS', label: 'College of Arts and Sciences' },
            ]}
            required
          />
        </form>
      </Modal>
    </div>
  )
}
