export type DayOfWeek = 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY'

export type RoomType = 'LECTURE' | 'LABORATORY' | 'AUDITORIUM' | 'CONFERENCE'

export interface Department {
  id: string
  code: string
  name: string
  color?: string
  headName?: string
}

export interface Room {
  id: string
  name: string
  building: string
  floor: string | number
  capacity: number
  type: RoomType
  isAvailable: boolean
}

export interface Subject {
  id: string
  code: string
  title: string
  units: number
  lectureHours: number
  labHours: number
  departmentId?: string
}

export interface Section {
  id: string
  name: string
  yearLevel: number
  program: string
  studentCount: number
}

export interface ScheduleSlot {
  id: string
  subjectCode: string
  subjectTitle: string
  instructorId: string
  instructorName: string
  roomId: string
  roomName: string
  sectionId: string
  sectionName: string
  day: DayOfWeek
  startTime: string // "08:00"
  endTime: string   // "10:00"
  status: 'DRAFT' | 'APPROVED' | 'PUBLISHED' | 'CONFLICT'
}
