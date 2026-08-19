import React, { useState } from 'react'
import { GraduationCap, Plus, Search, Filter } from 'lucide-react'
import { PageHeader } from '@/components/common/PageHeader/PageHeader'
import { Card, CardBody } from '@/components/common/Card/Card'
import { Input } from '@/components/common/Input/Input'
import { Button } from '@/components/common/Button/Button'
import { EmptyState } from '@/components/common/EmptyState/EmptyState'
import { Modal } from '@/components/common/Modal/Modal'
import { Select } from '@/components/common/Select/Select'

export const ProgramsPage: React.FC = () => {
  const [search, setSearch] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div>
      <PageHeader
        title="Academic Programs"
        description="Manage degree programs, department affiliations, and program curriculum specifications."
        breadcrumbs={[
          { label: 'Admin', path: '/admin/dashboard' },
          { label: 'Programs' },
        ]}
        actions={
          <Button variant="primary" size="md" leftIcon={<Plus size={16} />} onClick={() => setIsModalOpen(true)}>
            Add Program
          </Button>
        }
      />

      <Card variant="default">
        <CardBody style={{ gap: '1.25rem' }}>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '240px' }}>
              <Input
                placeholder="Search programs by code or title (e.g. BSIT, BSCpE, BSED)..."
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
            title="No academic programs configured"
            description="Register institutional degree programs to organize curriculum subjects and block sections."
            icon={<GraduationCap size={44} strokeWidth={1.5} />}
            action={
              <Button variant="primary" size="sm" leftIcon={<Plus size={16} />} onClick={() => setIsModalOpen(true)}>
                Add First Program
              </Button>
            }
          />
        </CardBody>
      </Card>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Add Academic Program"
        description="Register a new academic degree or certificate program."
        footer={
          <>
            <Button variant="outline" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={() => setIsModalOpen(false)}>
              Save Program
            </Button>
          </>
        }
      >
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Input label="Program Code" placeholder="e.g. BSIT, BSCS, BSED" required />
          <Input label="Program Name" placeholder="e.g. Bachelor of Science in Information Technology" required />
          <Select
            label="College / Department"
            options={[
              { value: 'CCS', label: 'College of Computer Studies' },
              { value: 'COE', label: 'College of Education' },
              { value: 'CBA', label: 'College of Business Administration' },
              { value: 'CAS', label: 'College of Arts and Sciences' },
            ]}
            required
          />
          <Input label="Program Head / Coordinator" placeholder="e.g. Prof. Maria Santos" />
        </form>
      </Modal>
    </div>
  )
}
