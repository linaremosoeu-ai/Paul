'use client'

interface KPICardProps {
  label: string
  value: string | number
  unit?: string
  change?: number
  trend?: 'up' | 'down' | 'neutral'
  icon?: React.ReactNode
}

export function KPICard({ label, value, unit, change, trend, icon }: KPICardProps) {
  const trendColor = {
    up: 'text-green-600',
    down: 'text-red-600',
    neutral: 'text-gray-600',
  }[trend || 'neutral']

  return (
    <div className="card p-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{label}</p>
          <div className="flex items-baseline gap-2 mt-2">
            <p className="text-3xl font-bold text-gray-900">{value}</p>
            {unit && <span className="text-sm text-gray-500">{unit}</span>}
          </div>
          {change !== undefined && (
            <p className={`text-sm mt-2 ${trendColor}`}>
              {change > 0 ? '+' : ''}{change}% vs last period
            </p>
          )}
        </div>
        {icon && <div className="text-gray-400">{icon}</div>}
      </div>
    </div>
  )
}
