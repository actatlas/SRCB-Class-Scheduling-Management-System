import React, { useState } from 'react'
import { CalendarDays, Plus, Filter } from 'lucide-react'
import { PageHeader } from '@/components/common/PageHeader/PageHeader'
import { Card, CardBody } from '@/components/common/Card/Card'
import { Button } from '@/components/common/Button/Button'
import { EmptyState } from '@/components/common/EmptyState/EmptyState'
import { Modal } from '@/components/common/Modal/Modal'
import { Input } from '@/components/common/Input/Input'
import { Select } from '@/components/common/Select/Select'

export const ScheduleManagementPage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div>
      <PageHeader
        title="Master Timetable & Scheduling"
        description="Build, inspect, and publish conflict-free class schedules across all sections and instructors."
        breadcrumbs={[
          { label: 'Admin', path: '/admin/dashboard' },
          { label: 'Master Timetables' },
        ]}
        actions={
          <div style={{ display: 'flex', gap: '0.625rem' }}>
            <Button variant="outline" size="md" leftIcon={<Filter size={16} />}>
              Filter Timetable
            </Button>
            <Button variant="primary" size="md" leftIcon={<Plus size={16} />} onClick={() => setIsModalOpen(true)}>
              Add Schedule Slot
            </Button>
          </div>
        }
      />

      <Card variant="default">
        <CardBody>
          <EmptyState
            title="No timetable slots created for this term"
            description="Start assembling section schedules, assign faculty and rooms, or run the auto-scheduling engine."
            icon={<CalendarDays size={44} strokeWidth={1.5} />}
            action={
              <Button variant="primary" size="sm" leftIcon={<Plus size={16} />} onClick={() => setIsModalOpen(true)}>
                Create First Schedule Slot
              </Button>
            }
          />
        </CardBody>
      </Card>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Add Schedule Slot"
        description="Allocate subject, instructor, classroom, and weekly time slot."
        footer={
          <>
            <Button variant="outline" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={() => setIsModalOpen(false)}>
              Verify & Save Slot
            </Button>
          </>
        }
      >
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Input label="Subject Code & Title" placeholder="e.g. IT 312 - Web Systems & Technologies" required />
          <Input label="Instructor Name" placeholder="e.g. Prof. J. Dela Cruz" required />
          <Input label="Assigned Room" placeholder="e.g. Computer Lab 1" required />
          <Input label="Target Section" placeholder="e.g. BSIT 3-A" required />
          <Select
            label="Day of Week"
            options={[
              { value: 'MONDAY', label: 'Monday' },
              { value: 'TUESDAY', label: 'Tuesday' },
              { value: 'WEDNESDAY', label: 'Wednesday' },
              { value: 'THURSDAY', label: 'Thursday' },
              { value: 'FRIDAY', label: 'Friday' },
              { value: 'SATURDAY', label: 'Saturday' },
            ]}
            required
          />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <Input label="Start Time" type="time" required />
            <Input label="End Time" type="time" required />
          </div>
        </form>
      </Modal>
    </div>
  )
}
