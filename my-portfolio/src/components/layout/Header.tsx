import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { useScrollY } from '@/hooks'
import { SITE, NAV_LINKS } from '@/constants'
import { Container } from '@/components'

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const scrollY = useScrollY()
  const isScrolled = scrollY > 20

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        isScrolled
          ? 'glass border-b border-[var(--border)] py-3'
          : 'py-5 bg-transparent'
      )}
    >
      <Container>
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="font-display font-bold text-lg tracking-tight text-[var(--fg)] hover:text-[var(--color-brand-500)] transition-colors"
          >
            {SITE.name}
            <span className="text-[var(--color-brand-500)]">.</span>
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[var(--color-brand-500)] transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-[var(--radius-md)] bg-[var(--color-brand-500)] text-white hover:bg-[var(--color-brand-600)] transition-all duration-200 hover:-translate-y-px"
          >
            Let&apos;s talk
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-[var(--radius-md)] text-[var(--fg-muted)] hover:bg-[var(--bg-muted)] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </Container>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            className="md:hidden overflow-hidden glass border-t border-[var(--border)]"
          >
            <Container>
              <ul className="flex flex-col py-4 gap-1">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-3 py-2.5 text-sm font-medium text-[var(--fg-muted)] hover:text-[var(--fg)] hover:bg-[var(--bg-muted)] rounded-[var(--radius-md)] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li className="pt-2">
                  <a
                    href="#contact"
                    onClick={() => setMobileOpen(false)}
                    className="block w-full text-center px-4 py-2.5 text-sm font-medium rounded-[var(--radius-md)] bg-[var(--color-brand-500)] text-white"
                  >
                    Let&apos;s talk
                  </a>
                </li>
              </ul>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
