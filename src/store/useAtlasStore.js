import { create } from 'zustand'

const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export const useAtlasStore = create((set, get) => ({
  // Global state
  symbols: [],
  strategies: [],
  logs: [],
  status: {
    backend: 'idle'
  },

  // Actions
  fetchSymbols: async () => {
    try {
      const r = await fetch(`${backend}/api/symbols`)
      const data = await r.json()
      set({ symbols: data.symbols || [] })
    } catch (e) {
      console.error('fetchSymbols', e)
    }
  },

  fetchStrategies: async () => {
    try {
      const r = await fetch(`${backend}/api/strategies`)
      const data = await r.json()
      set({ strategies: data.items || [] })
    } catch (e) {
      console.error('fetchStrategies', e)
    }
  },

  saveStrategy: async (strategy) => {
    const r = await fetch(`${backend}/api/strategies`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(strategy)
    })
    const data = await r.json()
    await get().fetchStrategies()
    return data
  },

  getSignal: async (symbol, timeframe = '1m', features = {}) => {
    const r = await fetch(`${backend}/api/ai/signal`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ symbol, timeframe, features })
    })
    return r.json()
  },

  validateRisk: async (order, rules = {}) => {
    const r = await fetch(`${backend}/api/risk/validate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(order)
    })
    // Note: rules can be enforced client-side before calling route
    return r.json()
  },

  routeOrder: async (order) => {
    const r = await fetch(`${backend}/api/order/route`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(order)
    })
    const data = await r.json()
    await get().fetchLogs()
    return data
  },

  fetchLogs: async () => {
    try {
      const r = await fetch(`${backend}/api/logs`)
      const data = await r.json()
      set({ logs: data.items || [] })
    } catch (e) {
      console.error('fetchLogs', e)
    }
  }
}))
