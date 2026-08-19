import React from 'react'
import { Outlet } from 'react-router-dom'
import logoImg from '@/assets/Logo.png'
import bgFrontDesk from '@/assets/SRCB FRONT DES.png'
import './AuthLayout.css'

export const AuthLayout: React.FC = () => {
  return (
    <div className="scsms-auth-layout">
      {/* Visual Brand Side */}
      <div className="scsms-auth-layout__brand-side">
        <div className="scsms-auth-layout__overlay" />
        <img
          src={bgFrontDesk}
          alt="Santa Rita College of Bataan"
          className="scsms-auth-layout__bg-image"
        />

        <div className="scsms-auth-layout__brand-content">
          <div className="scsms-auth-layout__brand-badge">
            <img src={logoImg} alt="SRCB Logo" className="scsms-auth-layout__brand-logo" />
            <div>
              <div className="scsms-auth-layout__inst-title">Santa Rita College of Bataan</div>
              <div className="scsms-auth-layout__inst-sub">Excellence & Service</div>
            </div>
          </div>

          <div className="scsms-auth-layout__hero-text">
            <h2>Intelligent Academic Timetable & Scheduling Platform</h2>
            <p>
              Streamlined conflict-free class scheduling, automated room allocation, and faculty workload management for the SRCB community.
            </p>
          </div>

          <div className="scsms-auth-layout__footer-note">
            <span>Official Portal • Class Scheduling Management System</span>
          </div>
        </div>
      </div>

      {/* Form / Outlet Side */}
      <div className="scsms-auth-layout__form-side">
        <div className="scsms-auth-layout__form-container">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
