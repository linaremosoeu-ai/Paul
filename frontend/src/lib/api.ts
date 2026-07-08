export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'

export const API_ENDPOINTS = {
  // Health
  HEALTH: `${API_URL}/api/health`,

  // Companies
  COMPANIES: `${API_URL}/api/companies`,
  COMPANY: (id: string) => `${API_URL}/api/companies/${id}`,

  // Integrations
  INTEGRATIONS: `${API_URL}/api/integrations`,
  INTEGRATION: (id: string) => `${API_URL}/api/integrations/${id}`,

  // Metrics
  METRICS: `${API_URL}/api/metrics`,
  METRIC: (id: string) => `${API_URL}/api/metrics/${id}`,

  // Anomalies
  ANOMALIES: `${API_URL}/api/anomalies`,
  ANOMALY: (id: string) => `${API_URL}/api/anomalies/${id}`,

  // Recommendations
  RECOMMENDATIONS: `${API_URL}/api/recommendations`,
  RECOMMENDATION: (id: string) => `${API_URL}/api/recommendations/${id}`,

  // Chat
  CHAT: `${API_URL}/api/chat`,
}
