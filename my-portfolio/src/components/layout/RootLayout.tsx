import type { ReactNode } from 'react'
import { Header } from './Header'
import { Footer } from './Footer'

interface RootLayoutProps {
  children: ReactNode
}

/**
 * RootLayout — wraps every page with Header + main content + Footer.
 * The <main> tag has padding-top to account for the fixed header.
 */
export function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg)]">
      <Header />
      <main className="flex-1 pt-[72px]">{children}</main>
      <Footer />
    </div>
  )
}
