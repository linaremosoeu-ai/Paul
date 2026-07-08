'use client'

import { Card } from '@/components/Card'
import { TimeSeriesChart } from '@/components/Charts'
import { useState } from 'react'

const anomalies = [
  {
    id: 1,
    title: 'Revenue Drop',
    description: '30% decrease in daily revenue',
    severity: 'high',
    detectedAt: '2 hours ago',
    metric: 'Revenue',
  },
  {
    id: 2,
    title: 'Customer Churn Spike',
    description: '5 enterprise customers churned',
    severity: 'critical',
    detectedAt: '30 minutes ago',
    metric: 'Customer Churn',
  },
  {
    id: 3,
    title: 'Operational Cost Increase',
    description: 'Unexpected 15% cost increase',
    severity: 'medium',
    detectedAt: '4 hours ago',
    metric: 'Operating Cost',
  },
]

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case 'critical':
      return 'bg-red-50 border-red-200'
    case 'high':
      return 'bg-orange-50 border-orange-200'
    case 'medium':
      return 'bg-yellow-50 border-yellow-200'
    default:
      return 'bg-gray-50 border-gray-200'
  }
}

const getSeverityBadge = (severity: string) => {
  switch (severity) {
    case 'critical':
      return 'badge-danger'
    case 'high':
      return 'badge bg-orange-100 text-orange-800'
    case 'medium':
      return 'badge-warning'
    default:
      return 'badge bg-gray-100 text-gray-800'
  }
}

export default function Anomalies() {
  const [selectedAnomaly, setSelectedAnomaly] = useState<typeof anomalies[0] | null>(null)

  const mockData = [
    { date: 'Day 1', value: 4000 },
    { date: 'Day 2', value: 3500 },
    { date: 'Day 3', value: 3200 },
    { date: 'Day 4', value: 2800 },
    { date: 'Day 5', value: 2000 },
    { date: 'Day 6', value: 1900 },
    { date: 'Day 7', value: 2100 },
  ]

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900">Anomalies</h1>
        <p className="text-gray-600 mt-2">Unusual patterns and changes detected in your business data</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Anomalies List */}
        <div className="lg:col-span-1 space-y-3">
          {anomalies.map((anomaly) => (
            <div
              key={anomaly.id}
              onClick={() => setSelectedAnomaly(anomaly)}
              className={`card p-4 cursor-pointer transition-all ${
                selectedAnomaly?.id === anomaly.id
                  ? 'ring-2 ring-blue-500'
                  : ''
              } ${getSeverityColor(anomaly.severity)}`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1">
                  <p className="font-semibold text-gray-900">{anomaly.title}</p>
                  <p className="text-sm text-gray-600 mt-1">{anomaly.description}</p>
                  <p className="text-xs text-gray-500 mt-2">{anomaly.detectedAt}</p>
                </div>
                <span className={`badge ${getSeverityBadge(anomaly.severity)} flex-shrink-0`}>
                  {anomaly.severity}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Details */}
        {selectedAnomaly && (
          <div className="lg:col-span-2 space-y-4">
            <Card title={selectedAnomaly.title}>
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-medium text-gray-600">Description</p>
                  <p className="text-gray-900 mt-1">{selectedAnomaly.description}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Severity</p>
                  <p className="text-gray-900 mt-1 capitalize">{selectedAnomaly.severity}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Metric Affected</p>
                  <p className="text-gray-900 mt-1">{selectedAnomaly.metric}</p>
                </div>
                <button className="btn btn-primary w-full mt-4">
                  Analyze Root Cause
                </button>
              </div>
            </Card>

            <TimeSeriesChart
              title="Historical Trend"
              data={mockData}
              dataKey="value"
            />
          </div>
        )}
      </div>
    </div>
  )
}
