import React, { useState } from 'react'
import { Layers, Plus, Search, Filter } from 'lucide-react'
import { PageHeader } from '@/components/common/PageHeader/PageHeader'
import { Card, CardBody } from '@/components/common/Card/Card'
import { Input } from '@/components/common/Input/Input'
import { Button } from '@/components/common/Button/Button'
import { EmptyState } from '@/components/common/EmptyState/EmptyState'
import { Modal } from '@/components/common/Modal/Modal'
import { Select } from '@/components/common/Select/Select'

export const CoursesPage: React.FC = () => {
  const [search, setSearch] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div>
      <PageHeader
        title="Courses Management"
        description="Configure academic course tracks, curriculum roadmaps, and section year levels."
        breadcrumbs={[
          { label: 'Admin', path: '/admin/dashboard' },
          { label: 'Courses' },
        ]}
        actions={
          <Button variant="primary" size="md" leftIcon={<Plus size={16} />} onClick={() => setIsModalOpen(true)}>
            Add Course
          </Button>
        }
      />

      <Card variant="default">
        <CardBody style={{ gap: '1.25rem' }}>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '240px' }}>
              <Input
                placeholder="Search courses by code or title..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                leftIcon={<Search size={18} />}
              />
            </div>
            <Button variant="outline" leftIcon={<Filter size={16} />}>
              Filter Level
            </Button>
          </div>

          <EmptyState
            title="No course records found"
            description="Manage and structure curriculum course outlines for SRCB academic terms."
            icon={<Layers size={44} strokeWidth={1.5} />}
            action={
              <Button variant="primary" size="sm" leftIcon={<Plus size={16} />} onClick={() => setIsModalOpen(true)}>
                Add First Course
              </Button>
            }
          />
        </CardBody>
      </Card>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Add Course Entry"
        description="Create a new course classification or curriculum track."
        footer={
          <>
            <Button variant="outline" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={() => setIsModalOpen(false)}>
              Save Course
            </Button>
          </>
        }
      >
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Input label="Course Code" placeholder="e.g. IT-TRACK-1" required />
          <Input label="Course Title" placeholder="e.g. Web and Mobile Application Development" required />
          <Select
            label="Year Level"
            options={[
              { value: '1', label: '1st Year' },
              { value: '2', label: '2nd Year' },
              { value: '3', label: '3rd Year' },
              { value: '4', label: '4th Year' },
            ]}
            required
          />
        </form>
      </Modal>
    </div>
  )
}
