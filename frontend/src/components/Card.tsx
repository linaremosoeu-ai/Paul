'use client'

interface CardProps {
  title?: string
  subtitle?: string
  children: React.ReactNode
  className?: string
}

export function Card({ title, subtitle, children, className = '' }: CardProps) {
  return (
    <div className={`card p-6 ${className}`}>
      {(title || subtitle) && (
        <div className="mb-6">
          {title && <h2 className="text-xl font-semibold text-gray-900">{title}</h2>}
          {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
        </div>
      )}
      {children}
    </div>
  )
}
