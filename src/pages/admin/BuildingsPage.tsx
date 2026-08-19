import React, { useState } from 'react'
import { Building, Plus, Search } from 'lucide-react'
import { PageHeader } from '@/components/common/PageHeader/PageHeader'
import { Card, CardBody } from '@/components/common/Card/Card'
import { Input } from '@/components/common/Input/Input'
import { Button } from '@/components/common/Button/Button'
import { EmptyState } from '@/components/common/EmptyState/EmptyState'
import { Modal } from '@/components/common/Modal/Modal'

export const BuildingsPage: React.FC = () => {
  const [search, setSearch] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div>
      <PageHeader
        title="Campus Buildings"
        description="Manage campus physical buildings, wings, floors, and educational zones."
        breadcrumbs={[
          { label: 'Admin', path: '/admin/dashboard' },
          { label: 'Buildings' },
        ]}
        actions={
          <Button variant="primary" size="md" leftIcon={<Plus size={16} />} onClick={() => setIsModalOpen(true)}>
            Add Building
          </Button>
        }
      />

      <Card variant="default">
        <CardBody style={{ gap: '1.25rem' }}>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '240px' }}>
              <Input
                placeholder="Search buildings by name or code..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                leftIcon={<Search size={18} />}
              />
            </div>
          </div>

          <EmptyState
            title="No campus buildings registered"
            description="Configure Santa Rita College of Bataan buildings and facilities for classroom grouping."
            icon={<Building size={44} strokeWidth={1.5} />}
            action={
              <Button variant="primary" size="sm" leftIcon={<Plus size={16} />} onClick={() => setIsModalOpen(true)}>
                Add First Building
              </Button>
            }
          />
        </CardBody>
      </Card>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Add Campus Building"
        description="Register a new academic building structure."
        footer={
          <>
            <Button variant="outline" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={() => setIsModalOpen(false)}>
              Save Building
            </Button>
          </>
        }
      >
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Input label="Building Name" placeholder="e.g. St. Rita Building, Main Academic Hall" required />
          <Input label="Building Code" placeholder="e.g. SRB, MAH" required />
          <Input label="Total Floors" type="number" placeholder="4" required />
          <Input label="Campus Location / Zone" placeholder="e.g. Main Quadrangle" />
        </form>
      </Modal>
    </div>
  )
}
