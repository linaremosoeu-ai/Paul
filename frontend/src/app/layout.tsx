import type { Metadata } from 'next'
import { Providers } from './providers'
import { Navigation } from '@/components/Navigation'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Umbrella - Business Intelligence Platform',
  description: 'Unified business intelligence and autonomous insights platform',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navigation />
          <main>
            {children}
          </main>
        </Providers>
      </body>
    </html>
  )
}
