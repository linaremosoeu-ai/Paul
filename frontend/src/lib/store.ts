import { create } from 'zustand'

interface Company {
  id: string
  name: string
  description?: string
}

interface AppState {
  company: Company | null
  setCompany: (company: Company) => void
  isLoading: boolean
  setIsLoading: (loading: boolean) => void
}

export const useAppStore = create<AppState>((set) => ({
  company: null,
  setCompany: (company) => set({ company }),
  isLoading: false,
  setIsLoading: (loading) => set({ isLoading: loading }),
}))
