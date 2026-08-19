import React, { useEffect, useState, useCallback } from 'react'
import type { User, UserRole, LoginCredentials, AuthState } from '@/types/auth.types'
import { storage } from '@/utils/storage'
import { STORAGE_KEYS } from '@/utils/constants'
import { apiClient } from '@/api/client'
import { AuthContext, ROLE_USER_TEMPLATES } from './auth.context'

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>(() => {
    const savedToken = storage.getString(STORAGE_KEYS.AUTH_TOKEN)
    const savedUser = storage.get<User>(STORAGE_KEYS.USER_DATA)

    if (savedToken && savedUser) {
      return {
        user: savedUser,
        token: savedToken,
        role: savedUser.role,
        isAuthenticated: true,
        isLoading: false,
      }
    }

    // Default to a development session with ADMIN role for immediate accessibility
    const defaultRole: UserRole = 'ADMIN'
    const defaultUser = ROLE_USER_TEMPLATES[defaultRole]
    const devToken = 'mock-jwt-token-' + defaultRole.toLowerCase()

    return {
      user: defaultUser,
      token: devToken,
      role: defaultRole,
      isAuthenticated: true,
      isLoading: false,
    }
  })

  // Configure token provider on API client
  useEffect(() => {
    apiClient.setTokenProvider(() => authState.token)
  }, [authState.token])

  const logout = useCallback(() => {
    storage.remove(STORAGE_KEYS.AUTH_TOKEN)
    storage.remove(STORAGE_KEYS.REFRESH_TOKEN)
    storage.remove(STORAGE_KEYS.USER_DATA)
    setAuthState({
      user: null,
      token: null,
      role: null,
      isAuthenticated: false,
      isLoading: false,
    })
  }, [])

  // Listen for 401 unauthorized events from API client
  useEffect(() => {
    const handleUnauthorized = () => {
      logout()
    }
    window.addEventListener('scsms:unauthorized', handleUnauthorized)
    return () => window.removeEventListener('scsms:unauthorized', handleUnauthorized)
  }, [logout])

  const login = async (credentials: LoginCredentials): Promise<void> => {
    setAuthState((prev) => ({ ...prev, isLoading: true }))
    try {
      // For foundation setup: support role selection or email matching
      const targetRole = credentials.role || 'ADMIN'
      const matchedUser = ROLE_USER_TEMPLATES[targetRole] || {
        id: 'usr_' + Date.now(),
        name: credentials.email.split('@')[0].replace('.', ' ').toUpperCase(),
        email: credentials.email,
        role: targetRole,
        status: 'ACTIVE',
      }

      const generatedToken = 'session-jwt-' + Math.random().toString(36).substring(2)

      storage.set(STORAGE_KEYS.AUTH_TOKEN, generatedToken)
      storage.set(STORAGE_KEYS.USER_DATA, matchedUser)

      setAuthState({
        user: matchedUser,
        token: generatedToken,
        role: matchedUser.role,
        isAuthenticated: true,
        isLoading: false,
      })
    } catch (error) {
      setAuthState((prev) => ({ ...prev, isLoading: false }))
      throw error
    }
  }

  const switchRole = (newRole: UserRole) => {
    const targetUser = ROLE_USER_TEMPLATES[newRole]
    const newToken = 'mock-jwt-token-' + newRole.toLowerCase()

    storage.set(STORAGE_KEYS.AUTH_TOKEN, newToken)
    storage.set(STORAGE_KEYS.USER_DATA, targetUser)

    setAuthState({
      user: targetUser,
      token: newToken,
      role: newRole,
      isAuthenticated: true,
      isLoading: false,
    })
  }

  const updateUser = (userData: Partial<User>) => {
    if (!authState.user) return
    const updated = { ...authState.user, ...userData }
    storage.set(STORAGE_KEYS.USER_DATA, updated)
    setAuthState((prev) => ({
      ...prev,
      user: updated,
      role: updated.role,
    }))
  }

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        login,
        logout,
        switchRole,
        updateUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
