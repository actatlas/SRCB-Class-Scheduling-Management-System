import React, { useState } from 'react'
import { Building2, Plus, Search, Filter } from 'lucide-react'
import { PageHeader } from '@/components/common/PageHeader/PageHeader'
import { Card, CardBody } from '@/components/common/Card/Card'
import { Input } from '@/components/common/Input/Input'
import { Button } from '@/components/common/Button/Button'
import { EmptyState } from '@/components/common/EmptyState/EmptyState'
import { Modal } from '@/components/common/Modal/Modal'
import { Select } from '@/components/common/Select/Select'

export const RoomsManagementPage: React.FC = () => {
  const [search, setSearch] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div>
      <PageHeader
        title="Rooms & Facilities"
        description="Configure campus lecture halls, science & computer laboratories, and designated learning spaces."
        breadcrumbs={[
          { label: 'Admin', path: '/admin/dashboard' },
          { label: 'Rooms & Facilities' },
        ]}
        actions={
          <Button variant="primary" size="md" leftIcon={<Plus size={16} />} onClick={() => setIsModalOpen(true)}>
            Add Room
          </Button>
        }
      />

      <Card variant="default">
        <CardBody style={{ gap: '1.25rem' }}>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '240px' }}>
              <Input
                placeholder="Search rooms by name, building, or type..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                leftIcon={<Search size={18} />}
              />
            </div>
            <Button variant="outline" leftIcon={<Filter size={16} />}>
              Filter Type
            </Button>
          </div>

          <EmptyState
            title="No room records loaded"
            description="Manage campus learning spaces by adding facilities or syncing with /api/rooms."
            icon={<Building2 size={44} strokeWidth={1.5} />}
            action={
              <Button variant="primary" size="sm" leftIcon={<Plus size={16} />} onClick={() => setIsModalOpen(true)}>
                Add First Room
              </Button>
            }
          />
        </CardBody>
      </Card>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Add New Campus Room"
        description="Register a new classroom, laboratory, or hall into the scheduling pool."
        footer={
          <>
            <Button variant="outline" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={() => setIsModalOpen(false)}>
              Save Room
            </Button>
          </>
        }
      >
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Input label="Room Name / Identifier" placeholder="e.g. Lab 201, Room 304" required />
          <Input label="Building Name" placeholder="e.g. St. Rita Building" required />
          <Input label="Floor Level" placeholder="e.g. 2nd Floor" />
          <Input label="Seating Capacity" type="number" placeholder="e.g. 45" required />
          <Select
            label="Room Type"
            options={[
              { value: 'LECTURE', label: 'Lecture Classroom' },
              { value: 'LABORATORY', label: 'Computer / Science Laboratory' },
              { value: 'AUDITORIUM', label: 'Auditorium' },
              { value: 'CONFERENCE', label: 'Conference / Meeting Room' },
            ]}
            required
          />
        </form>
      </Modal>
    </div>
  )
}
