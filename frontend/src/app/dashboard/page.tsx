'use client'

import { Card } from '@/components/Card'
import { KPICard } from '@/components/KPICard'
import { TimeSeriesChart, BarChartComponent } from '@/components/Charts'
import { SparklesIcon, TrendingUpIcon, AlertIcon, LightBulbIcon } from '@heroicons/react/24/outline'

const mockData = [
  { date: 'Jan 1', value: 4000 },
  { date: 'Jan 2', value: 3000 },
  { date: 'Jan 3', value: 2000 },
  { date: 'Jan 4', value: 2780 },
  { date: 'Jan 5', value: 1890 },
  { date: 'Jan 6', value: 2390 },
  { date: 'Jan 7', value: 3490 },
]

export default function Dashboard() {
  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">Business intelligence and insights at a glance</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <KPICard
          label="Total Revenue"
          value="$1.2M"
          change={12}
          trend="up"
          icon={<TrendingUpIcon className="w-8 h-8" />}
        />
        <KPICard
          label="Active Customers"
          value="847"
          change={5}
          trend="up"
        />
        <KPICard
          label="Churn Rate"
          value="2.3%"
          change={-0.5}
          trend="down"
        />
        <KPICard
          label="Health Score"
          value="87/100"
          trend="neutral"
        />
      </div>

      {/* Alerts & Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
        <Card title="⚠️ Active Anomalies" subtitle="Issues detected in your business">
          <div className="space-y-3">
            <div className="flex items-start gap-3 pb-3 border-b border-gray-200">
              <AlertIcon className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
              <div>
                <p className="font-medium text-gray-900">Revenue Drop</p>
                <p className="text-sm text-gray-600">30% decrease detected in Q3</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <AlertIcon className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
              <div>
                <p className="font-medium text-gray-900">Customer Acquisition Cost Spike</p>
                <p className="text-sm text-gray-600">15% increase in CAC this month</p>
              </div>
            </div>
          </div>
        </Card>

        <Card title="💡 Recommendations" subtitle="AI-suggested actions">
          <div className="space-y-3">
            <div className="flex items-start gap-3 pb-3 border-b border-gray-200">
              <LightBulbIcon className="w-5 h-5 text-blue-500 flex-shrink-0 mt-1" />
              <div>
                <p className="font-medium text-gray-900">Optimize pricing strategy</p>
                <p className="text-sm text-gray-600">Could improve margins by 8%</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <LightBulbIcon className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <p className="font-medium text-gray-900">Launch retention campaign</p>
                <p className="text-sm text-gray-600">Reduce churn by 3-5%</p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <TimeSeriesChart
          title="Revenue Trend"
          data={mockData}
          dataKey="value"
        />
        <BarChartComponent
          title="Monthly Comparison"
          data={mockData}
          dataKey="value"
        />
      </div>
    </div>
  )
}
