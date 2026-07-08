'use client'

import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

interface ChartDataPoint {
  date: string
  value: number
  [key: string]: string | number
}

interface TimeSeriesChartProps {
  title: string
  data: ChartDataPoint[]
  dataKey: string
  color?: string
}

export function TimeSeriesChart({ title, data, dataKey, color = '#3B82F6' }: TimeSeriesChartProps) {
  return (
    <div className="card p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey={dataKey} stroke={color} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

interface BarChartComponentProps {
  title: string
  data: ChartDataPoint[]
  dataKey: string
  color?: string
}

export function BarChartComponent({ title, data, dataKey, color = '#10B981' }: BarChartComponentProps) {
  return (
    <div className="card p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Bar dataKey={dataKey} fill={color} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
