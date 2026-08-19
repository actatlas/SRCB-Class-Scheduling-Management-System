export const storage = {
  get<T>(key: string, fallback: T | null = null): T | null {
    try {
      const item = localStorage.getItem(key)
      return item ? (JSON.parse(item) as T) : fallback
    } catch {
      return fallback
    }
  },

  getString(key: string, fallback: string = ''): string {
    try {
      return localStorage.getItem(key) || fallback
    } catch {
      return fallback
    }
  },

  set(key: string, value: unknown): void {
    try {
      if (typeof value === 'string') {
        localStorage.setItem(key, value)
      } else {
        localStorage.setItem(key, JSON.stringify(value))
      }
    } catch (e) {
      console.warn(`Error writing ${key} to localStorage:`, e)
    }
  },

  remove(key: string): void {
    try {
      localStorage.removeItem(key)
    } catch (e) {
      console.warn(`Error removing ${key} from localStorage:`, e)
    }
  },

  clear(): void {
    try {
      localStorage.clear()
    } catch (e) {
      console.warn('Error clearing localStorage:', e)
    }
  },
}
