import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import { Sidebar } from './Sidebar/Sidebar'
import { Header } from './Header/Header'
import { storage } from '@/utils/storage'
import { STORAGE_KEYS } from '@/utils/constants'
import './AppLayout.css'

export const AppLayout: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(() => {
    return storage.get<boolean>(STORAGE_KEYS.SIDEBAR_COLLAPSED, false) ?? false
  })
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  const handleToggleCollapse = () => {
    setIsCollapsed((prev) => {
      const next = !prev
      storage.set(STORAGE_KEYS.SIDEBAR_COLLAPSED, next)
      return next
    })
  }

  return (
    <div
      className={`scsms-layout ${
        isCollapsed ? 'scsms-layout--collapsed' : ''
      }`}
    >
      <Sidebar
        isCollapsed={isCollapsed}
        onToggleCollapse={handleToggleCollapse}
        isMobileOpen={isMobileOpen}
        onCloseMobile={() => setIsMobileOpen(false)}
      />

      <div className="scsms-layout__main">
        <Header onOpenMobileNav={() => setIsMobileOpen(true)} />

        <main className="scsms-layout__content">
          <div className="scsms-layout__container">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}
