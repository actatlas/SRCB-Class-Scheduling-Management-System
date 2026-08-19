import { API_CONFIG } from './config'
import type { ApiResponse, ApiErrorResponse, QueryParams } from '@/types/api.types'

class ApiClient {
  private baseURL: string
  private getToken: () => string | null = () => null

  constructor(baseURL: string = API_CONFIG.baseURL) {
    this.baseURL = baseURL
  }

  /**
   * Configure the token provider for attaching bearer tokens
   */
  public setTokenProvider(provider: () => string | null) {
    this.getToken = provider
  }

  private buildURL(endpoint: string, params?: QueryParams): string {
    const url = new URL(
      endpoint.startsWith('http') ? endpoint : `${this.baseURL}${endpoint.startsWith('/') ? '' : '/'}${endpoint}`
    )
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          url.searchParams.append(key, String(value))
        }
      })
    }
    return url.toString()
  }

  private getHeaders(customHeaders?: HeadersInit): Headers {
    const headers = new Headers({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      ...customHeaders,
    })

    const token = this.getToken()
    if (token) {
      headers.set('Authorization', `Bearer ${token}`)
    }

    return headers
  }

  private async handleResponse<T>(response: Response): Promise<ApiResponse<T>> {
    const isJson = response.headers.get('content-type')?.includes('application/json')
    const data = isJson ? await response.json() : null

    if (!response.ok) {
      const error: ApiErrorResponse = {
        success: false,
        message: data?.message || `Request failed with status ${response.status} (${response.statusText})`,
        errors: data?.errors,
        statusCode: response.status,
        timestamp: new Date().toISOString(),
      }

      if (response.status === 401) {
        // Trigger token expiration event or cleanup if needed
        window.dispatchEvent(new CustomEvent('scsms:unauthorized'))
      }

      throw error
    }

    return (
      data || {
        success: true,
        data: null as unknown as T,
      }
    )
  }

  public async get<T>(endpoint: string, params?: QueryParams, headers?: HeadersInit): Promise<ApiResponse<T>> {
    const url = this.buildURL(endpoint, params)
    const response = await fetch(url, {
      method: 'GET',
      headers: this.getHeaders(headers),
    })
    return this.handleResponse<T>(response)
  }

  public async post<T>(endpoint: string, body?: unknown, headers?: HeadersInit): Promise<ApiResponse<T>> {
    const url = this.buildURL(endpoint)
    const response = await fetch(url, {
      method: 'POST',
      headers: this.getHeaders(headers),
      body: body ? JSON.stringify(body) : undefined,
    })
    return this.handleResponse<T>(response)
  }

  public async put<T>(endpoint: string, body?: unknown, headers?: HeadersInit): Promise<ApiResponse<T>> {
    const url = this.buildURL(endpoint)
    const response = await fetch(url, {
      method: 'PUT',
      headers: this.getHeaders(headers),
      body: body ? JSON.stringify(body) : undefined,
    })
    return this.handleResponse<T>(response)
  }

  public async patch<T>(endpoint: string, body?: unknown, headers?: HeadersInit): Promise<ApiResponse<T>> {
    const url = this.buildURL(endpoint)
    const response = await fetch(url, {
      method: 'PATCH',
      headers: this.getHeaders(headers),
      body: body ? JSON.stringify(body) : undefined,
    })
    return this.handleResponse<T>(response)
  }

  public async delete<T>(endpoint: string, headers?: HeadersInit): Promise<ApiResponse<T>> {
    const url = this.buildURL(endpoint)
    const response = await fetch(url, {
      method: 'DELETE',
      headers: this.getHeaders(headers),
    })
    return this.handleResponse<T>(response)
  }
}

export const apiClient = new ApiClient()
