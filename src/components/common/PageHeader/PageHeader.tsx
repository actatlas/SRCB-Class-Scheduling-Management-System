import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import './PageHeader.css'

export interface BreadcrumbItem {
  label: string
  path?: string
}

export interface PageHeaderProps {
  title: string
  description?: string
  breadcrumbs?: BreadcrumbItem[]
  actions?: React.ReactNode
  badge?: React.ReactNode
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  description,
  breadcrumbs,
  actions,
  badge,
}) => {
  return (
    <header className="scsms-page-header">
      <div className="scsms-page-header__main">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="scsms-page-header__breadcrumbs" aria-label="Breadcrumbs">
            {breadcrumbs.map((crumb, idx) => {
              const isLast = idx === breadcrumbs.length - 1
              return (
                <React.Fragment key={crumb.label + idx}>
                  {idx > 0 && <ChevronRight size={14} className="scsms-page-header__breadcrumb-separator" />}
                  {crumb.path && !isLast ? (
                    <Link to={crumb.path} className="scsms-page-header__breadcrumb-link">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="scsms-page-header__breadcrumb-current">{crumb.label}</span>
                  )}
                </React.Fragment>
              )
            })}
          </nav>
        )}
        <div className="scsms-page-header__title-row">
          <h1 className="scsms-page-header__title">{title}</h1>
          {badge}
        </div>
        {description && <p className="scsms-page-header__description">{description}</p>}
      </div>

      {actions && <div className="scsms-page-header__actions">{actions}</div>}
    </header>
  )
}
