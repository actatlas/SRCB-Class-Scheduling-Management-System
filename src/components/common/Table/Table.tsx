import React from 'react'
import './Table.css'

export interface Column<T> {
  key: string
  header: string | React.ReactNode
  render?: (row: T, index: number) => React.ReactNode
  align?: 'left' | 'center' | 'right'
  width?: string
}

export interface TableProps<T> {
  columns: Column<T>[]
  data: T[]
  isLoading?: boolean
  emptyMessage?: string
  rowKey: (row: T, index: number) => string | number
  onRowClick?: (row: T) => void
  className?: string
}

export function Table<T>({
  columns,
  data,
  isLoading = false,
  emptyMessage = 'No records found.',
  rowKey,
  onRowClick,
  className = '',
}: TableProps<T>) {
  return (
    <div className={`scsms-table-container ${className}`}>
      <table className="scsms-table">
        <thead>
          <tr>
            {columns.map((col) => (
              <th
                key={col.key}
                className={`scsms-table__th scsms-table__th--${col.align || 'left'}`}
                style={{ width: col.width }}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {isLoading ? (
            Array.from({ length: 4 }).map((_, i) => (
              <tr key={`skeleton-${i}`} className="scsms-table__skeleton-row">
                {columns.map((col) => (
                  <td key={col.key} className="scsms-table__td">
                    <div className="scsms-table__skeleton-cell animate-pulse" />
                  </td>
                ))}
              </tr>
            ))
          ) : data.length === 0 ? (
            <tr>
              <td colSpan={columns.length} className="scsms-table__empty-cell">
                {emptyMessage}
              </td>
            </tr>
          ) : (
            data.map((row, index) => (
              <tr
                key={rowKey(row, index)}
                className={`scsms-table__tr ${onRowClick ? 'scsms-table__tr--clickable' : ''}`}
                onClick={() => onRowClick?.(row)}
              >
                {columns.map((col) => (
                  <td
                    key={col.key}
                    className={`scsms-table__td scsms-table__td--${col.align || 'left'}`}
                  >
                    {col.render ? col.render(row, index) : ((row as Record<string, unknown>)[col.key] as React.ReactNode)}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}
