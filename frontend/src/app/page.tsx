'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">☂️</span>
              <h1 className="text-2xl font-bold text-slate-900">Umbrella</h1>
            </div>
            <div className="flex space-x-4">
              <Link href="/login" className="text-slate-600 hover:text-slate-900">
                Login
              </Link>
              <Link href="/auth/signup" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-slate-900 mb-6">
            The Business Brain
          </h2>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
            AI-powered Business Intelligence Layer that connects, understands, explains, predicts, and recommends.
          </p>
          <p className="text-lg text-slate-500 mb-12 max-w-2xl mx-auto">
            Turn your business data into business decisions.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              href="/dashboard"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Get Started
            </Link>
            <Link
              href="#features"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-slate-900 mb-12">
            Core Capabilities
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: '1. Connect Everything',
                description: 'Integrate with your existing software ecosystem - CRM, ERP, HR, Accounting, and more.'
              },
              {
                title: '2. Understand Context',
                description: 'Recognize relationships between departments and systems for complete business visibility.'
              },
              {
                title: '3. Explain Why',
                description: 'Get reasons behind business changes, not just dashboards. Understand root causes automatically.'
              },
              {
                title: '4. Predict Outcomes',
                description: 'Forecast business scenarios and identify risks before they impact operations.'
              },
              {
                title: '5. Recommend Actions',
                description: 'Receive practical, data-driven recommendations with expected impact.'
              },
              {
                title: '6. Learn Continuously',
                description: 'AI improves recommendations over time as you take action and measure results.'
              }
            ].map((feature, index) => (
              <div key={index} className="p-6 border border-slate-200 rounded-lg hover:shadow-lg transition">
                <h4 className="text-lg font-semibold text-slate-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-slate-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="mb-2">☂️🧠 Every company has data. Umbrella gives it understanding.</p>
          <p className="text-slate-400">© 2024 Umbrella. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
