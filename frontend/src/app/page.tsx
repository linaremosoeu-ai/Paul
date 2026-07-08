'use client'

import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      <div className="container py-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            ☂️ Umbrella
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            Unified business intelligence platform that automatically analyzes your data, detects anomalies, and recommends actions.
          </p>
          <div className="flex gap-4">
            <Link
              href="/dashboard"
              className="btn btn-primary inline-flex items-center gap-2"
            >
              Get Started
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
            <Link
              href="/chat"
              className="btn btn-secondary"
            >
              Try Chat
            </Link>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">📊 Unified Data</h3>
            <p className="text-gray-600">Connect all your business systems in one place. Salesforce, HubSpot, QuickBooks, and more.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">🔍 Anomaly Detection</h3>
            <p className="text-gray-600">AI-powered system automatically detects unusual patterns and changes in your business metrics.</p>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">💡 Smart Recommendations</h3>
            <p className="text-gray-600">Get AI-generated, actionable recommendations to improve revenue, reduce costs, and grow faster.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
