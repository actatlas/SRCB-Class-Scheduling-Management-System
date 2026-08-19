import React, { useState } from 'react'
import { Users, Plus, Search, Filter } from 'lucide-react'
import { PageHeader } from '@/components/common/PageHeader/PageHeader'
import { Card, CardBody } from '@/components/common/Card/Card'
import { Input } from '@/components/common/Input/Input'
import { Button } from '@/components/common/Button/Button'
import { EmptyState } from '@/components/common/EmptyState/EmptyState'
import { Modal } from '@/components/common/Modal/Modal'
import { Select } from '@/components/common/Select/Select'

export const FacultyPage: React.FC = () => {
  const [search, setSearch] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div>
      <PageHeader
        title="Faculty Members"
        description="Roster of teaching instructors, departmental assignments, and employment status."
        breadcrumbs={[
          { label: 'Admin', path: '/admin/dashboard' },
          { label: 'Faculty' },
        ]}
        actions={
          <Button variant="primary" size="md" leftIcon={<Plus size={16} />} onClick={() => setIsModalOpen(true)}>
            Add Faculty Member
          </Button>
        }
      />

      <Card variant="default">
        <CardBody style={{ gap: '1.25rem' }}>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '240px' }}>
              <Input
                placeholder="Search faculty by name, email, or employee ID..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                leftIcon={<Search size={18} />}
              />
            </div>
            <Button variant="outline" leftIcon={<Filter size={16} />}>
              Filter Status
            </Button>
          </div>

          <EmptyState
            title="No faculty instructors registered"
            description="Manage college teaching staff, assign department loads, and track instructional capacity."
            icon={<Users size={44} strokeWidth={1.5} />}
            action={
              <Button variant="primary" size="sm" leftIcon={<Plus size={16} />} onClick={() => setIsModalOpen(true)}>
                Add First Instructor
              </Button>
            }
          />
        </CardBody>
      </Card>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Register Faculty Instructor"
        description="Add a new academic teacher to the scheduling roster."
        footer={
          <>
            <Button variant="outline" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={() => setIsModalOpen(false)}>
              Save Faculty
            </Button>
          </>
        }
      >
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Input label="Instructor Full Name" placeholder="e.g. Prof. Juan Dela Cruz" required />
          <Input label="Institutional Email" type="email" placeholder="j.delacruz@srcb.edu.ph" required />
          <Input label="Employee ID" placeholder="e.g. FAC-2026-012" required />
          <Select
            label="Employment Status"
            options={[
              { value: 'FULL_TIME', label: 'Full-Time Faculty' },
              { value: 'PART_TIME', label: 'Part-Time / Adjunct' },
              { value: 'VISITING', label: 'Visiting Lecturer' },
            ]}
            required
          />
          <Select
            label="Home Department"
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
